// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import React, { useEffect, useMemo,useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { getFailingThreshold, getPassingThreshold } from 'src/polkassemblyutils';
import { LoadingStatusType, VoteThreshold } from 'src/types';
import Card from 'src/ui-components/Card';
import HelperTooltip from 'src/ui-components/HelperTooltip';
import Loader from 'src/ui-components/Loader';
import PassingInfo from 'src/ui-components/PassingInfo';
import VoteProgress from 'src/ui-components/VoteProgress';
import formatBnBalance from 'src/util/formatBnBalance';
import getNetwork from 'src/util/getNetwork';

interface Props {
	className?: string
	referendumId: number
	threshold?: VoteThreshold
	setLastVote: React.Dispatch<React.SetStateAction<string | null | undefined>>
	status?: string;
}

const ZERO = new BN(0);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ReferendumVoteInfo = ({ className, referendumId, threshold, setLastVote, status }: Props) => {
	const [totalIssuance] = useState(ZERO);
	const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>({ isLoading: true, message:'Loading votes' });
	const [voteInfo, setVoteInfo] = useState<any | null>(null);
	const turnoutPercentage2 = useMemo( () => {
		if (totalIssuance.isZero()) {
			return 0;
		}
		// BN doens't handle floats. If we devide a number by a bigger number (12/100 --> 0.12), the result will be 0
		// therefore, we first multiply by 10 000, which gives (120 000/100 = 1200) go to Number which supports floats
		// and devide by 100 to have percentage --> 12.00%
		return voteInfo?.turnout.muln(10000).div(totalIssuance).toNumber()/100;
	} , [voteInfo?.turnout, totalIssuance]);

	const getThreshold = useMemo(
		() => {
			if (!voteInfo?.vote_threshold || voteInfo?.isPassing === null) return ZERO;
			// if the referendum is passing, we're interested in the failing threshold
			if (voteInfo?.isPassing) {
				const res = getFailingThreshold({
					ayes: voteInfo?.aye_amount,
					ayesWithoutConviction: voteInfo?.aye_without_conviction,
					threshold: voteInfo?.vote_threshold,
					totalIssuance
				});
				return res.isValid && res.failingThreshold ? res.failingThreshold : ZERO;
			} else {
				const res = getPassingThreshold({
					nays: voteInfo?.nay_amount,
					naysWithoutConviction: voteInfo?.nay_without_conviction,
					threshold: voteInfo?.vote_threshold,
					totalIssuance
				});
				return res.isValid && res.passingThreshold ? res.passingThreshold : ZERO;
			}
		},
		[voteInfo?.aye_amount, voteInfo?.aye_without_conviction, voteInfo?.isPassing, voteInfo?.nay_amount, voteInfo?.nay_without_conviction, voteInfo?.vote_threshold, totalIssuance]
	);
	useEffect(() => {
		// eslint-disable-next-line quotes
		fetch(`https://${getNetwork()}.api.subscan.io/api/scan/democracy/referendum`, { body: JSON.stringify({ referendum_index: referendumId }), method: 'POST' }).then(async (res) => {
			try {
				const response = await res.json();
				const info = response?.data?.info;
				if (info) {
					info.aye_amount = new BN(info.aye_amount);
					info.aye_without_conviction = new BN(info.aye_without_conviction);
					info.nay_amount = new BN(info.nay_amount);
					info.nay_without_conviction = new BN(info.nay_without_conviction);
					info.turnout = new BN(info.turnout);
					setVoteInfo(info);
					setLoadingStatus({ isLoading: false, message: '' });
				}
			} catch (error) {
				setVoteInfo(null);
			}
		}).catch(() => {
			setVoteInfo(null);
		});
	},[referendumId]);
	return (
		<>
			{voteInfo?<>
				<PassingInfo status={status}/>
				<Card className={loadingStatus.isLoading ? `LoaderWrapper ${className}` : className}>
					{loadingStatus.isLoading
						? <Loader text={loadingStatus.message} timeout={30000} timeoutText='Api is unresponsive.'/>
						: <>
							{
								!status
									? <Loader className={'progressLoader'} text={'Loading vote progress'} timeout={90000} timeoutText='Vote calculation failed' delayText='The results should be available soon!' delayTextTimeout={30000}/>
									: <VoteProgress
										ayeVotes={voteInfo?.aye_amount}
										className='vote-progress'
										isPassing={status === 'Passed' || status === 'Executed'}
										threshold={getThreshold}
										nayVotes={voteInfo?.nay_amount}
										thresholdType={voteInfo?.vote_threshold}
									/>
							}
							<Grid columns={3} divided>
								<Grid.Row>
									<Grid.Column>
										<h6>Turnout {turnoutPercentage2 > 0 && <span className='turnoutPercentage'>({turnoutPercentage2}%)</span>}</h6>
										<div>{formatBnBalance(voteInfo?.turnout, { numberAfterComma: 2, withUnit: true })}</div>
									</Grid.Column>
									<Grid.Column>
										<h6>Aye <HelperTooltip content='Aye votes without taking conviction into account'/></h6>
										<div>{formatBnBalance(voteInfo?.aye_without_conviction, { numberAfterComma: 2, withUnit: true })}</div>
									</Grid.Column>
									<Grid.Column>
										<h6>Nay <HelperTooltip content='Nay votes without taking conviction into account'/></h6>
										<div>{formatBnBalance(voteInfo?.nay_without_conviction, { numberAfterComma: 2, withUnit: true })}</div>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</>}
				</Card>
			</>
				: null
			}
		</>
	);
};

export default styled(ReferendumVoteInfo)`
	padding-bottom: 1rem;

	.vote-progress {
		margin-bottom: 5rem;
	}

	.LoaderWrapper {
		height: 15rem;
		position: absolute;
		width: 100%;
	}

	.turnoutPercentage {
		font-weight: normal;
		font-size: sm;
	}

	.progressLoader{
		position: inherit;
		height: 10rem;
		.loader {
			margin-top: -4.5rem !important;
		}
	}
`;

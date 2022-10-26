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
	const [totalIssuance, setTotalIssuance] = useState(ZERO);
	const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>({ isLoading: true, message:'Loading votes' });
	const [voteInfo, setVoteInfo] = useState<any | null>(null);
	const turnoutPercentage = useMemo( () => {
		if (totalIssuance.isZero()) {
			return 0;
		}
		// BN doesn't handle floats. If we divide a number by a bigger number (12/100 --> 0.12), the result will be 0
		// therefore, we first multiply by 10 000, which gives (120 000/100 = 1200) go to Number which supports floats
		// and divide by 100 to have percentage --> 12.00%
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
		let cancel = false;
		// eslint-disable-next-line quotes
		fetch(`https://${getNetwork()}.api.subscan.io/api/scan/democracy/referendum`, { body: JSON.stringify({ referendum_index: referendumId }), method: 'POST' }).then(async (res) => {
			if (cancel) return;
			try {
				const response = await res.json();
				const info = response?.data?.info;
				if (info) {
					if (info.status === 'notPassed'){
						info.isPassing = false;
					} else {
						info.isPassing = true;
					}
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
		return () => {
			cancel = true;
		};
	},[referendumId]);

	useEffect(() => {
		let cancel = false;
		// eslint-disable-next-line quotes
		fetch(`https://${getNetwork()}.api.subscan.io/api/scan/token`, { method: 'POST' }).then(async (res) => {
			if (cancel) return;
			try {
				const response = await res.json();
				if (response?.data?.token?.length > 0 && response?.data?.detail) {
					const { token, detail } = response.data;
					setTotalIssuance(new BN(detail[token[0]]?.total_issuance));
				}
			} catch (error) {
				setTotalIssuance(ZERO);
			}
		}).catch(() => {
			setTotalIssuance(ZERO);
		});
		return () => {
			cancel = true;
		};
	},[]);
	console.log({ status, voteInfo });
	return (
		<>
			{
				loadingStatus.isLoading
					?<Card className={className}>
						<Loader text={loadingStatus.message} timeout={30000} timeoutText='Api is unresponsive.'/>
					</Card>
					:
					<>
						{
							!voteInfo
								?<Card className={className}>
									<Loader text={'Loading vote progress'} timeout={90000} timeoutText='Vote calculation failed' delayText='The results should be available soon!' delayTextTimeout={30000}/>
								</Card>
								:
								<>
									<PassingInfo status={status} voteStatus={voteInfo?.status}/>
									<Card className={className}>
										<VoteProgress
											ayeVotes={voteInfo?.aye_amount}
											className='vote-progress'
											isPassing={voteInfo?.isPassing}
											threshold={getThreshold}
											nayVotes={voteInfo?.nay_amount}
											thresholdType={voteInfo?.vote_threshold}
										/>
										<Grid columns={3} divided>
											<Grid.Row>
												<Grid.Column>
													<h6>Turnout {turnoutPercentage > 0 && <span className='turnoutPercentage'>({turnoutPercentage}%)</span>}</h6>
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
									</Card>
								</>
						}
					</>
			}
		</>
	);
};

export default styled(ReferendumVoteInfo)`
	position: static;
	margin-bottom: 1rem;

	.vote-progress {
		margin-bottom: 5rem;
	}


	.turnoutPercentage {
		font-weight: normal;
		font-size: sm;
	}

`;

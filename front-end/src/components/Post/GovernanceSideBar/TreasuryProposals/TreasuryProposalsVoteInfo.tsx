// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import styled from '@xstyled/styled-components';
import React, { useEffect, useState } from 'react';
import { LoadingStatusType } from 'src/types';
import Card from 'src/ui-components/Card';
import Loader from 'src/ui-components/Loader';
import PassingInfo from 'src/ui-components/PassingInfo';
import getNetwork from 'src/util/getNetwork';

import VoteProgress from './VoteProgress';

interface Props {
	className?: string
	proposalId: number
	status?: string;
}

const TreasuryProposalsVoteInfo = ({ className, proposalId, status }: Props) => {
	const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>({ isLoading: true, message:'Loading votes' });
	const [voteInfo, setVoteInfo] = useState<any | null>(null);

	useEffect(() => {
		let cancel = false;
		// eslint-disable-next-line quotes
		fetch(`https://${getNetwork()}.api.subscan.io/api/scan/treasury/proposal`, { body: JSON.stringify({ proposal_id: proposalId }), method: 'POST' }).then(async (res) => {
			if (cancel) return;
			try {
				const response = await res.json();
				console.log(response);
				const council = response?.data?.info?.council;
				const info: any = {};
				if (council) {
					if (council.status === 'notPassed'){
						info.isPassing = false;
					} else {
						info.isPassing = true;
					}
					info.status = council.status;
					info.aye_amount = (council.aye_votes);
					info.nay_amount = (council.nay_votes);
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
	},[proposalId]);

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
											isPassing={voteInfo?.isPassing}
											nayVotes={voteInfo?.nay_amount}
										/>
									</Card>
								</>
						}
					</>
			}
		</>
	);
};

export default styled(TreasuryProposalsVoteInfo)`
	position: static;
	margin-bottom: 1rem;

	.turnoutPercentage {
		font-weight: normal;
		font-size: sm;
	}
`;

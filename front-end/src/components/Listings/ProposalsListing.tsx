// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import NothingFoundCard from 'src/ui-components/NothingFoundCard';

import { GetLatestDemocracyProposalPostsQuery } from '../../generated/graphql';
import GovernanceCard from '../GovernanceCard';

interface Props {
  className?: string
  data: GetLatestDemocracyProposalPostsQuery
}

const Proposals = ({ className, data }: Props) => {

	const noPost = !data.posts || !data.posts.length;
	const atLeastOneCurrentProposal = data.posts.some((post) => {
		if(post.onchain_link?.onchain_proposal.length){
			// this breaks the loop as soon as
			// we find a post that has a proposal.
			return true;
		}
		return false;
	});

	if (noPost || !atLeastOneCurrentProposal) return <NothingFoundCard className={className} text='There are currently no active proposals.'/>;

	return (
		<ul className={`${className} proposals__list`}>
			{data.posts.map(
				(post) => {
					const onchainId = post.onchain_link?.onchain_proposal_id;

					return !!post?.author?.username && !!post.onchain_link?.onchain_proposal.length &&
						<li key={post.id} className='proposals__item'>
							{<Link to={`/proposal/${onchainId}`}>
								<GovernanceCard
									address={post.onchain_link.proposer_address}
									comments={post.comments_aggregate.aggregate?.count
										? post.comments_aggregate.aggregate.count.toString()
										: 'no'}
									method={post.onchain_link.onchain_proposal[0]?.preimage?.method}
									onchainId={onchainId}
									status={post.onchain_link.onchain_proposal[0]?.proposalStatus?.[0].status}
									title={post.title}
									topic={post.topic.name}
								/>
							</Link>}
						</li>
					;
				}
			)}
		</ul>
	);
};

export default styled(Proposals)`
	margin-block-start: 0;
	margin-block-end: 0;

	li {
		list-style-type: none;
	}

	.proposals__item {
		margin: 0 0 1rem 0;
		a:hover {
			text-decoration: none;
		}
	}
`;

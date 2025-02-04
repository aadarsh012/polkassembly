// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import { OnchainLinkChildBountyFragment } from '../../../generated/graphql';
import { chainProperties } from '../../../global/networkConstants';
import AddressComponent from '../../../ui-components/Address';
import OnchainInfoWrapper from '../../../ui-components/OnchainInfoWrapper';
import getNetwork from '../../../util/getNetwork';

interface Props {
	onchainLink: OnchainLinkChildBountyFragment
	setOtherProposalsSidebarAddr: React.Dispatch<React.SetStateAction<string | null>>
}

const currentNetwork = getNetwork();

const PostChildBountyInfo = ({ onchainLink, setOtherProposalsSidebarAddr }: Props) => {
	if (!onchainLink) return null;

	const {
		onchain_child_bounty: onchainChildBountyProposal,
		proposer_address: proposerAddress
	} = onchainLink;

	const {
		value,
		fee,
		curatorDeposit,
		curator,
		beneficiary,
		description,
		parentBountyId
	} = onchainChildBountyProposal?.[0] || { };

	return (
		<>
			<OnchainInfoWrapper>
				<h4>On-chain info</h4>
				<Grid>
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Proposer</h6>
						<AddressComponent address={proposerAddress}/>
					</Grid.Column>
					{curator &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Curator</h6>
						<AddressComponent address={curator}/>
					</Grid.Column>}
					{beneficiary &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Beneficiary</h6>
						<AddressComponent address={beneficiary}/>
					</Grid.Column>}
					{value &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Value</h6>
						{parseInt(value) / Math.pow(10, chainProperties[currentNetwork].tokenDecimals) + ' ' + chainProperties[currentNetwork].tokenSymbol}
					</Grid.Column>}
					{fee &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Fee</h6>
						{parseInt(fee) / Math.pow(10, chainProperties[currentNetwork].tokenDecimals) + ' ' + chainProperties[currentNetwork].tokenSymbol}
					</Grid.Column>}
					{curatorDeposit &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Curator Deposit</h6>
						{parseInt(curatorDeposit) / Math.pow(10, chainProperties[currentNetwork].tokenDecimals) + ' ' + chainProperties[currentNetwork].tokenSymbol}
					</Grid.Column>}
					{description &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Description</h6>
						{description}
					</Grid.Column>}
					{parentBountyId &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Parent Bounty</h6>
						<Link to={`/bounty/${parentBountyId}`}>#{parentBountyId}</Link>
					</Grid.Column>}
				</Grid>
			</OnchainInfoWrapper>

			<OnchainInfoWrapper>
				<span className='prev-proposals-btn' onClick={() => setOtherProposalsSidebarAddr(proposerAddress)}>
					Show all proposals by proposer &gt;
				</span>
			</OnchainInfoWrapper>
		</>
	);
};

export default PostChildBountyInfo;

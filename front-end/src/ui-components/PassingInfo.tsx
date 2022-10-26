// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Icon } from 'semantic-ui-react';

interface Props {
	className?: string;
	status?: string;
	voteStatus?: string;
}

const PassingInfo = ({ className, status, voteStatus }:Props ) => {

	const NO_INFO_TEXT = '-';
	let iconName : 'check circle outline' | 'times circle outline' | null = null;
	if (!status && !voteStatus){
		status = NO_INFO_TEXT;
	} else if (status === 'Started' && voteStatus === 'notPassed') {
		status = 'Failing';
		iconName = 'times circle outline';
	}else if (status === 'NotPassed') {
		status = 'Failed';
		iconName = 'times circle outline';
	} else if (status === 'Started' && voteStatus === 'executed'){
		status = 'Passing';
		iconName = 'check circle outline';
	} else {
		status = 'Passed';
		iconName = 'check circle outline';
	}
	return (
		<div className={`${className} ${status === NO_INFO_TEXT ? null : status.toLowerCase()}`}>
			{iconName && <Icon name={iconName} />}{status}
		</div>
	);
};

export default styled(PassingInfo)`
	background-color: grey_secondary;
	padding: 2rem 3rem 2rem 3rem;
	border-radius: 3px;
	margin-bottom: 1rem;
	font-size: lg;
	color: white;
	text-align: center;
	transition-duration: 1s;
	box-shadow: box_shadow_card;

	&.passing, &.passed {
		background-color: green_primary;
	}

	&.failing {
		background-color: red_primary;
	}
`;

// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Progress } from 'semantic-ui-react';

interface Props {
    className?: string,
	isPassing: boolean,
	ayeVotes: string,
	nayVotes: string,
	thresholdType?: string | null
}

const VoteProgress = ({ ayeVotes, className, isPassing, nayVotes }: Props) => {

	const totalVotes = Number(ayeVotes) + Number(nayVotes);
	const ayePercent = (Number(ayeVotes) / totalVotes)*100;
	return (
		<div className={className}>
			<div className='voteNumbers'>Aye: {ayeVotes}</div>
			<div
				className='voteNumbers nay'
			>
				Nay: {nayVotes}
			</div>
			<Progress
				className={isPassing? 'passing': '' }
				percent={ayePercent}
			/>
		</div>
	);
};

export default styled(VoteProgress)`
	position: relative;
	width: 100%;
	margin: 1rem 0 2.4rem 0;

	hr {
		width: 0.2rem;
		height: 2rem;
		border: none;
		background-color: grey_secondary;
		margin: -0.2rem 0 0 0;
	}

	.voteNumbers {
		display: inline-block;
		color: grey_primary;
		font-size: sm;
		margin-bottom: -1rem;
	}

	.nay {
		position: absolute;
		right: 0;
	}

	#passingThreshold {
		display: inline-block;
		position: absolute;
		white-space: nowrap;
		color: grey_primary;
		font-size: sm;
		margin-top: -1rem;
	}

	.threshold-left {
		position: absolute;
		left: 0;
	}

	.threshold-right {
		position: absolute;
		right: 0;
	}

    .ui.progress {
		height: 1rem;
		margin: 0.2rem 0;
		background-color: grey_light;
        .bar {
			height: 1rem;
		}
	}

	.passing {
		.bar {
			background-color: green_primary;
		}
	}
`;

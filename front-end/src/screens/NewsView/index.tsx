// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';
import { chainLinks } from 'src/global/networkConstants';
import getNetwork from 'src/util/getNetwork';

const network = getNetwork();

enum Profile {
	Polkadot='polkadot',
	Kusama='kusamanetwork'
}

const NewsView = ({ className } : {className?: string}) => {

	const profile = chainLinks[network].twitter.split('/')[3];
	const isPolkadotOrKusama = profile === Profile.Kusama || profile === Profile.Polkadot;
	const profile2 = profile === Profile.Kusama? Profile.Polkadot: Profile.Kusama;

	const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

	return (
		<div className={className}>
			<h1>News</h1>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column className='timeline-col' mobile={16} tablet={10} computer={8}>
					<div>
						{isPolkadotOrKusama && <h3>{profile === Profile.Kusama? 'Kusama': 'Polkadot'}</h3>}
						<TwitterTimelineEmbed
							sourceType="profile"
							screenName={profile}
							autoHeight={false}
							noHeader={true}
							options={
								{ height: vh - 250 }
							}
						/>
					</div>
				</Grid.Column>
				{isPolkadotOrKusama && (<Grid.Column className='timeline-col' mobile={16} tablet={10} computer={8}>
					<div>
						<h3>{profile2 === Profile.Kusama ? 'Kusama' : 'Polkadot'}</h3>
						<TwitterTimelineEmbed
							sourceType="profile"
							screenName={profile2}
							autoHeight={false}
							noHeader={true}
							options={
								{ height: vh - 250 }
							}
						/>
					</div>
				</Grid.Column>)}
			</Grid>
		</div>
	);

};

export default styled(NewsView)`

	h1 {
		@media only screen and (max-width: 576px) {
			margin: 3rem 1rem 1rem 1rem;
		}

		@media only screen and (max-width: 768px) and (min-width: 576px) {
			margin-left: 1rem;
		}

		@media only screen and (max-width: 991px) and (min-width: 768px) {
			margin-left: 1rem;
		}
	}

	@media only screen and (max-width: 991px) and (min-width: 768px) {
		.ui[class*="tablet reversed"].grid {
			flex-direction: column-reverse;
		}
	}

	.timeline-col{
		height: 100%;
	}
`;

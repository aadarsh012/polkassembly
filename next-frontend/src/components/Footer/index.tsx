// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import * as moment from 'moment';
import React from 'react';
import Link from 'next/link';
import { Menu } from 'semantic-ui-react';

interface Props {
	className?: string
}

const Footer = ({ className }:Props ): JSX.Element => {

	return (
		<footer className={className}>
			<Menu>
				<Menu.Item>
					&copy; {moment.utc().year()} Premiurly
				</Menu.Item>
				<Menu.Item>
					<Link href="/terms-and-conditions">
						Terms &amp; conditions
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/terms-of-website">
						Terms of website
					</Link>
				</Menu.Item>
				<Menu.Item>
					<Link href="/privacy">
						Privacy policy
					</Link>
				</Menu.Item>
				<Menu.Item>
					<a href='https://github.com/premiurly/polkassembly/issues' target='_blank' rel='noreferrer'>
							Report an issue
					</a>
				</Menu.Item>
			</Menu>
		</footer>
	);
};

export default styled(Footer)`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 4rem;

	.ui.menu {
		background-color: black_full;
		font-family: font_default;
		padding: 1rem 3rem;
		border-radius: 0rem;
		height: 100%;

		a {
			color: grey_secondary;
			&:hover {
				color: white;
			}
		}

		.item {
			color: grey_secondary;
			font-size: sm;
			padding: 1rem;
			&:hover {
				color: white;
			}
		}

		@media only screen and (max-width: 768px)  {
			flex-direction: column;
			height: auto;
		}
	}
`;

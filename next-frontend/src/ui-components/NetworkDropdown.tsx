// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import Image from 'next/image';
import { Dropdown, DropdownItemProps, DropdownProps } from 'semantic-ui-react';
import kusamaLogo from '../assets/kusama-logo.gif';
import polkadotLogo from '../assets/polkadot-logo.jpg';
import { network } from '../global/networkConstants';
import getNetwork from '../util/getNetwork';

const NETWORK = getNetwork();
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    text-transform: capitalize;
		
		span {
			margin-right: 0.6rem;
			display: flex;
			align-items: center;
		}

    img {
        width: 3rem;
        border-radius: 50%;
        margin-right: 0.5rem;
    }
`;

const StyledNetworkItem = ({ showNetwork }: {showNetwork: string}) => {
	return <StyledDiv>
		<span>
			<Image
				src={showNetwork === network.KUSAMA ? kusamaLogo : polkadotLogo}
				width={24} height={24}
				alt={showNetwork}/>
		</span>
		{showNetwork}
	</StyledDiv>;
};

const NetworkOptions: DropdownItemProps[] = [
	{
		children: <StyledNetworkItem showNetwork={network.KUSAMA}/>,
		value: network.KUSAMA
	},
	{
		children: <StyledNetworkItem showNetwork={network.POLKADOT}/>,
		value: network.POLKADOT
	}
];

interface Props {
    className?: string
}

const NetworkDropdown = ({ className }: Props) =>  {

	const navigate = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		if (data.value === NETWORK){
			return null;
		}

		window.location.href = `https://${data.value}.polkassembly.io`;
		return null;
	};

	return <Dropdown
		className={className}
		pointing='top'
		onChange={navigate}
		options={NetworkOptions}
		trigger={<StyledNetworkItem showNetwork={NETWORK}/>}
		value={NETWORK}
	/>;
};

export default styled(NetworkDropdown)`
    color: grey_secondary;
    display: flex !important;
    align-items: center;
    &:hover {
		color: white;
	}
	margin: 0 1.2rem;
`;

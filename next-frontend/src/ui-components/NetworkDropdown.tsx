// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Dropdown, DropdownItemProps, DropdownProps } from 'semantic-ui-react';
import bifrostLogo from '../assets/bifrost-logo.png';
import kiltLogo from '../assets/kilt-logo.png';
import kusamaLogo from '../assets/kusama-logo.gif';
import moonbeamLogo from '../assets/moonbeam-logo.png';
import moonriverLogo from '../assets/moonriver-logo.png';
import polkadotLogo from '../assets/polkadot-logo.jpg';
import { network } from '../global/networkConstants';
import getNetwork from '../util/getNetwork';
import Image from 'next/image';


const NETWORK = getNetwork();
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    text-transform: capitalize;

    span {
        width: 3rem;
        border-radius: 50%;
        margin-right: 0.5rem;
    }
`;

const getNetworkImage = (showNetwork: string) => {
	switch (showNetwork) {
	case network.KUSAMA:
		return kusamaLogo;
	case network.MOONBEAM:
		return moonbeamLogo;
	case network.MOONRIVER:
		return moonriverLogo;
	case network.KILT:
		return kiltLogo;
	case network.BIFROST:
		return bifrostLogo;
	default:
		return polkadotLogo;
	}
};

const StyledNetworkItem = ({ showNetwork }: {showNetwork: string}) => {
	return <StyledDiv>
		<span>
			<Image
				src={getNetworkImage(showNetwork)}
				layout='intrinsic'
				width={28}
				height={28}
				alt={showNetwork}/>
		</span>
		{showNetwork}
	</StyledDiv>;
};

const NetworkOptions: DropdownItemProps[] = [
	{
		children: <StyledNetworkItem showNetwork={network.POLKADOT}/>,
		value: network.POLKADOT
	},
	{
		children: <StyledNetworkItem showNetwork={network.KUSAMA}/>,
		value: network.KUSAMA
	},
	{
		children: <StyledNetworkItem showNetwork={network.MOONRIVER}/>,
		value: network.MOONRIVER
	},
	{
		children: <StyledNetworkItem showNetwork={network.MOONBEAM}/>,
		value: network.MOONBEAM
	},
	{
		children: <StyledNetworkItem showNetwork={network.KILT}/>,
		value: network.KILT
	},
	{
		children: <StyledNetworkItem showNetwork={network.BIFROST}/>,
		value: network.BIFROST
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
		let domain = 'network';
		if (data.value === network.POLKADOT || data.value === network.KUSAMA){
			domain = 'io';
		}
		window.location.href = `https://${data.value}.polkassembly.${domain}`;
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

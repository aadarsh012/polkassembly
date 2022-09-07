// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useContext, useState } from 'react';
import { Dropdown, DropdownItemProps, DropdownProps } from 'semantic-ui-react';
import { ApiContext } from 'src/context/ApiContext';

interface Props {
	className?: string
	setSidebarHiddenFunc?: () => void
}

const RPCDropdown = ({ className, setSidebarHiddenFunc }: Props) => {
	const { wsProvider, setWsProvider } = useContext(ApiContext);
	const [endpoint, setEndpoint] = useState<string>(wsProvider);

	const data = {
		'blockchain_endpoints': [
			{
				'created_at': '2022-08-29T20:28:35.744853+00:00',
				'display_label': 'via On-finality',
				'endpoint': 'wss://rpc.polkadot.io',
				'id': 44,
				'is_active': 1,
				'network': 'polkadot',
				'updated_at': '2022-08-29T20:28:35.744853+00:00'
			},
			{
				'created_at': '2022-08-29T20:28:35.744853+00:00',
				'display_label': 'via dwellir Network',
				'endpoint': 'wss://polkadot-rpc.dwellir.com',
				'id': 45,
				'is_active': 1,
				'network': 'polkadot',
				'updated_at': '2022-08-29T20:28:35.744853+00:00'
			}
		]
	};

	const RPCOptions: DropdownItemProps[] = [];
	data.blockchain_endpoints.forEach((endpointData) => {
		const optionObj = {
			children: <span>{endpointData.display_label}</span>,
			value: endpointData.endpoint
		};

		RPCOptions.push(optionObj);
	});

	const dropdownLabel = () => {
		let label = '';

		data.blockchain_endpoints.some((endpointData) => {
			if(endpointData.endpoint == endpoint){
				label = endpointData.display_label;
				return true;
			}
		});

		return <span className='label'>{label}</span>;
	};

	const handleEndpointChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		if(endpoint == `${data.value}`) return;

		setEndpoint(`${data.value}`);
		setWsProvider(`${data.value}`);
	};

	return (
		<Dropdown
			onClick={setSidebarHiddenFunc}
			className={className}
			pointing='top'
			onChange={handleEndpointChange}
			trigger={dropdownLabel()}
			options={RPCOptions}
			value={endpoint}
			scrolling
		/>
	);
};

export default styled(RPCDropdown)`
	margin-right: 12px;

	.label {
		color: #fff;
	}
`;

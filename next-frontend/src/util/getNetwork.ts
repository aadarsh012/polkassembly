// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { network as networkConstants } from '../global/networkConstants';
import { Network } from '../types';
/**
 * Return the current network
 *
 */

// eslint-disable-next-line import/no-anonymous-default-export
export default function (): Network {
	const network = process.env.NEXT_PUBLIC_NETWORK;
	
	if (!network) {
		throw Error('Please set the NEXT_PUBLIC_NETWORK environment variable');
	}

	const possibleNetworks = Object.values(networkConstants);

	if (!possibleNetworks.includes(network)) {
		throw Error(`NEXT_PUBLIC_NETWORK environment variable must be one of ${possibleNetworks} `);
	}

	return network;
}

// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
const { override,	addWebpackModuleRule, useBabelRc } = require('customize-cra');

module.exports = override(
	useBabelRc(),
	addWebpackModuleRule({
		include: '/node_modules/',
		test: /\.mjs$/,
		type: 'javascript/auto'
	})
);
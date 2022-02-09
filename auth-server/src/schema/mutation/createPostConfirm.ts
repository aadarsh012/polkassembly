// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default `
    createPostConfirm(
        network: String!
        address: String!
        username: String
        email: String
        title: String!
        content: String!
        signature: String!
    ): Message
`;

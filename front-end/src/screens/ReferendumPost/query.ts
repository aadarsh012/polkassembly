// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import gql from 'graphql-tag';
import { authorFields } from 'src/fragments/author';
import { onchainLinkDiscussionPost } from 'src/fragments/posts';
import { onchainLinkProposalPost } from 'src/fragments/posts';
import { onchainLinkTechCommitteeProposalPost } from 'src/fragments/posts';
import { onchainLinkTreasurySpendProposal } from 'src/fragments/posts';

import { commentFields } from '../../fragments/comments';
import { onchainLinkBountyPost } from '../../fragments/posts';
import { onchainLinkMotionPost } from '../../fragments/posts';

const onchainLinkReferendum = gql`
    fragment onchainLinkReferendum on onchain_links {
        id,
        proposer_address,
        onchain_referendum_id,
        onchain_referendum(where: {}) {
            id
            delay
            end
            voteThreshold
            referendumStatus(orderBy: id_DESC) {
                blockNumber {
                    startDateTime
                    number
                }
                status
                id
            }
            preimage {
                hash
                id
                metaDescription
                method
                preimageArguments {
                    id
                    name
                    value
                }
            }
        }
    }
`;

const referendumPost = gql`
    fragment referendumPost on posts {
        author {
            ...authorFields
        }
        content
        created_at
        id
        updated_at
        comments(order_by: {created_at: asc}) {
            ...commentFields
        }
        onchain_link{
            ...onchainLinkReferendum
            ...onchainLinkProposalPost
            ...onchainLinkMotionPost
            ...onchainLinkBountyPost
            ...onchainLinkDiscussionPost
            ...onchainLinkTechCommitteeProposalPost
            ...onchainLinkTreasurySpendProposal
        }
        title
        topic {
            id
            name
        }
        type {
            id
            name
        }
    }
    ${authorFields}
    ${commentFields}
    ${onchainLinkReferendum}
    ${onchainLinkProposalPost}
    ${onchainLinkMotionPost}
    ${onchainLinkBountyPost}
    ${onchainLinkDiscussionPost}
    ${onchainLinkTechCommitteeProposalPost}
    ${onchainLinkTreasurySpendProposal}
`;

export const QUERY_REFERENDUM_POST_AND_COMMENTS = gql`
    query ReferendumPostAndComments ($id:Int!) {
        posts(where: {onchain_link: {onchain_referendum_id: {_eq: $id}}}) {
            ...referendumPost
        }
    }
    ${referendumPost}
`;


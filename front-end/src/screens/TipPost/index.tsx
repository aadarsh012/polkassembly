// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import { useRouter } from 'src/hooks';

import Post from '../../components/Post/Post';
import { useTipPostAndCommentsQuery } from '../../generated/graphql';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';

const TipPost = () => {
	const { query } = useRouter();
	const hash = query['hash'] as string;
	const { data, error, refetch } = useTipPostAndCommentsQuery({ variables: { hash } });

	if (error?.message) return <FilteredError text={error.message}/>;

	if (data) return <Post data={data} isTipProposal refetch={refetch} />;

	return <Loader/>;
};

export default TipPost;

// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Editor } from '@tinymce/tinymce-react';
import styled from '@xstyled/styled-components';
import React, { useState } from 'react';
import showdown from 'showdown';
const StyledTextArea = styled.div``;

const converter = new showdown.Converter();

export interface Props {
	className?: string
	height?: number
	name?: string
	onChange:  ((value: string) => void) | undefined
	value: string
}

function NewEditor(props: Props): React.ReactElement {
	const [value, setValue] = useState('');

	return (
		<StyledTextArea className='container'>
			<Editor
				apiKey={process.env.REACT_APP_EDITOR_API_KEY}
				initialValue={converter.makeHtml(props.value)}
				value={value}
				onEditorChange={setValue}
				onBlur={() => {
					if (props.onChange) {
						props.onChange(value);
					}
				}}
				init={{
					content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
					directionality: 'ltr',
					height: props.height,
					menubar: 'file edit view insert format tools table tc help',
					plugins: [
						'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
						'searchreplace', 'visualblocks', 'code', 'fullscreen',
						'insertdatetime', 'media', 'table'
					],
					toolbar: 'undo redo | ' +
						'bold italic backcolor | alignleft aligncenter ' +
						'alignright alignjustify | bullist numlist outdent indent | ' +
						'removeformat | table help '
				}}
			/>
		</StyledTextArea>
	);
}

export { NewEditor };
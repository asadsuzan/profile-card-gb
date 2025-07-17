import { RichText } from '@wordpress/block-editor';

const SbRichText = ({ content = "Ricky Park", tagName = "p", onContentChange }) => {

    return <RichText value={content} tagName={tagName} onChange={onContentChange} />

}

export default SbRichText
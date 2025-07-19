import { RichText } from '@wordpress/block-editor';

const SbRichText = ({ content = "Ricky Park", tagName = "p", onContentChange }) => {

    return <RichText value={content} tagName={tagName} onChange={onContentChange} allowedFormats={['core/bold', 'core/italic']} />

}

export default SbRichText
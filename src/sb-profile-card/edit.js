import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import ProfileCard from '../components/common/ProfileCard';

export default function Edit() {
	return (
		<div {...useBlockProps({
			draggable: false
		})}>
			<ProfileCard />
		</div>
	);
}

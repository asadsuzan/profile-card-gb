import { __ } from '@wordpress/i18n';
import { useBlockProps, } from '@wordpress/block-editor';
import './editor.scss';
import ProfileCard from '../components/common/ProfileCard';
import { } from "@wordpress/components"
import { produce } from "immer"
export default function Edit({ attributes, setAttributes }) {
	const { profile } = attributes || {}

	// handle name 
	const handleName = (newName) => {
		setAttributes(produce(attributes, draft => {
			draft.profile.name = newName
		}))
	}

	return (
		<div {...useBlockProps({
			draggable: false,

		})}>
			<ProfileCard isBackEnd={true} profile={profile} onNameChange={handleName} />
		</div>
	);
}

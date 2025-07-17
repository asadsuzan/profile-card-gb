import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps, } from '@wordpress/block-editor';
import './editor.scss';
import ProfileCard from '../components/common/ProfileCard';
import { PanelBody, TextControl } from "@wordpress/components"
import { produce } from "immer"
import { useState } from 'react';
export default function Edit({ attributes, setAttributes }) {
	const { profile } = attributes || {}
	const [isFollowing, setIsFollowing] = useState(false)
	// handle name 
	const handleName = (newName) => {
		setAttributes(produce(attributes, draft => {
			draft.profile.name = newName
		}))
	}

	// handle country 
	const handleCountry = (newCountry) => {
		setAttributes(produce(attributes, draft => {
			draft.profile.country = newCountry
		}))
	}

	// handle title 
	const handleTitle = (newTitle) => {
		setAttributes(produce(attributes, draft => {
			draft.profile.title = newTitle
		}))
	}

	// handle message Button text
	const handleMsgBtnTxt = (newTxt) => {
		setAttributes(produce(attributes, draft => {
			draft.profile.messageBtn.txt = newTxt
		}))
	}
	// handle message url 
	const handleMsgBtnUrl = (newUrl) => {
		setAttributes(produce(attributes, draft => {
			draft.profile.messageBtn.url = newUrl
		}))
	}

	// handle follow 
	const handleFollow = () => {
		setIsFollowing((state) => !state)
		const txt = isFollowing ? "follow" : "following"
		setAttributes(produce(attributes, draft => {
			draft.profile.followBtn.txt = txt
		}))

	}


	return (
		<>
			{/* // settings  */}
			<InspectorControls group='styles'></InspectorControls>
			<InspectorControls group='settings'>

				<PanelBody title='Message Button'>
					<TextControl label="Text" value={profile.messageBtn.txt || ""} onChange={handleMsgBtnTxt} />
					<TextControl label="Url" value={profile.messageBtn.url || "#"} onChange={handleMsgBtnUrl} />

				</PanelBody>
			</InspectorControls>



			<div {...useBlockProps({
				draggable: false,

			})}>
				<ProfileCard
					isBackEnd={true}
					profile={profile}
					onNameChange={handleName}
					onCountryChange={handleCountry}
					onTitleChange={handleTitle}
					onFollowChange={handleFollow}

				/>
			</div>
		</>
	);
}

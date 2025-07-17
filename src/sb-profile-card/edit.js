import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps, MediaUpload } from '@wordpress/block-editor';
import './editor.scss';
import ProfileCard from '../components/common/ProfileCard';
import { Button, ButtonGroup, FormToggle, PanelBody, TextControl, ToggleControl } from "@wordpress/components"
import { produce } from "immer"
import { useState } from 'react';
export default function Edit({ attributes, setAttributes }) {
	const { profile, options } = attributes || {}
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

	// handle edit skill
	const handleEditSkill = (newSkill, idx) => {
		setAttributes(produce(attributes, draft => {
			draft.profile.skills[idx] = newSkill
		}))
	}

	//  handle add new skill
	const handleAddNewSkill = () => {
		setAttributes(produce(attributes, draft => {
			draft.profile.skills.push("new skill added")
		}))
	}
	// handle delete skill
	const handleDeleteSkill = (idx) => {
		if (profile?.skills.length > 1) {
			setAttributes(produce(attributes, draft => {
				draft.profile.skills.splice(idx, 1)
			}))
		}
	}
	// handle copy skill 
	const handleCopySkill = (txt, idx) => {
		setAttributes(produce(attributes, draft => {
			draft.profile.skills.splice(idx, 0, txt)
		}))
	}

	// handle avatar url 
	const handleAvatarUrl = (newUrl) => {
		setAttributes(produce(attributes, draft => {
			draft.profile.imgUrl = newUrl
		}))
	}

	// handle show badge 
	const handleShowBadge = () => {
		setAttributes(produce(attributes, draft => {
			draft.options.isShowBadge = draft.options.isShowBadge ? false : true
		}))
	}
	return (
		<>
			{/* // settings  */}
			<InspectorControls group='styles'></InspectorControls>
			<InspectorControls group='settings'>

				<PanelBody title="Avatar" initialOpen={false}>
					<MediaUpload
						onSelect={(media) => {
							handleAvatarUrl(media.url)
						}}
						multiple={false}
						render={({ open }) => (
							<div style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "5px"
							}}>
								<img height={"50px"} width={"100px"} alt='user' src={profile.imgUrl} />
								<Button style={{
									textAlign: "Center"
								}} variant='primary' icon={"upload"} size='small' onClick={open}>
									upload
								</Button>
								<span>Or</span>
								<TextControl label="add url" value={profile?.imgUrl} onChange={(newUrl) => handleAvatarUrl(newUrl)} />

							</div>
						)}
					/>
				</PanelBody>


				{/* message button settings  */}
				<PanelBody title='Message Button'>
					<TextControl label="Text" value={profile.messageBtn.txt || ""} onChange={handleMsgBtnTxt} />
					<TextControl label="Url" value={profile.messageBtn.url || "#"} onChange={handleMsgBtnUrl} />
				</PanelBody>

				{/* skill section settings  */}
				<PanelBody title='Skill section'>
					<h3>Total Skills: {profile?.skills.length}</h3>
					{
						profile?.skills.map((skill, idx) => {
							return <>

								<div style={{ position: "relative" }} key={`skill-${idx}`}>
									<TextControl value={skill || ""} onChange={(newSkill) => handleEditSkill(newSkill, idx)} style={{
										paddingRight: "70px"
									}} />
									<div
										style={{
											position: "absolute",
											right: "10px",
											top: "0",
											bottom: "0",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											gap: "5px"

										}} >
										<Button variant='secondary' size='small' icon={"admin-page"} onClick={() => handleCopySkill(skill, idx)} />
										{profile?.skills.length > 1 && <Button variant='tertiary' size='small' icon={"remove"} onClick={() => handleDeleteSkill(idx)} style={{
											color: "red"
										}} />}
									</div>
								</div>
							</>
						})
					}
					<Button variant='primary' icon={"database-add"} size='compact' onClick={handleAddNewSkill}>Add skill</Button>
				</PanelBody>


				{/* options  */}
				<PanelBody title='options'>
					<ToggleControl label="show badge" checked={!!options.isShowBadge} onChange={handleShowBadge} />
				</PanelBody>
			</InspectorControls >



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
					options={options}

				/>
			</div>
		</>
	);
}

import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps, MediaUpload, AlignmentControl } from '@wordpress/block-editor';
import './editor.scss';
import ProfileCard from '../components/common/ProfileCard';
import { Button, ButtonGroup, ColorPalette, FormToggle, PanelBody, TextControl, ToggleControl, RangeControl, __experimentalUnitControl as UnitControl, Flex, FlexItem, BorderControl, BoxControl } from "@wordpress/components"
import { produce } from "immer"
import { useState } from 'react';
import Style from '../components/common/Style';

export default function Edit({ attributes, setAttributes }) {
	const { profile, options, styles } = attributes || {}
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
	// handle show message button 
	const handleShowMsgBtn = () => {
		setAttributes(produce(attributes, draft => {
			draft.options.isShowMessageBtn = draft.options.isShowMessageBtn ? false : true
		}))
	}
	// handle show follow button 
	const handleShowFollowBtn = () => {
		setAttributes(produce(attributes, draft => {
			draft.options.isShowFollowBtn = draft.options.isShowFollowBtn ? false : true
		}))
	}
	return (
		<>
			{/* // settings  */}
			<InspectorControls group='styles'>
				<PanelBody title='Card Container' initialOpen={false}>
					<PanelBody title='Width' initialOpen={false}>
						<UnitControl

							value={styles?.cardContainer.width}
							onChange={(width) => setAttributes(produce(attributes, draft => {
								draft.styles.cardContainer.width = width
							}))}
							units={['px']}
						/>
					</PanelBody>
					<PanelBody title="Text Align" initialOpen={false}>
						<Flex align="center" gap="8px">
							<FlexItem>
								<AlignmentControl
									value={styles?.cardContainer.textAlign}
									onChange={(align) =>
										setAttributes(produce(attributes, (draft) => {
											draft.styles.cardContainer.textAlign = align;
										}))
									}
								/>
							</FlexItem>
							<FlexItem>
								<span style={{ fontStyle: 'italic', fontSize: '13px' }}>
									{
										{
											left: 'Left Aligned',
											center: 'Center Aligned',
											right: 'Right Aligned',
											justify: 'Justified',
											undefined: 'Default',
											null: 'Default',
										}[styles?.cardContainer.textAlign]
									}
								</span>
							</FlexItem>
						</Flex>
					</PanelBody>

					<PanelBody title='Background' initialOpen={false}>
						<ColorPalette
							colors={[
								{ name: 'red', color: '#f00' },
								{ name: 'white', color: '#fff' },
								{ name: 'blue', color: '#00f' }
							]}

							value={styles?.cardContainer.backgroundColor}
							onChange={(color) => setAttributes(produce(attributes, draft => {
								draft.styles.cardContainer.backgroundColor = color
							}))}

						/>
					</PanelBody>
					<PanelBody title='Border radius' initialOpen={false}>
						<RangeControl value={styles?.cardContainer.borderRadius}

							onChange={(radius) => setAttributes(produce(attributes, draft => {
								draft.styles.cardContainer.borderRadius = radius
							}))}
						/>
					</PanelBody>
					<PanelBody title='Text color' initialOpen={false}>
						<ColorPalette
							colors={[
								{ name: 'red', color: '#f00' },
								{ name: 'white', color: '#fff' },
								{ name: 'blue', color: '#00f' }
							]}

							value={styles?.cardContainer.color}
							onChange={(color) => setAttributes(produce(attributes, draft => {
								draft.styles.cardContainer.color = color
							}))}

						/>
					</PanelBody>
				</PanelBody>

				<PanelBody title='Avatar' initialOpen={false}>
					<PanelBody title='Width' initialOpen={false}>
						<UnitControl

							value={styles?.avatar.width}
							onChange={(width) => setAttributes(produce(attributes, draft => {
								draft.styles.avatar.width = width
							}))}
							units={['px']}
						/>
					</PanelBody>
					<PanelBody title='Height' initialOpen={false}>
						<UnitControl

							value={styles?.avatar.height}
							onChange={(height) => setAttributes(produce(attributes, draft => {
								draft.styles.avatar.height = height
							}))}
							units={['px']}
						/>
					</PanelBody>

					<PanelBody title='padding'>
						<BoxControl
							values={styles.avatar.padding}
							onChange={(newPadding) => setAttributes(produce(attributes, draft => {
								draft.styles.avatar.padding = newPadding
							}))} />
					</PanelBody>

					<PanelBody title='Border' initialOpen={false}>
						<RangeControl label='Radius' value={styles?.avatar.borderRadius}

							onChange={(radius) => setAttributes(produce(attributes, draft => {
								draft.styles.avatar.borderRadius = radius
							}))}
						/>
						<BorderControl
							label="styles"
							value={styles.avatar.border}
							onChange={(borderStyle) => setAttributes(produce(attributes, draft => {
								draft.styles.avatar.border = borderStyle
							}))}
						/>
					</PanelBody>
				</PanelBody>

			</InspectorControls>
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
					<ToggleControl label="show badge" checked={options.isShowBadge} onChange={handleShowBadge} />
					<ToggleControl label="show message button" checked={options.isShowMessageBtn} onChange={handleShowMsgBtn} />
					<ToggleControl label="show Follow button" checked={options.isShowFollowBtn} onChange={handleShowFollowBtn} />
				</PanelBody>
			</InspectorControls >



			<div {...useBlockProps({
				draggable: false,

			})}>

				<Style styles={styles} />
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

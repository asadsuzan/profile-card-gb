import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps, MediaUpload, AlignmentControl } from '@wordpress/block-editor';
import './editor.scss';
import ProfileCard from '../components/common/ProfileCard';
import { Button, ButtonGroup, ColorPalette, FormToggle, PanelBody, TextControl, ToggleControl, RangeControl, __experimentalUnitControl as UnitControl, Flex, FlexItem, BorderControl, BoxControl, FontSizePicker } from "@wordpress/components"
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

	//  handle transparent background
	const handleTransParentBg = (ele) => {
		const existingBg = styles.button[ele].backgroundColor

		setAttributes(produce(attributes, draft => {
			draft.styles.button[ele].isTransparentBg = draft.styles.button[ele].isTransparentBg ? false : true
			draft.styles.button[ele].backgroundColor = draft.styles.button[ele].isTransparentBg ? "transparent" : existingBg
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


				<PanelBody title='Buttons' initialOpen={false}>

					<PanelBody title='common' initialOpen="false">
						<PanelBody title='Border radius' initialOpen={false}>
							<RangeControl value={styles?.button.borderRadius}

								onChange={(radius) => setAttributes(produce(attributes, draft => {
									draft.styles.button.borderRadius = radius
								}))}
							/>
						</PanelBody>

						<PanelBody title='padding'>
							<BoxControl
								values={styles.button.padding}
								onChange={(padding) => setAttributes(produce(attributes, draft => {
									draft.styles.button.padding = padding
								}))}
							/>
						</PanelBody>
					</PanelBody>

					<PanelBody title='Message Button' initialOpen={false}>
						<PanelBody title='Background color'>
							<ToggleControl label="Transparent Background" checked={styles?.button.messageBtn.isTransparentBg} onChange={() => handleTransParentBg("messageBtn")} />
							{
								!styles?.button.messageBtn.isTransparentBg && <ColorPalette
									colors={[
										{ name: 'red', color: '#f00' },
										{ name: 'white', color: '#fff' },
										{ name: 'blue', color: '#00f' }
									]}

									value={styles?.button.messageBtn.backgroundColor}
									onChange={(color) => setAttributes(produce(attributes, draft => {
										draft.styles.button.messageBtn.backgroundColor = color
									}))}

								/>
							}


						</PanelBody>
						<PanelBody title='color'>
							<ColorPalette

								colors={[
									{ name: 'red', color: '#f00' },
									{ name: 'white', color: '#fff' },
									{ name: 'blue', color: '#00f' }
								]}

								value={styles?.button.messageBtn.color}
								onChange={(color) => setAttributes(produce(attributes, draft => {
									draft.styles.button.messageBtn.color = color
								}))}

							/>
						</PanelBody>
						<PanelBody title='Border'>
							<BorderControl

								value={styles.button.messageBtn.border}
								onChange={(borderStyle) => setAttributes(produce(attributes, draft => {
									draft.styles.button.messageBtn.border = borderStyle
								}))}
							/>
						</PanelBody>
					</PanelBody>
					<PanelBody title='Follow Button' initialOpen={false}>
						<PanelBody title='Background color'>
							<ToggleControl label="Transparent Background" checked={styles?.button.followBtn.isTransparentBg} onChange={() => handleTransParentBg("followBtn")} />
							{
								!styles?.button.followBtn.isTransparentBg && <ColorPalette
									colors={[
										{ name: 'red', color: '#f00' },
										{ name: 'white', color: '#fff' },
										{ name: 'blue', color: '#00f' }
									]}

									value={styles?.button.followBtn.backgroundColor}
									onChange={(color) => setAttributes(produce(attributes, draft => {
										draft.styles.button.followBtn.backgroundColor = color
									}))}

								/>
							}


						</PanelBody>
						<PanelBody title='color'>
							<ColorPalette

								colors={[
									{ name: 'red', color: '#f00' },
									{ name: 'white', color: '#fff' },
									{ name: 'blue', color: '#00f' }
								]}

								value={styles?.button.followBtn.color}
								onChange={(color) => setAttributes(produce(attributes, draft => {
									draft.styles.button.followBtn.color = color
								}))}

							/>
						</PanelBody>

						<PanelBody title='Border'>
							<BorderControl

								value={styles.button.followBtn.border}
								onChange={(borderStyle) => setAttributes(produce(attributes, draft => {
									draft.styles.button.followBtn.border = borderStyle
								}))}
							/>
						</PanelBody>


					</PanelBody>


				</PanelBody>

				<PanelBody title='Skill'>
					<PanelBody title='Container'>
						<p >Background</p>
						<ColorPalette
							colors={[
								{ name: 'red', color: '#f00' },
								{ name: 'white', color: '#fff' },
								{ name: 'blue', color: '#00f' }
							]}

							value={styles?.skill.container.backgroundColor}
							onChange={(color) => setAttributes(produce(attributes, draft => {
								draft.styles.skill.container.backgroundColor = color
							}))}

						/>
						<p>Padding</p>
						<BoxControl
							values={styles.skill.container.padding}
							onChange={(padding) => setAttributes(produce(attributes, draft => {
								draft.styles.skill.container.padding = padding
							}))}
						/>
						<p>Margin</p>
						<BoxControl
							values={styles.skill.container.margin}
							onChange={(margin) => setAttributes(produce(attributes, draft => {
								draft.styles.skill.container.margin = margin
							}))}
						/>
						<p>Text Align</p>
						<Flex align="center" gap="8px">
							<FlexItem>
								<AlignmentControl
									value={styles?.skill.container.textAlign}
									onChange={(align) =>
										setAttributes(produce(attributes, (draft) => {
											draft.styles.skill.container.textAlign = align;
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
					<PanelBody title="List Item">
						<p>Border styles</p>
						<BorderControl value={styles.skill.listItem.border}

							onChange={(newBorderStyle) => setAttributes(produce(attributes, draft => {
								draft.styles.skill.listItem.border = newBorderStyle
							}))}



						/>
						<p>Radius</p>
						<RangeControl
							value={styles.skill.listItem.borderRadius}

							onChange={(radius) => setAttributes(produce(attributes, draft => {
								draft.styles.skill.listItem.borderRadius = radius
							}))}
						/>
						<p>Font Size</p>
						<FontSizePicker fontSizes={[
							{ name: __('Small'), slug: 'small', size: 12 },
							{ name: __('Normal'), slug: 'normal', size: 16 },
							{ name: __('Large'), slug: 'large', size: 20 },
							{ name: __('Huge'), slug: 'huge', size: 24 },
						]}

							value={styles.skill.listItem.fontSize}

							onChange={(size) => setAttributes(produce(attributes, draft => {
								draft.styles.skill.listItem.fontSize = size
							}))}

						/>
					</PanelBody>
				</PanelBody>

			</InspectorControls>

			{/* settings  */}
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

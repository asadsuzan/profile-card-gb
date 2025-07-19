<?php
// This file is generated. Do not modify it manually.
return array(
	'sb-profile-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/sb-profile-card',
		'version' => '0.1.0',
		'title' => 'profile card block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'center',
				'full',
				'wide',
				'left',
				'right'
			)
		),
		'attributes' => array(
			'profile' => array(
				'type' => 'object',
				'default' => array(
					'badgeTxt' => 'pro',
					'imgUrl' => '',
					'name' => 'jon does',
					'country' => 'New York',
					'title' => 'User interface designer and <br> front-end developer',
					'messageBtn' => array(
						'txt' => 'message',
						'url' => '#'
					),
					'followBtn' => array(
						'txt' => 'Follow',
						'url' => ''
					),
					'skills' => array(
						'UI / UX',
						'Front End Development',
						'HTML'
					)
				)
			),
			'options' => array(
				'type' => 'object',
				'default' => array(
					'isShowBadge' => true,
					'isShowMessageBtn' => true,
					'isShowFollowBtn' => true
				)
			),
			'styles' => array(
				'type' => 'object',
				'default' => array(
					'cardContainer' => array(
						'backgroundColor' => ' #231E39',
						'borderRadius' => 5,
						'boxShadow' => ' 0px 10px 20px -10px rgba(0,0,0,0.75)',
						'color' => '#B3B8CD',
						'paddingTop' => '30px',
						'position' => 'relative',
						'width' => '350px',
						'maxWidth' => '100%',
						'textAlign' => 'center'
					),
					'avatar' => array(
						'border' => array(
							'width' => '1px',
							'color' => '#03BFCB',
							'style' => 'solid'
						),
						'borderRadius' => 50,
						'padding' => array(
							'bottom' => 7,
							'left' => 7,
							'right' => 7,
							'top' => 7
						),
						'height' => '170px',
						'width' => '170px',
						'objectFit' => 'fill'
					),
					'button' => array(
						'borderRadius' => 3,
						'fontFamily' => 'Montserrat, sans-serif',
						'fontWeight' => 500,
						'padding' => array(
							'bottom' => '10px',
							'left' => ' 25px',
							'right' => ' 25px',
							'top' => '10px'
						),
						'followBtn' => array(
							'backgroundColor' => 'transparent',
							'isTransparentBg' => true,
							'color' => ' #02899C',
							'border' => array(
								'width' => '1px',
								'color' => '#03BFCB',
								'style' => 'solid'
							)
						),
						'messageBtn' => array(
							'backgroundColor' => '#03BFCB',
							'isTransparentBg' => false,
							'color' => '#231E39',
							'border' => array(
								'width' => '1px',
								'color' => '#03BFCB',
								'style' => 'solid'
							)
						)
					),
					'skill' => array(
						'container' => array(
							'backgroundColor' => '#1F1A36',
							'padding' => array(
								'bottom' => '10px',
								'left' => ' 25px',
								'right' => ' 25px',
								'top' => '10px'
							),
							'margin' => array(
								'bottom' => '0px',
								'left' => ' 0px',
								'right' => ' 0px',
								'top' => '30px'
							),
							'textAlign' => 'left'
						)
					)
				)
			)
		),
		'textdomain' => 'sb-profile-card',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);

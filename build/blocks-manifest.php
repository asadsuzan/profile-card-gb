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
					'title' => 'User interface designer and front-end developer',
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

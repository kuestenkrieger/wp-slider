<?php
// This file is generated. Do not modify it manually.
return array(
	'slider' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'kuestenkrieger/slider',
		'version' => '0.1.0',
		'title' => 'Slider',
		'category' => 'widgets',
		'icon' => 'dashicons-images-alt',
		'description' => 'This is a SplideJS Slider-Plugin',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'isFullscreen' => array(
				'type' => 'boolean',
				'default' => false
			),
			'height' => array(
				'type' => 'string',
				'default' => '500px'
			),
			'generalOverlay' => array(
				'type' => 'boolean',
				'default' => false
			),
			'overlayTitle' => array(
				'type' => 'string',
				'default' => 'the art of visual storytelling'
			),
			'overlayText' => array(
				'type' => 'string',
				'default' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ante quis tincidunt tincidunt, libero massa tincidunt augue, quis tincidunt dolor justo quis dolor.'
			),
			'overlayUrl' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'slider',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);

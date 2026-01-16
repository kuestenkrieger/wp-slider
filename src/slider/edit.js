import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { isFullscreen, height } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Slider Einstellungen', 'slider' ) }>
					<ToggleControl
						label={ __( 'Vollbild (Fullscreen)', 'slider' ) }
						checked={ isFullscreen }
						onChange={ ( val ) => setAttributes( { isFullscreen: val } ) }
					/>
					{ ! isFullscreen && (
						<SelectControl
							label={ __( 'Slider Höhe', 'slider' ) }
							value={ height }
							options={ [
								{ label: 'Klein (300px)', value: '300px' },
								{ label: 'Standard (500px)', value: '500px' },
								{ label: 'Groß (700px)', value: '700px' },
								{ label: 'Extra Groß (900px)', value: '900px' },
							] }
							onChange={ ( val ) => setAttributes( { height: val } ) }
						/>
					) }
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps( { className: 'slider-admin-container' } ) }>
				<div className="slider-admin-grid">
					<InnerBlocks
						allowedBlocks={ [ 'kuestenkrieger/slide' ] }
						template={ [ [ 'kuestenkrieger/slide', {} ] ] }
						orientation="horizontal"
					/>
				</div>
			</div>
		</>
	);
}

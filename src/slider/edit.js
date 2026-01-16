import { useBlockProps, InnerBlocks, InspectorControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const { isFullscreen, height, generalOverlay, overlayTitle, overlayText, overlayUrl } = attributes;

	return (
		<>
			<InspectorControls>
				{ /* ... Slider Einstellungen Panel Body ... */ }
				<PanelBody title={ __( 'Slider Einstellungen' ) }>
					<ToggleControl
						label={ __( 'Fullscreen' ) }
						checked={ isFullscreen }
						onChange={ ( val ) => setAttributes( { isFullscreen: val } ) }
					/>
					{ ! isFullscreen && (
						<TextControl
							label={ __( 'Höhe (z.B. 500px)' ) }
							value={ height }
							onChange={ ( val ) => setAttributes( { height: val } ) }
						/>
					) }
				</PanelBody>

				<PanelBody title={ __( 'Overlay (Allgemein)' ) }>
					<ToggleControl
						label={ __( 'Overlay aktivieren' ) }
						checked={ generalOverlay }
						onChange={ ( val ) => setAttributes( { generalOverlay: val } ) }
					/>
					{ generalOverlay && (
						<>
							<TextareaControl
								label={ __( 'Titel' ) }
								value={ overlayTitle }
								onChange={ ( val ) => setAttributes( { overlayTitle: val } ) }
							/>
							<TextareaControl
								label={ __( 'Text' ) }
								value={ overlayText }
								onChange={ ( val ) => setAttributes( { overlayText: val } ) }
							/>
							<div style={ { marginTop: '15px' } }>
								<label style={ { display: 'block', marginBottom: '5px' } }>{ __( 'Verlinkung' ) }</label>
								<LinkControl
									searchInputPlaceholder={ __( 'Seite suchen oder URL einfügen...' ) }
									value={ { url: overlayUrl } }
									onChange={ ( nextValue ) => setAttributes( { overlayUrl: nextValue.url } ) }
									showInitialSuggestions={ true }
								/>
							</div>
						</>
					) }
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { className: 'position-relative' } ) }>
				<div
					className="slider-editor-wrapper"
					style={ {
						border: '2px dashed #ccc',
						borderRadius: '10px',
						padding: '20px 10px', // Mehr Platz für den Appender
						background: '#fafafa',
						minHeight: '200px',
						position: 'relative',
						zIndex: 1
					} }
				>
					<InnerBlocks
						allowedBlocks={ [ 'kuestenkrieger/slide' ] }
						template={ [ [ 'kuestenkrieger/slide' ] ] }
						renderAppender={ InnerBlocks.ButtonBlockAppender }
					/>
				</div>

				{ generalOverlay && (
					<div style={ {
						marginTop: '10px',
						padding: '10px',
						background: '#fff8e1',
						border: '1px solid #ffecb3',
						fontSize: '12px',
						borderRadius: '4px'
					} }>
						<strong>Overlay aktiv:</strong> "{ overlayTitle }" (Wird nur im Frontend angezeigt)
					</div>
				) }
			</div>
		</>
	);
}

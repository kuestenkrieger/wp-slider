import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save( { attributes } ) {
	const { isFullscreen, height, generalOverlay, overlayTitle, overlayText, overlayUrl } = attributes;

	return (
		<div { ...useBlockProps.save( { className: 'position-relative' } ) }>
			{ generalOverlay && (
				<div className="general-overlay">
					<div className="general-overlay-inner">
						{ overlayTitle && <h2 className="decorative-text">{ overlayTitle }</h2> }
						{ overlayText && <p>{ overlayText }</p> }
						{ overlayUrl && (
							<a href={ overlayUrl } className="overlay-cta">
								{ __( 'Mehr erfahren', 'slider' ) }
							</a>
						) }
					</div>
				</div>
			) }
			<div
				className={ `splide ${ isFullscreen ? 'is-fullscreen' : '' }` }
				data-height={ isFullscreen ? '100vh' : height }
				data-width={ isFullscreen ? '100vw' : '100%' }
				data-overlay={ generalOverlay }
			>
				<div className="splide__track">
					<ul className="splide__list">
						<InnerBlocks.Content />
					</ul>
				</div>
			</div>
		</div>
	);
}

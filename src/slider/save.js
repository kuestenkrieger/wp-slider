import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { isFullscreen, height } = attributes;

	return (
		<div
			{ ...useBlockProps.save( {
				className: `splide ${ isFullscreen ? 'is-fullscreen' : '' }`,
			} ) }
			data-height={ isFullscreen ? '100vh' : height }
		>
			<div className="splide__track">
				<ul className="splide__list">
					<InnerBlocks.Content />
				</ul>
			</div>
		</div>
	);
}

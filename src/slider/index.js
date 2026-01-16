import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, MediaPlaceholder, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';

registerBlockType( metadata.name, {
	edit: Edit,
	save,
} );

registerBlockType( 'kuestenkrieger/slide', {
	title: 'Slide Item',
	parent: [ 'kuestenkrieger/slider' ],
	icon: 'format-image',
	attributes: {
		mediaId: { type: 'number' },
		mediaUrl: { type: 'string' },
		title: { type: 'string', source: 'html', selector: 'h3' },
		description: { type: 'string', source: 'html', selector: 'p' },
		buttonText: { type: 'string' },
		buttonUrl: { type: 'string' }
	},
	edit: ( { attributes, setAttributes } ) => {
		const { mediaUrl, title, description, buttonText, buttonUrl } = attributes;

		return (
			<div { ...useBlockProps( { className: 'slide-edit-card' } ) }>
				{ ! mediaUrl ? (
					<MediaPlaceholder
						onSelect={ ( media ) => setAttributes( { mediaUrl: media.url, mediaId: media.id } ) }
						allowedTypes={ [ 'image' ] }
						multiple={ false }
						labels={ { title: __( 'Slide Bild' ) } }
					/>
				) : (
					<div className="slide-preview">
						<img src={ mediaUrl } alt="" />
						<button className="remove-media" onClick={ () => setAttributes( { mediaUrl: '', mediaId: 0 } ) }>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ width: '20px', height: '20px' }}>
								<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
							</svg>
						</button>
					</div>
				) }
				<div className="slide-content-edit">
					<RichText
						tagName="h3"
						placeholder={ __( 'Titel...' ) }
						value={ title }
						onChange={ ( val ) => setAttributes( { title: val } ) }
					/>
					<div className="slide-description">
						<RichText
							tagName="p"
							placeholder={ __( 'Beschreibung...' ) }
							value={ description }
							onChange={ ( val ) => setAttributes( { description: val } ) }
						/>
					</div>
					<input
						type="text"
						placeholder="Button Text"
						value={ buttonText }
						onChange={ ( e ) => setAttributes( { buttonText: e.target.value } ) }
					/>
					<input
						type="text"
						placeholder="Button Link (https://...)"
						value={ buttonUrl }
						onChange={ ( e ) => setAttributes( { buttonUrl: e.target.value } ) }
					/>
				</div>
			</div>
		);
	},
	save: ( { attributes } ) => {
		const { mediaUrl, mediaId, title, description, buttonText, buttonUrl } = attributes;
		return (
			<li { ...useBlockProps.save( { className: 'splide__slide' } ) }>
				{ mediaUrl && (
					<img
						src={ mediaUrl }
						alt=""
						className={ `slide-image wp-image-${ mediaId }` }
						data-id={ mediaId }
					/>
				) }
				<div className="slide-overlay">
					<div className="slide-overlay-inner">
						<RichText.Content tagName="h2" className="h1" value={ title } />
						<RichText.Content tagName="p" value={ description } />
						{ buttonUrl && (
							<a href={ buttonUrl } className="slide-cta">
								{ buttonText || __( 'Mehr erfahren' ) }
							</a>
						) }
					</div>
				</div>
			</li>
		);
	},
} );

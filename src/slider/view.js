/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */
import Splide from '@splidejs/splide';

const init = () => {
	const elements = document.querySelectorAll( '.splide:not(.is-initialized)' );

	elements.forEach( ( el ) => {
		const customHeight = el.getAttribute( 'data-height' ) || '500px';

		new Splide( el, {
			type   : 'loop',
			perPage: 1,
			autoplay: true,
			arrows: true,
			pagination: false,
			height: customHeight, // Hier setzen wir die dynamische Höhe
		} ).mount();

		el.classList.add( 'is-initialized' );
	} );
};

// WordPress spezifischer Weg: Falls der Block dynamisch geladen wird (z.B. Interactivity API oder AJAX)
if ( document.readyState === 'complete' || document.readyState === 'interactive' ) {
	init();
} else {
	document.addEventListener( 'DOMContentLoaded', init );
}

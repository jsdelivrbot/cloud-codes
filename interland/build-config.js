/**
 * Build Config file.
 * @type {Object}
 */

module.exports = {
	html: [{
		src: '*.php',
		dest: 'build/'
	}, {
		src: 'templates/*.html',
		dest: 'build/templates/'
	}, {
		src: 'templates/meta/*.html',
		dest: 'build/templates/meta/',
		bundled_css_destination: 'styles/bundled.css'
	}, {
		src: 'products/cms/*.php',
		dest: 'build/products/cms/',
		bundled_css_destination: 'css/bundled.css'
	}],
	css: [{
		src: 'styles/*.css',
		dest: 'build/styles/'
	}, {
		src: 'products/cms/css/*.css',
		dest: 'build/products/cms/css/'
	}],
	js: [{
		src: 'js/*.js',
		dest: 'build/js/'
	}, {
		src: 'products/cms/js/*.js',
		dest: 'build/products/cms/js/'
	}],
	images: [{
		src: 'products/cms/img/*.jpg',
		dest: 'build/products/cms/img/'
	}, {
		src: 'products/cms/img/*.png',
		dest: 'build/products/cms/img/'
	}, {
		src: 'images/*.jpg',
		dest: 'build/images/'
	}, {
		src: 'images/*.png',
		dest: 'build/images/'
	}, {
		src: 'images/*.svg',
		dest: 'build/images/'
	}],
	ignored: [{
		src: 'products/cms/downloadables/*.pdf',
		dest: 'build/products/cms/downloadables/'
	}, {
		src: 'bower.json',
		dest: 'build/'
	}, {
		src: 'README.md',
		dest: 'build/'
	}]
};

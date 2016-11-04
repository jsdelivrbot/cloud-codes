// now this is invalid;
// look at the gulpfile to modify this file.
module.exports = {
	
	main: {
		bower: {
			// src: 'bower.json',
			// dest: 'build/'
		},
		readme: {
			// src: 'README.md',
			// dest: 'build/'
		},
		html: {
			main: {
				// src: '*.php',
				// dest: 'build/'
			},
			templates: {
				main: {
					// src: 'templates/*.html',
					// dest: 'build/templates/'
				},
				meta: {
					// src: 'templates/meta/*.html',
					// dest: 'build/templates/meta/'
				}
			}
		},
		css: {
			// src: 'styles/*.css',
			// dest: 'build/styles/'
		},
		js: {
			// src: 'js/*.js',
			// dest: 'build/js/'
		},
		images: {
			// src: ['images/*.jpg', 'images/*.png', 'images/*.svg'],
			// dest: 'build/images/'
		}
	},
	products: {
		cms: {
			html: {
				// src: 'products/cms/*.php',
				// dest: 'build/products/cms/'
			},
			css: {
				// src: 'products/cms/css/*.css',
				// dest: 'build/products/cms/css/'
			},
			js: {
				// src: 'products/cms/js/*.js',
				// dest: 'build/products/cms/js/'
			},
			images: {
				// src: ['products/cms/img/*.jpg', 'products/cms/img/*.png'],
				// dest: 'build/products/cms/img/'
			},
			downloadables: {
				// src: 'products/cms/downloadables/*.pdf',
				// dest: 'build/products/cms/downloadables/'
			}
		}
	}
}

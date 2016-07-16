// Authentication credentials

module.exports = {

	// of Google
	googleAuth: {
		clientID: '536848586495-8clt37mrkarom295b06p53ohi4n7segq.apps.googleusercontent.com',
		clientSecret: '1u_HGnBKcrYi3pXN3qUPJWWn',
		callbackURL: 'http://localhost:3001/auth/google/callback'
	},
	// of facebook
	facebookAuth: {
		clientID: "901633303282058",
		clientSecret: "be304d82d2899e9b24b145e5fe22e985",
		callbackURL: 'http://localhost:3001/auth/facebook/callback'
	},
	// of twitter
	twitterAuth: {
		consumerKey: "mcoLDpsm5N5MzkTvjexlLY4PM",
		consumerSecret: "wtfvxrqELKexiVvwcwlGlh1SkrnuTjIoi1GCGnNaEuFly1b7Qc",
		callbackURL: 'http://127.0.0.1:3001/auth/twitter/callback'
	}
};

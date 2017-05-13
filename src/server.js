
const credentials = {
  client: {
    id:
    secret:
  },
  auth: {
    tokenHost: 'https://api.instagram.com',
    tokenPath: '/oauth/access_token'
  }
};
const oauth2 = require('simple-oauth2').create(credentials);

app.get('/redirect', (req, res) => {
  // Generate a random state verification cookie.
  const state = req.cookies.state || crypto.randomBytes(20).toString('hex');
  // Allow unsecure cookies on localhost.
  const secureCookie = req.get('host').indexOf('localhost:') !== 0;
  res.cookie('state', state.toString(), {maxAge: 3600000, secure: secureCookie, httpOnly: true});
  const redirectUri = oauth2.authorizationCode.authorizeURL({
    redirect_uri: `${req.protocol}://${req.get('host')}/instagram-callback`,
    scope: 'basic',
    state: state
  });
  res.redirect(redirectUri);
});

app.get('/instagram-callback',(req, res) => {
  // Check that we received a State Cookie.
  if (!req.cookies.state) {
    res.status(400).send('State cookie not set or expired. Maybe you took too long to authorize. Please try again.');
  // Check the State Cookie is equal to the state parameter.
  } else if (req.cookies.state !== req.query.state) {
    res.status(400).send('State validation failed');
  }

  // Exchange the auth code for an access token.
  oauth2.authorizationCode.getToken({
    code: req.query.code,
    redirect_uri: `${req.protocol}://${req.get('host')}/instagram-callback`
  }).then(results => {
    // We have an Instagram access token and the user identity now.
    const accessToken = results.access_token;
    const instagramUserID = results.user.id;
    const profilePic = results.user.profile_picture;
    const userName = results.user.full_name;

    // ...

  });
});

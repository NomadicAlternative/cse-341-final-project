const passport = require('passport');
const { Strategy: GitHubStrategy } = require('passport-github2');

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL,
}, (accessToken, refreshToken, profile, done) => {
  // TODO: acá va el upsert del usuario en la colección User
  return done(null, { id: profile.id, username: profile.username });
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

module.exports = passport;
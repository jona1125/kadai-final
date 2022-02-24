export default function ({ $auth, route, redirect }) {
  if (($auth.loggedIn && route.name === 'signin') || ($auth.loggedIn && route.name === 'signup')) {
    return redirect('/')
  }
}

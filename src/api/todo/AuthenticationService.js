
const AUTHENTICATED_USER_KEY = 'authenticatedUser';

class AuthenticationService {

  login(userName, password) {
    sessionStorage.setItem(AUTHENTICATED_USER_KEY, userName);
    console.log(`Registered authenticated user in session storage: ${userName}`);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER_KEY);
    console.log(`Removed authenticated user in session storage`);
  }

  isUserAuthenticated() {
    let userName = sessionStorage.getItem(AUTHENTICATED_USER_KEY);
    return userName !== null;
  }

  getAuthenticatedUser() {
    let userName = sessionStorage.getItem(AUTHENTICATED_USER_KEY);
    return userName === null ? "" : userName;
  }
}

export default new AuthenticationService();
import { auth } from './index';

function handleAuthErrors({ code, message }) {
  switch (code) {
    case FIREBASE_ERROR_CODES.WRONG_PASSWORD:
      // eslint-disable-next-line no-alert
      return alert('Wrong password.');
    case FIREBASE_ERROR_CODES.WEAK_PASSWORD:
      // eslint-disable-next-line no-alert
      return alert('Your password is too weak.');
    case FIREBASE_ERROR_CODES.INVALID_EMAIL:
      // eslint-disable-next-line no-alert
      return alert(message);
    case FIREBASE_ERROR_CODES.USER_NOT_FOUND:
      // eslint-disable-next-line no-alert
      return alert(message);

    default:
      // eslint-disable-next-line no-alert
      return alert(message);
  }
}

const FIREBASE_ERROR_CODES = {
  WEAK_PASSWORD: 'auth/weak-password',
  WRONG_PASSWORD: 'auth/wrong-password',
  INVALID_EMAIL: 'auth/invalid-email',
  USER_NOT_FOUND: 'auth/user-not-found',
};

/**
 *
 * @param {email, password} (sign in user)
 */
export async function signIn({ email, password }) {
  try {
    return await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    handleAuthErrors(error);
  }
}

export async function signUp({ email, password }) {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    handleAuthErrors(error);
  }
}

export async function resetPassword({ email }) {
  // [START sendpasswordemail]
  try {
    await auth.sendPasswordResetEmail(email);
    // Password Reset Email Sent!
    // eslint-disable-next-line no-alert
    alert('Password Reset Email Sent!');
  } catch (error) {
    handleAuthErrors(error);
  }
  // [END sendpasswordemail];
}

export function signOut() {
  auth.signOut();
}

/**
 * Getting user token to authenticate/authorize user
 */

export const getUserFirebaseToken = async () => {
  const { currentUser } = auth;
  if (currentUser) {
    return currentUser.getIdToken();
  }
  return null;
};

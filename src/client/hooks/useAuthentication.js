import { useEffect, useState } from 'react';
import { auth } from '../firebase';

async function fetchUser(firebaseUser) {
  const response = await fetch('/api/users');
  if (response.status !== 200) {
    throw new Error('fail to connect to the Api');
  }
  const data = await response.json();
  const user = data.find(
    (dataUser) => dataUser.firebase_token === firebaseUser.uid,
  );
  return user;
}

function authRedirect() {
  if (
    window.location.pathname === '/sign-in' ||
    window.location.pathname === '/'
  ) {
    window.location.href = '/profile';
  }
}
/**
 * Docs: https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
 */
export function useAuthentication() {
  // default not authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // default is loading
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // if user exists it means authenticated
      if (user) {
        setIsAuthenticated(true);
        setIsLoading(false);
        (async () => {
          try {
            const allUser = await fetchUser(user);
            setUserData(allUser);
          } catch (error) {
            // if data not found in api/user
            // history.push('/sign-in');
            throw new Error('Data not found');
          }
        })();
        authRedirect();
      } else {
        setIsAuthenticated(false);
        setIsLoading(false);
        setUserData(null);
      }
    });
    return () => {}; // eslint-disable-line
  }, []);

  return { isAuthenticated, isLoading, userData };
}

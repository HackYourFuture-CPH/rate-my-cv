import React from 'react';
import Header from './Header.js';
import { BrowserRouter as Router} from 'react-router-dom';

export default { title: 'Header' };

export const Guest = () => (
  <Router>
    <Header isAuthenticated={false} />
  </Router>
);

export const AuthorizedUser = () => (
  <Router>
    <Header isAuthenticated={true} username='Ali Ehsan' />
  </Router>
);

import React from 'react';
import Header from './Header.js';
import { MemoryRouter } from 'react-router';

export default { title: 'Header' };

export const Guest = () => (
  <MemoryRouter>
    <Header isAuthenticated={false} />
  </MemoryRouter>
);

export const Authorized_User = () => (
  <MemoryRouter>
    <Header isAuthenticated={true} />
  </MemoryRouter>
);
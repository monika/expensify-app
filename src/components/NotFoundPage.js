import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>404: Page Not Found</p>
    <Link to="/">Go to Homepage</Link>
  </div>
);

export default NotFoundPage;

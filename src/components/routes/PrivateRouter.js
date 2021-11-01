import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRouter = (props) => {
  const [isAllowed, setstate] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setstate(token);
  }, []);

  if (!isAllowed) return <Redirect to="/login" />;
  return <Route {...props} />;
};

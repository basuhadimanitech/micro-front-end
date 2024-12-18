import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({onSignIn}) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const {onParentNavigation} = mount(ref.current, {
      onNavigate: (location) =>{
        history.push(location);
      },
      signIn:(value) => {
        onSignIn(value)
      }
    });

    history.listen((location) => {
      onParentNavigation(location.pathname)
    });

  }, []);

  return <div ref={ref} />;
};

import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const {onParentNavigation} = mount(ref.current, {
      onNavigate: (location) =>{
        history.push(location);
      }
    });

    history.listen((location) => {
      onParentNavigation(location.pathname)
    });

  }, []);

  return <div ref={ref} />;
};

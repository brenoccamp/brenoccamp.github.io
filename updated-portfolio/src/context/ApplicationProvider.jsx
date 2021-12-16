import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ApplicationContext from './ApplicationContext';

function ApplicationProvider({ children }) {
  const [language, setLanguage] = useState(false);

  const contextValue = {
    language,
    setLanguage,
  };

  return (
    <ApplicationContext.Provider value={ contextValue }>
      {children}
    </ApplicationContext.Provider>
  ); 
}

ApplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationProvider;

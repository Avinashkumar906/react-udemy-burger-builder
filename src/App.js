import React from 'react';

import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App(props) {
  return (
    <Layout>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;

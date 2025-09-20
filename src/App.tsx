import React from 'react';

import {
  Contact,
  Home,
  Layout,
  Projects,
  Resume,
} from './components';

const App: React.FC = () => (
  <Layout>
    <Home />
    <Projects />
    <Resume />
    <Contact />
  </Layout>
);

export default App;
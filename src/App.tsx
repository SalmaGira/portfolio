import React from 'react';

import {
  Contact,
  Resume,
} from './components';
import Home from './components/Home.tsx';
import Layout from './components/Layout.tsx';
import Projects from './components/Projects.tsx';

const App: React.FC = () => (
  <Layout>
    <Home />
    <Projects />
    <Resume />
    <Contact />
  </Layout>
);

export default App;
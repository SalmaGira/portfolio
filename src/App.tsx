import React from 'react';

import {
  Contact,
  Resume,
} from './components';
import Home from './components/home.tsx';
import Layout from './components/layout.tsx';
import Projects from './components/projects.tsx';

const App: React.FC = () => (
  <Layout>
    <Home />
    <Projects />
    <Resume />
    <Contact />
  </Layout>
);

export default App;
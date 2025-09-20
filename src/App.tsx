import React from 'react';

import {
  Contact,
  Resume,
} from './components';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { Projects } from './components/Projects';

const App: React.FC = () => (
  <Layout>
    <Home />
    <Projects />
    <Resume />
    <Contact />
  </Layout>
);

export default App;
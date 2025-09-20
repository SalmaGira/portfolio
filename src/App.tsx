import React from 'react';

import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Projects from './components/Projects';

const App: React.FC = () => (
  <Layout>
    <Home />
    <Projects />
    <Contact />
  </Layout>
);

export default App;
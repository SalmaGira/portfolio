import React from 'react';

import Contact from './components/Contact';
import Introduction from './components/Introduction';
import Layout from './components/Layout';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <Layout>
      <Introduction />
      <Projects />
      <Resume />
      <Contact />
    </Layout>
  );
}

export default App;
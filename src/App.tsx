import React, { Suspense } from 'react';

import styled from 'styled-components';

// Only load Layout immediately
import Layout from './components/layout.tsx';
import {
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from './constants/colors';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: ${TYPOGRAPHY.fontSize.lg};
  color: ${COLORS.textSecondary};
  font-family: ${TYPOGRAPHY.fontFamily.primary};
`;

const LoaderSpinner = styled.div`
  &::after {
    content: '';
    width: 24px;
    height: 24px;
    border: 2px solid ${COLORS.gray200};
    border-top: 2px solid ${COLORS.primary};
    border-radius: 50%;
    display: inline-block;
    animation: spin 1s linear infinite;
    margin-right: ${SPACING.md};
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Ultra-lightweight loading component
const MinimalLoader = () => (
  <LoaderContainer>
    <LoaderSpinner />
    Loading...
  </LoaderContainer>
);

// Lazy load ALL components
const Home = React.lazy(() => import('./components/home.tsx'));
const Projects = React.lazy(() => import('./components/projects.tsx'));
const Resume = React.lazy(() => import('./components/Resume'));
const Contact = React.lazy(() => import('./components/Contact'));

const App: React.FC = () => (
  <Layout>
    {/* Load all components with simple Suspense */}
    <Suspense fallback={<MinimalLoader />}>
      <Home />
    </Suspense>
    
    <Suspense fallback={<MinimalLoader />}>
      <Projects />
    </Suspense>

    <Suspense fallback={<MinimalLoader />}>
      <Resume />
    </Suspense>
    
    <Suspense fallback={<MinimalLoader />}>
      <Contact />
    </Suspense>
  </Layout>
);

export default App;
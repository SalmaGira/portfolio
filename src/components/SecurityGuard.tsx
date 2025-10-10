import React, {
  useEffect,
  useState,
} from 'react';

import styled from 'styled-components';

import {
  ANIMATIONS,
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '../constants/colors';

const SecurityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: ${TYPOGRAPHY.fontFamily.primary};
  text-align: center;
  background: ${COLORS.backgroundSecondary};
  color: ${COLORS.textPrimary};
  padding: ${SPACING.xl};
`;

const SecurityContent = styled.div`
  max-width: 500px;
`;

const SecurityTitle = styled.h1`
  color: ${COLORS.error};
  margin-bottom: ${SPACING.xl};
  font-size: ${TYPOGRAPHY.fontSize['3xl']};
  font-weight: ${TYPOGRAPHY.fontWeight.bold};
  line-height: ${TYPOGRAPHY.lineHeight.tight};
`;

const SecurityMessage = styled.p`
  margin-bottom: ${SPACING['2xl']};
  line-height: ${TYPOGRAPHY.lineHeight.relaxed};
  color: ${COLORS.textSecondary};
  font-size: ${TYPOGRAPHY.fontSize.lg};
`;

const SecurityButton = styled.a`
  display: inline-block;
  padding: ${SPACING.lg} ${SPACING['2xl']};
  background: ${COLORS.primary};
  color: ${COLORS.white};
  text-decoration: none;
  border-radius: 6px;
  font-weight: ${TYPOGRAPHY.fontWeight.medium};
  transition: background-color ${ANIMATIONS.transition.normal};
  box-shadow: ${COLORS.primary}20 0 4px 12px;
  
  &:hover {
    background: ${COLORS.primaryHover};
    transform: translateY(-1px);
    box-shadow: ${COLORS.primary}30 0 8px 16px;
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SecurityGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSecure, setIsSecure] = useState(true);

  useEffect(() => {
    // Modern HTTPS enforcement
    const enforceHTTPS = () => {
      if (
        typeof window !== 'undefined' &&
        window.location.protocol !== 'https:' &&
        window.location.hostname !== 'localhost' &&
        !window.location.hostname.includes('127.0.0.1')
      ) {
        window.location.replace(
          window.location.href.replace('http://', 'https://')
        );
        return false;
      }
      return true;
    };

    // Modern frame detection
    const detectFraming = () => {
      try {
        if (window.self !== window.top) {
          // Try to break out of frame
          if (window.top) {
            window.top.location.href = window.location.href;
          }
          return false;
        }
        return true;
      } catch {
        // If we can't access parent, we're likely in a cross-origin frame
        return false;
      }
    };

    // Check security conditions
    if (!enforceHTTPS()) {
      return; // Will redirect
    }

    if (!detectFraming()) {
      setIsSecure(false);
      return;
    }

    // Additional security checks
    const checkSecurityFeatures = () => {
      const features = {
        crossOriginIsolated: window.crossOriginIsolated,
        isSecureContext: window.isSecureContext,
        trustedTypes: 'trustedTypes' in window
      };
      
      console.log('Security features:', features);
    };

    checkSecurityFeatures();
  }, []);

  // Security violation component
  if (!isSecure) {
    return (
      <SecurityContainer>
        <SecurityContent>
          <SecurityTitle>🔒 Security Notice</SecurityTitle>
          <SecurityMessage>
            This application cannot be displayed in a frame for security reasons.
          </SecurityMessage>
          <SecurityButton href={window.location.href}>
            Open in New Window
          </SecurityButton>
        </SecurityContent>
      </SecurityContainer>
    );
  }

  return <>{children}</>;
};

export default SecurityGuard;
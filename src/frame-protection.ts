// Runtime frame protection - prevents iframe embedding
export const initializeFrameProtection = () => {
  // Check if page is being loaded in an iframe
  if (window.self !== window.top) {
    // If in iframe, redirect to top-level window
    try {
      window.top!.location.href = window.location.href;
    } catch {
      // If access denied, break out of frame
      document.body.innerHTML = `
        <div style="
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-family: Arial, sans-serif;
          text-align: center;
          background: #f5f5f5;
        ">
          <div>
            <h1>Security Notice</h1>
            <p>This page cannot be displayed in a frame for security reasons.</p>
            <a href="${window.location.href}" style="
              display: inline-block;
              margin-top: 20px;
              padding: 10px 20px;
              background: #007bff;
              color: white;
              text-decoration: none;
              border-radius: 5px;
            ">Visit Direct Link</a>
          </div>
        </div>
      `;
    }
  }

  // Check for proper origin isolation
  if (typeof window.crossOriginIsolated !== 'undefined') {
    console.log('Cross-origin isolation status:', window.crossOriginIsolated);
  }

  // Set frame options via JavaScript as backup
  try {
    Object.defineProperty(document, 'domain', {
      get: function() {
        throw new Error('Frame embedding blocked');
      }
    });
  } catch {
    // Silently fail if already defined
  }
};
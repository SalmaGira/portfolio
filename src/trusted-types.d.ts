declare global {
  interface Window {
    trustedTypes?: {
      createPolicy: (name: string, policy: {
        createHTML?: (input: string) => string;
        createScript?: (input: string) => string;
        createScriptURL?: (input: string) => string;
      }) => {
        createHTML?: (input: string) => TrustedHTML;
        createScript?: (input: string) => TrustedScript;
        createScriptURL?: (input: string) => TrustedScriptURL;
      };
    };
  }

  type TrustedHTML = string & { readonly __brand: unique symbol };
  type TrustedScript = string & { readonly __brand: unique symbol };
  type TrustedScriptURL = string & { readonly __brand: unique symbol };
}

export {};
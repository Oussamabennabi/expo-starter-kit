import { ClerkProvider } from "@clerk/clerk-expo";
import React from "react";
import "react-native-get-random-values";

import * as SecureStore from "expo-secure-store";
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


const ClerkProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
        {children}
    </ClerkProvider>
  );
};

export default ClerkProvider;

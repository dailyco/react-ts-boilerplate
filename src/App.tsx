import * as React from "react";
import { ThemeProvider } from "@/contexts/theme-provider";
import { STORAGE_KEYS } from "./constants/storage-keys";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <ThemeProvider storageKey={STORAGE_KEYS.THEME}>hello, world</ThemeProvider>
  );
};

export default App;

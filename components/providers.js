'use client';

import { ThemeProvider } from 'theme-ui';

import EmotionRegistry from 'components/emotion-registry';
import theme from 'theme';

export default function Providers({ children }) {
  return (
    <EmotionRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </EmotionRegistry>
  );
}

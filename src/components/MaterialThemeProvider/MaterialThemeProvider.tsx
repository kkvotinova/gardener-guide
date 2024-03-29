import { ReactNode } from 'react';
import { Shape } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material';

import typography from '@/components/MaterialThemeProvider/config/typography';
import shape from '@/components/MaterialThemeProvider/config/shape';
import palette from '@/components/MaterialThemeProvider/config/palette';
import ungroupedComponents from '@/components/MaterialThemeProvider/config/components/ungroupedComponents';
import dialogComponents from '@/components/MaterialThemeProvider/config/components/dialogComponents';
import buttonComponents from '@/components/MaterialThemeProvider/config/components/buttonComponents';
import baseline from '@/components/MaterialThemeProvider/config/components/baseline';
import breakpoints from '@/components/MaterialThemeProvider/config/breakpoints';

type NewTheme = typeof theme;

declare module '@mui/material' {
  type ExtendedShapeOptions = Shape & {
    borderRadiusSecond: string;
  };

  interface Theme {
    shape: ExtendedShapeOptions;
  }

  interface ThemeOptions {
    shape?: Partial<ExtendedShapeOptions>;
  }
}

declare module '@emotion/react' {
  export interface Theme extends NewTheme {}
}

const theme = createTheme({
  // @ts-ignore
  shape,
  palette,
  typography,
  breakpoints,

  spacing: 4,

  components: {
    ...baseline,
    ...buttonComponents,
    ...dialogComponents,
    ...ungroupedComponents,
  },
});

const MaterialThemeProvider = ({ children }: { children?: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialThemeProvider;

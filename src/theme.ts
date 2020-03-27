export interface ITheme {
  colors: {
    primary: string;
    dark: string;
    light: string;
    secondary: string;
    accent: string;
    grey: string;
  };
}

export const theme: ITheme = {
  colors: {
    primary: "#4e1ed4",
    dark: "#3C366B",
    light: "#f5f6fa",
    secondary: "#222222",
    accent: "#A0AEC0",
    grey: "#E2E8F0"
  }
};

jest.mock('react-native-unistyles', () => ({
  UnistylesRegistry: {
    addThemes: () => ({ addConfig: () => {} }),
  },
  useStyles: () => ({
    styles: {},
  }),
  createStyleSheet: () => {},
}))

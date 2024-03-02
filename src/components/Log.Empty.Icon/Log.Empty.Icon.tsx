import { scale } from 'react-native-size-matters'
import Svg, { Path, SvgProps } from 'react-native-svg'
import { useStyles } from 'react-native-unistyles'

export default function LogEmptyIcon(props: SvgProps) {
  const { theme } = useStyles()
  const size = scale(80)

  return (
    <Svg viewBox="0 0 250 250" fill="currentColor" width={size} height={size} {...props}>
      <Path
        fill={theme.colors.placeholder}
        d="M83.67 101.2c-13.03 19.36-11 45.84 6.12 62.96 17.12 17.12 43.6 19.15 62.96 6.12 2.64-1.78 3.06-5.51.8-7.76L91.43 100.4c-2.25-2.25-5.98-1.84-7.76.8zM97.25 87.63c-2.64 1.78-3.06 5.51-.8 7.76l62.12 62.12c2.25 2.25 5.98 1.84 7.76-.8 13.03-19.36 11-45.84-6.12-62.96-17.12-17.12-43.6-19.15-62.96-6.12z"
      />
      <Path
        fill={theme.colors.placeholder}
        d="M192.75 128.96c-1.8 0-3.31 1.4-3.4 3.2-1.72 34.86-31.28 62.51-66.85 61.14-33.42-1.3-60.5-28.38-61.8-61.8-1.29-33.17 22.67-61.1 54.16-66.12v4.71c0 1.85 2 3 3.6 2.08l7.73-4.46 7.73-4.46c1.6-.92 1.6-3.24 0-4.16l-7.73-4.46-7.73-4.46c-1.6-.92-3.6.23-3.6 2.08v6.25c-35.36 5.08-62.41 36.23-60.97 73.28 1.43 36.95 31.38 66.9 68.34 68.33 39.32 1.52 71.99-29.02 73.93-67.54.1-1.96-1.44-3.61-3.41-3.61z"
      />
    </Svg>
  )
}

import { scale } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'
import { useStyles } from 'react-native-unistyles'

export default function PillEmptyIcon({ ...props }: PillEmptyIconProps) {
  const { theme } = useStyles()
  const size = scale(80)

  return (
    <Svg viewBox="0 0 250 250" fill="currentColor" width={size} height={size} {...props}>
      <Path
        fill={theme.colors.placeholder}
        d="M184.47 154.25c-9.52 9.52-19 19.1-28.58 28.56-16.88 16.67-43.35 16.97-59.22.75-15.89-16.25-15.5-42.1 1.06-58.79 19.11-19.27 38.31-38.45 57.57-57.57 16.84-16.71 43.35-16.97 59.21-.74 15.91 16.28 15.49 42.02-1.05 58.79-9.61 9.72-19.33 19.33-28.99 29zm-46.08-53.28c-15.7 15.7-18.11 17.75-32.75 32.86-12.76 13.17-12.8 30.08-.68 42.08 12.07 11.94 28.84 11.63 42.09-1.23 13.76-13.37 30.7-30.5 32.62-32.41-13.45-13.47-27.3-27.31-41.28-41.3zM35.49 124.8c14.42 14.42 37.14 15.45 52.75 3.11 1.15-.91 1.36-2.58.53-3.78-.42-.61-.94-1.23-1.57-1.86-8.05-8.13-41.04-41.13-49.17-49.17a14.65 14.65 0 00-1.86-1.57c-1.21-.83-2.88-.62-3.78.53-12.34 15.6-11.31 38.32 3.1 52.74zM89.11 120.36c.64.64 1.27 1.16 1.88 1.58 1.21.82 2.87.62 3.78-.52 12.44-15.62 11.44-38.42-3.01-52.88S54.5 53.09 38.88 65.53c-1.14.91-1.34 2.57-.52 3.78.42.61.94 1.24 1.58 1.88 8.04 8.13 41.03 41.12 49.17 49.17z"
      />
    </Svg>
  )
}
import { useContext } from 'react'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import { ThemeContext } from 'contexts/ThemeContext'

const useTheme = () => {
  const { typeTheme, changeTheme } = useContext(ThemeContext)
  const theme = useContext(StyledThemeContext)
  return { typeTheme, changeTheme, theme }
}

export default useTheme

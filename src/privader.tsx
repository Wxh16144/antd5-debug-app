import * as React from 'react'
import { App, ConfigProvider } from 'antd'
import { ThemeProvider, createGlobalStyle } from 'antd-style'

const Global = createGlobalStyle`
  html, body {
    background-color: ${props => props.theme.colorBgContainer};
  }
`

function Provider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider themeMode="auto">
      <ConfigProvider>
        <Global />
        <App>
          {children}
        </App>
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default Provider

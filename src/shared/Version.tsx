import React, { version as reactVersion } from 'react'
import { ConfigProvider, Typography, version as antdVersion, theme, version } from 'antd'

function Version() {
  const isConsoleTable = React.useRef(false)
  React.useEffect(() => {
    if (isConsoleTable.current) {
      return
    }
    globalThis.console.table({
      antd: antdVersion,
      react: reactVersion,
    })
    isConsoleTable.current = true
  }, [])

  return (
    <ConfigProvider theme={{ algorithm: theme.compactAlgorithm }}>
      <Typography.Text code>{version}</Typography.Text>
    </ConfigProvider>
  )
}

export default Version

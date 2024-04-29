import React, { version as reactVersion } from 'react'
import { version as antdVersion } from 'antd'

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

  return null
}

export default Version

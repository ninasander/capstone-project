import { useLayoutEffect, useState, useRef } from 'react'

/**
 * Usage:
 *    const {height, bind} = useHeight()
 *    <div {...bind} style={{height: isActive ? height : 0}}>Measured element</div>
 */
export default function useHeight(deps) {
  const [calculatedHeight, setCalculatedHeight] = useState(0)
  const ref = useRef()

  useLayoutEffect(() => {
    const toggleElement = ref.current
    if (!toggleElement) return

    const originals = {
      transition: toggleElement.style.transition,
      height: toggleElement.style.height,
    }
    toggleElement.style.transition = 'none'
    toggleElement.style.height = 'auto'
    const height = toggleElement.getBoundingClientRect().height
    toggleElement.style.transition = originals.transition
    toggleElement.style.height = originals.height
    setCalculatedHeight(height)
  }, [deps, ref])
  return { height: calculatedHeight, bind: { ref } }
}

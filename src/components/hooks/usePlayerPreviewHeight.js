import { useLayoutEffect, useState, useRef } from 'react'

export default function usePlayerPreviewHeight(deps) {
  const [calculatedHeight, setCalculatedHeight] = useState(0)
  const ref = useRef()

  useLayoutEffect(() => {
    const playerPreview = ref.current
    if (!playerPreview) return

    const originals = {
      transition: playerPreview.style.transition,
      height: playerPreview.style.height,
    }
    playerPreview.style.transition = 'none'
    playerPreview.style.height = 'auto'
    const height = playerPreview.getBoundingClientRect().height
    playerPreview.style.transition = originals.transition
    playerPreview.style.height = originals.height
    setCalculatedHeight(height)
  }, [deps, ref])
  return { heightPlayer: calculatedHeight, bindPlayer: { ref } }
}

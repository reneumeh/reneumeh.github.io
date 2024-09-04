
import { useState } from "react"

const useIsExpanded = () => {
    const [isExpanded, setIsExpanded] = useState(false)
  return { isExpanded, setIsExpanded }
}

export default useIsExpanded

import { useState } from "react"

const useIsExpanded = () => {
    const [isExpanded, setIsExpanded] = useState(true)
  return { isExpanded, setIsExpanded }
}

export default useIsExpanded
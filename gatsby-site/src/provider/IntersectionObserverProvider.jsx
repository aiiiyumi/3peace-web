
import React, { createContext, useRef } from 'react'

export const ObserverContext = createContext({})

export function IntersectionObserverProvider(props) {
  const { children } = props
  const options = {
    rootMargin: '-20% 0px', // ここはオプションなので任意で
    once: false,
  }
  const targets = useRef([])

  const toTargets = el => {
    if (el && !targets.current?.includes(el)) {
      targets.current.push(el)
    }
  }

  return (
    <>
      <ObserverContext.Provider value={{ toTargets, targets }}>
        {children}
      </ObserverContext.Provider>
    </>
  )
}


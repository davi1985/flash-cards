'use client'

import * as RadixProgress from '@radix-ui/react-progress'
import { createContext, ReactNode, useContext } from 'react'

type ProgressProps = {
  children: ReactNode
  max: number
  now: number
}

const ProgressContext = createContext(
  {} as {
    max: number
    now: number
  }
)

const progressWidth = (now: number, max: number) =>
  `${Math.round((now * 100) / max)}%`

export const Progress = ({ children, max, now }: ProgressProps) => (
  <div className="flex items-center gap-3">
    <ProgressContext.Provider value={{ max, now }}>
      {children}
    </ProgressContext.Provider>
  </div>
)

export const ProgressBar = ({}) => {
  const { max, now } = useContext(ProgressContext)

  return (
    <RadixProgress.Root className="h-3 flex-1 bg-marine-800 rounded-md">
      <RadixProgress.Indicator
        className="h-3 rounded-md bg-marine-300 transition-all"
        style={{
          width: progressWidth(now, max),
          maxWidth: '100%',
        }}
      />
    </RadixProgress.Root>
  )
}

export const ProgressIndicator = () => {
  const { max, now } = useContext(ProgressContext)

  return (
    <span className="font-bold text-sm">
      {String(now).padStart(2, '0')}/{max}
    </span>
  )
}

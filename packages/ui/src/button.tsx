'use client'

import { ComponentProps, ElementType, ReactNode } from 'react'

type ButtonProps = ComponentProps<'button'>

export const Button = (props: ButtonProps) => (
  <button
    className="py-3 px-5 flex items-center gap-3 font-bold text-sm bg-marine-500 rounded-md text-marine-50 hover:bg-marine-600 transition-all"
    {...props}
  />
)

export const ButtonText = ({ children }: { children: ReactNode }) => (
  <span>{children}</span>
)

export const ButtonIcon = ({ icon: Icon }: { icon: ElementType }) => (
  <Icon className="w-5 h-5" />
)

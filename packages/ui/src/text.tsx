import { ComponentProps } from "react"

type TextProps = ComponentProps<'span'> 

export const Text = (props: TextProps) => <span {...props}/>
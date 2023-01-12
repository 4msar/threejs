import { CSSProperties } from "react"

export type CommonProps<T = {}> = {
    children?: React.ReactNode
    className?: string
} & T

export const Container = ({ children, className }: CommonProps) => (
    <div className={"container mx-auto " + className}>{children}</div>
)

export const Box = ({ children, className, sx }: CommonProps<{ sx?: CSSProperties }>) => (
    <div className={className} style={sx}>{children}</div>
)
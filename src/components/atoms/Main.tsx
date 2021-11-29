import { ComponentChildren } from 'preact'

interface Props {
  children: ComponentChildren
  className: string
}

export default function Main({ children, className }: Props) {
  return <main className={className}>{children}</main>
}

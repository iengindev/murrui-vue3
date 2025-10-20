export type ButtonSeverity = 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'help' | 'danger'
export type ButtonVariant = 'default' | 'text' | 'outlined' | 'link'

export interface ButtonPropsType {
  label?: string
  severity?: ButtonSeverity
  variant?: ButtonVariant
}

export interface ButtonEmitsType {
  click: (event: Event) => void
}

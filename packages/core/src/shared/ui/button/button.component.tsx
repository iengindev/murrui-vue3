import './button.style.css'

import { defineComponent, type SetupContext } from 'vue'

import { useButtonService } from './button.service'

import type { ButtonPropsType, ButtonEmitsType } from './button.types'

export default defineComponent((props: ButtonPropsType, ctx: SetupContext<ButtonEmitsType>) => {
  const { methods, actions } = useButtonService(props, ctx)

  return () => (
    <>
      <button { ...ctx.attrs } class={["mui__button", `mui__bs-${props.severity ?? 'primary'}`, `mui__bv-${props.variant ?? 'default'}`]} onClick={actions.handleClick}>
        {
          methods.getValue()
        }
      </button>
    </>
  )
}, {
  props: [
    'label',
    'severity',
    'variant'
  ],

  emits: [
    'click'
  ]
})

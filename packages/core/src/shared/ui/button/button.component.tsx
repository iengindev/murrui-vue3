import './button.style.css'

import { defineComponent, type SetupContext } from 'vue'

import type { ButtonPropsType, ButtonEmitsType } from './button.types'

export default defineComponent((props: ButtonPropsType, ctx: SetupContext<ButtonEmitsType>) => {
  return () => (
    <>
    </>
  )
}, {
  props: [
    'label'
  ],

  emits: [
    'click'
  ]
})

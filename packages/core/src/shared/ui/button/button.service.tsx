import type { SetupContext, VNode } from 'vue'

import type { ButtonPropsType, ButtonEmitsType } from './button.types'

export const useButtonService = (props: ButtonPropsType, ctx: SetupContext<ButtonEmitsType>) => ({
  methods: {
    getValue: (): VNode | null => {
      if (!props.label) {
        return null
      }

      return (
        <span class="label">
          {
            props.label
          }
        </span>
      )
    },

    setButtonClasses: (): string[] => {
      let classes: string[] = ['m-button']

      if (props.severity) {
        classes.push('m-button-' + props.severity)
      }

      if (props.variant) {
        classes.push('m-button-' + props.variant)
      }

      return classes
    }
  },

  actions: {
    handleClick: (event: Event) => {
      ctx.emit('click', event)
    }
  }
})

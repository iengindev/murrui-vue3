import { defineComponent } from 'vue'

import { UIButton } from '@murrui/core'

export default defineComponent(() => {
  return () => (
    <>
      <div class="flex flex-col gap-2">
        <div class="inline-flex flex-col gap-2 p-4">
          <h1 class="">Button severity: default 'Primary'</h1>
          <div class="flex flex-nowrap items-center gap-2">
            <UIButton label='Submit'/>
            <UIButton label='Submit' severity='secondary'/>
            <UIButton label='Submit' severity='success'/>
            <UIButton label='Submit' severity='info'/>
            <UIButton label='Submit' severity='warn'/>
            <UIButton label='Submit' severity='help'/>
            <UIButton label='Submit' severity='danger'/>
          </div>
        </div>

        <div class="inline-flex flex-col gap-2 p-4">
          <h1 class="">Button variant: 'Text'</h1>
          <div class="flex flex-nowrap items-center gap-2">
            <UIButton label='Submit' variant='text'/>
            <UIButton label='Submit' severity='secondary' variant='text'/>
            <UIButton label='Submit' severity='success' variant='text'/>
            <UIButton label='Submit' severity='info' variant='text'/>
            <UIButton label='Submit' severity='warn' variant='text'/>
            <UIButton label='Submit' severity='help' variant='text'/>
            <UIButton label='Submit' severity='danger' variant='text'/>
          </div>
        </div>
      </div>
    </>
  )
})

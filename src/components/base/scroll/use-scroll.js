import BetterScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

import { onMounted, onUnmounted, ref } from 'vue'

BetterScroll.use(ObserveDOM)

export default function useScroll(wrapperRef, options) {
  const scroll = ref(null)

  onMounted(() => {
    scroll.value = new BetterScroll(wrapperRef.value, {
      observeDOM: true, // 开启 observe-dom 插件
      ...options
    })
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })
}

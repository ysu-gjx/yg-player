import { ref, computed } from 'vue'

export default function useShortcut (props, groupRef) {
  const ANCHOR_HEIGHT = 18
  const scrollRef = ref(null)
  const shortcutList = computed(() => {
    return props.data.map(group => group.title)
  })

  const touch = {}
  function onShortcutTouchStart(e) {
    touch.y1 = e.touches[0].pageY
    const anchorIndex = parseInt(e.target.dataset.index)
    touch.anchorIndex = anchorIndex

    scrollTo(anchorIndex)
  }

  function onShortcutTouchMove(e) {
    touch.y2 = e.touches[0].pageY
    const delta = (touch.y2 - touch.y1) / ANCHOR_HEIGHT | 0 // 相当于Math.floor
    const anchorIndex = touch.anchorIndex + delta

    scrollTo(anchorIndex)
  }

  function scrollTo(index) {
    if (isNaN(index)) { // 在anchor 上下两个黑边区域时
      return
    }
    index = Math.max(0, Math.min(shortcutList.value.length - 1, index)) // 控制手指滑动边界
    const targetElm = groupRef.value.children[index]
    const scroll = scrollRef.value.scroll

    scroll.scrollToElement(targetElm, 0)
  }

  return {
    shortcutList,
    onShortcutTouchStart,
    scrollRef,
    onShortcutTouchMove
  }
}
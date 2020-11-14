<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span
        class="dot"
        v-for="(item, index) in dots"
        :key="index"
        :class="{'active': currentPageIndex === index}"
      ></span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// import Slide from '@better-scroll/slide'
import {addClass} from 'common/js/dom'

// BScroll.use(Slide)

export default {
  data() {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._setSliderWidth()
      this._initDots()
      this._initSlider()
    })

    window.addEventListener('resize', () => {
      
      // 这个判断解决 在其他页面改变resize 然后在切回推荐页  轮播图显示问题
      if (!this.slider.enabled) {
        this.isResize = true
      }
      if (!this.slider || !this.slider.enabled) {
        return
      }

      // this._setSliderWidth(true)
      // this.slider.refresh()

      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        if (this.slider.isInTransition) {
          this._onScrollEnd()
        } else {
          if (this.autoPlay) {
            this._play()
          }
        }
        this.refresh()
      }, 60)
    })
  },
  methods: {
    refresh () {
      if (this.slider) {
        this._setSliderWidth(true)
        this.slider.refresh()
      }
    },
    _setSliderWidth(isResize) {
      this.children = this.$refs.sliderGroup.children

      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for(let i = 0; i < this.children.length; i++) {
        let child = this.children[i]

        addClass(child, 'slider-item')
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      if (this.loop && !isResize) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        bounce: false,
        useTransition: true,
        slide: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400,
          autoplay: this.autoPlay,
          interval: this.interval
        },
        click: true
      })

      this.slider.on('slideWillChange', (page) => {
        this.currentPageIndex = page.pageX
      })
    },
    _initDots() {
      this.dots = new Array(this.children.length)
    },
    _onScrollEnd () {
      let pageIndex = this.slider.getCurrentPage().pageX
      this.currentPageIndex = pageIndex
      // if (this.autoPlay) {
      //   this._play()
      // }
    },
    _play() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.slider.next()
      }, this.interval)
    }
  },
  activated() {
    if (this.isResize) {
      this.refresh()
      this.isResize = false
    }
    this.slider.enable()
    let pageIndex = this.slider.getCurrentPage().pageX
    this.slider.goToPage(pageIndex, 0, 0)
    this.currentPageIndex = pageIndex
    // if (this.autoPlay) {
    //   this._play()
    // }
  },
  deactivated () {
    this.slider.disable()
    clearTimeout(this.timer)
  },
  beforeDestroy() {
    this.slider.disable()
    clearTimeout(this.timer)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left 
        box-sizing: border-box
        overflow: hidden
        text-align: center
        // 下面两行是better-scroll 兼容问题要加的样式 
        // 当设置 useTransition = true时，可能在 iphone 某些系统上出现闪烁
        transform: translate3d(0,0,0)
        backface-visibility: hidden
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute 
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll       
</style>

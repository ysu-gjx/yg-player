import { PLAY_MODE, FAVORITE_KEY } from '@/assets/js/constant'
import { load } from '@/assets/js/array-store'

const state = {
  sequenceList: [], // 顺序播放list
  playList: [], // 实际播放list
  playing: false, // 是否在播放
  playMode: PLAY_MODE.sequence, // 默认顺序播放
  currentIndex: 0, // 当前index
  fullScreen: false, // 全屏
  favoriteList: load(FAVORITE_KEY) // 喜欢list
}

export default state

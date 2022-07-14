<template>
  <view class="objpreview">
    <canvas
      type="webgl"
      id="objPreviewId"
      :style="canvaStyle"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      @touchcancel="touchCancel"
      @longtap="longTap"
      @tap="tap">
    </canvas>
  </view>
</template>

<script>
import * as THREE from '../../libs/three.weapp.js'
import loadObj from './loadObj'

export default {
  props: {
    fileUrl: {
      type: String,
      default: ''
    },
    canvaStyle: {
      type: String,
      default: 'top: 64px'
    }
  },
  data() {
    return {
    }
  },
  methods: {
    touchStart(e) {
      THREE.global.touchEventHandlerFactory('canvas', 'touchstart')(e)
    },
    touchMove(e) {
      THREE.global.touchEventHandlerFactory('canvas', 'touchmove')(e)
    },
    touchEnd(e) {
      THREE.global.touchEventHandlerFactory('canvas', 'touchend')(e)
    },
    touchCancel(e) {
      // console.log('canvas', e)
    },
    longTap(e) {
      // console.log('canvas', e)
    },
    tap(e) {
      // console.log('canvas', e)
    },
  },
  mounted() {
    this.createSelectorQuery().select('#objPreviewId').node().exec((res) => {
      const canvas = new THREE.global.registerCanvas(res[0].node)
      loadObj(canvas, THREE, this.fileUrl)
    })
  },
  beforeDestroy() {
    THREE.global.clearCanvas()
	},
}
</script>

<style lang="scss" scoped>
.objpreview {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
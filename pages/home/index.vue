<template>
	<div class="home">
		<u-navbar :is-back="false" title="主页" color="#333"></u-navbar>
		<view class="home-main">
			<objPreview :fileUrl="fileUrl" :canvaStyle="'top:' + navBarHeight + 'px;width:100%;height: 80vh;'"></objPreview>
		</view>
		<tabbarBox class="tabbarBox"></tabbarBox>
	</div>
</template>

<script>
	import tabbarBox from '../components/tabbarBox.vue'
	import objPreview from '../components/objPreview.vue'
	
	export default {
		name: 'Home',
		components: {
			tabbarBox,
			objPreview
		},
		data() {
			return {
				navBarHeight: this.$globalData.navBarHeight,
				// 远程网络obj文件
				// fileUrl: 'https://threejs.org/examples/models/obj/male02/male02.obj'
				// obj文件放在本地需改后缀为svg
				// fileUrl: '/static/3d/户外桌椅.svg'
				// 使用http-server部署本地服务器访问obj文件
				fileUrl: 'http://127.0.0.1:8081/户外桌椅.obj'
			}
		},
		onReady() {
			this.$store.dispatch('changeTabbarFn',0)
		},
		onShow() {
			this.pullDownRefresh();
		},
		onLoad() {
			wx.showShareMenu({
				withShareTicket: true,
				menus: ['shareAppMessage', 'shareTimeline']
			})
		},
		onPullDownRefresh () {
			this.pullDownRefresh();
			uni.stopPullDownRefresh();
		},
		methods: {
			pullDownRefresh() {
				
			}
		}
	};
</script>

<style scoped>
	.home {
		width: 100%;
		height: 100%;
	}
	.home-main {

	}
</style>
<template>
	<u-tabbar
		class="tabbarBox"
		icon-size="44"
		:fixed="true"
		:mid-button="false"
		v-model="current"
		:list="list"
		active-color="#1890FF"
		@change="tabarChange">
	</u-tabbar>
</template>


<script>
	export default {
		name: 'TabbarBox',
		data() {
			return {
				bottomLift: this.$globalData.bottomLift,
				list: [{
						iconPath: "/static/images/tabbar/icon_home_unsel.svg",
						selectedIconPath: "/static/images/tabbar/icon_home_sel.svg",
						text: '主页',
						customIcon: false,
						midButton: false,
						isDot: true,
						pagePath: '/pages/home/index'
					}, {
						iconPath: "/static/images/tabbar/icon_mine_unsel.svg",
						selectedIconPath: "/static/images/tabbar/icon_mine_sel.svg",
						text: '我的',
						count: 0,
						isDot: false,
						customIcon: false,
						midButton: false,
						pagePath: '/pages/mine/index'
					},
				],
			};
		},
		computed: {
			current:{
				get(){
					return this.$store.getters.tabbarcurrent
				},
				set(){
					
				}
			}
		},
		methods: {
			tabarChange(e) {
				this.$store.dispatch('changeTabbarFn', e)
				uni.switchTab({url: this.list[e].pagePath})
			}
		}
	};
</script>

<style lang="scss" scoped>
	
</style>

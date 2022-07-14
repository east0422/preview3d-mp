<template>
	<div class="mine">
		<u-navbar :is-back="false" back-icon-color="#fff" color="#333" title="我的"></u-navbar>
		<div class="mine-main">
			<div class="hcontainer">
				<div class="hcontainer vcenter">
					<div class="mine-avatar">
						<u-image :src="avatarUrl" shape="circle" height="100%"></u-image>
					</div>
					<div class="mine-name">Hello, 3D-Preview</div>
				</div>
			</div>
			<u-cell-group>
				<u-cell-item icon="lock-fill" title="账号管理"></u-cell-item>
				<u-cell-item icon="server-fill" title="帮助与反馈"></u-cell-item>
				<u-cell-item icon="account-fill" title="关于我们"></u-cell-item>
				<u-cell-item icon="info-circle" title="退出登录" :title-style="{color: '#ff0000'}" :icon-style="{color: '#ff0000'}"></u-cell-item>
			</u-cell-group>
		</div>
		<tabbarBox class="tabbarBox"></tabbarBox>
	</div>
</template>

<script>
	import tabbarBox from '../components/tabbarBox.vue'
	
	export default {
		name: 'Mine',
		components: {
			tabbarBox
		},
		data() {
			return {
				avatarUrl: ''
			}
		},
		onReady() {
		},
		onShow() {
		},
		onLoad() {
		},
		methods: {
		}
	};
</script>

<style scoped>
	.mine {
		
	}
	.mine-main {
		background: #f5f5f5;
		height: 100%;
	}
	.mine-avatar {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		overflow: hidden;
		background-color: #e5e5e5;
		margin: 20rpx;
	}
	.mine-avatar image {
		width: 100%;
		height: 100%;
	}
	.mine-name {
		margin: 8rpx 0;
		font-size: 34rpx;
		max-width: 300rpx;
    overflow: hidden;
    text-overflow: ellipsis;
	}
</style>
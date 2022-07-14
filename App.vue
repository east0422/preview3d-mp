<script>
export default {
	onLaunch: function() {
		const self = this
		 uni.getSystemInfo({
			success(system) {
				self.$globalData.bottomLift = system.screenHeight - system.safeArea.bottom
			}
		})
	},
	beforeMount() {
    const self = this
    wx.getSystemInfo({
      success(system) {
        self.$globalData.windowWidth = system.windowWidth
        self.$globalData.windowHeight = system.windowHeight
        self.$globalData.statusBarHeight = system.statusBarHeight
        self.$globalData.bottomLift = system.screenHeight - system.safeArea.bottom
        let platformReg = /ios/i
        if (platformReg.test(system.platform)) {
          self.$globalData.titleBarHeight = 44
        } else {
          self.$globalData.titleBarHeight = 48
        }

        self.$globalData.navBarHeight = self.$globalData.statusBarHeight + self.$globalData.titleBarHeight
      }
    })
  },
	onShow: function() {
		uni.hideTabBar()
	},
	onHide: function() {
	}
};
</script>
<style lang="scss">
  @import "uview-ui/index.scss";
	.fill {
	  flex: 1;
	}
	.vcontainer {
	  display: flex;
	  flex-direction: column;
	}
	.hcontainer {
	  display: flex;
	  flex-direction: row;
	}
	.vcenter {
		align-content: center;
		align-items: center;
	}
	.hcenter {
		justify-content: center;
		justify-items: center;
	}
</style>

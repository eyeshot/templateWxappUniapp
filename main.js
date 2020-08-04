import Vue from 'vue'
import App from '@/App'
import $store from '@/store/index.js'
import * as filters from '@/utils/filters.js'
import $storage from '@/utils/tools/uni_storage.js'
import router, { route } from '@/utils/tools/uni_router.js'

import '@/utils/router.js'

Object.setPrototypeOf(Vue.prototype, G)

Object.keys(filters).forEach(e => {
	Vue.filter(e, filters[e])
})

Vue.prototype.$route = route
Vue.prototype.$store = $store
Vue.prototype.$router = router
Vue.prototype.$storage = $storage

Vue.mixin({
	onShareAppMessage(res) {
		return {
			title: '滚动吧！滚动君！',
			path: '/pages/index/index'
		}
	},
	onShow() {
		uni.showShareMenu({
			withShareTicket: true,
			menus: ['shareAppMessage', 'shareTimeline']
		})
	}
})

;(new Vue({ ...App })).$mount()

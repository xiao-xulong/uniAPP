const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1"

let swiper = function() {
	return new Promise((resovlve, reject) => {
		uni.request({
			url:baseUrl+ "/home/swiperdata",
			success: (data) => {
				resovlve(data)
				if (data.data.meta.status != 200) {
					uni.showToast({
						title: "获取轮播图失败"
					})
				}
			}
		})
	})
}
let goodList = function(num) {
	return new Promise((resovlve, reject) => {
		uni.request({
			url:baseUrl+ "/goods/search",
			data:{"query":"红米","pagenum":num},
			success: (data) => {
				resovlve(data)
				if (data.data.meta.status != 200) {
					uni.showToast({
						title: "获取商品列表失败"
					})
				}
			}
		})
	})
}
let classifyList = function(classify,num) {
	return new Promise((resovlve, reject) => {
		uni.request({
			url:baseUrl+ "/goods/search",
			data:{"query":classify,"pagenum":num},
			success: (data) => {
				resovlve(data)
				if (data.data.meta.status != 200) {
					uni.showToast({
						title: "获取商品列表失败"
					})
				}
			}
		})
	})
}
let newsList = function() {
	return new Promise((resovlve, reject) => {
		uni.request({
			url:"https://v2.alapi.cn/api/new/toutiao",
			data:{"type":1,"page":1,"token":"pG70XSoRwSkGQPQm"},
			success: (data) => {
				resovlve(data)
				if (data.data.code != 200) {
					uni.showToast({
						title: "获取商品列表失败"
					})
				}
			}
		})
	})
}
let goodsDetail = function(id) {
	return new Promise((resovlve, reject) => {
		uni.request({
			url:baseUrl+"/goods/detail",
			data:{"goods_id":id},
			success: (data) => {
				resovlve(data)
				if (data.data.meta.status != 200) {
					uni.showToast({
						title: "获取商品列表失败"
					})
				}
			}
		})
	})
}

export {
	swiper,goodList,classifyList,newsList,goodsDetail
}

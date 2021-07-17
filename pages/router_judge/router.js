let beforeEach=function(){
		let routes = getCurrentPages() 
	let curRoute = routes[routes.length - 1].route //获取当前页面路由
			  console.log(curRoute)
				  
			  if(curRoute=="pages/index/index"){
			  uni.setStorageSync('token','123')
				  
			  }else{
				   
			let token=	uni.getStorageSync('token')
				if(!token){ console.log('return')
					uni.switchTab({
					  url:'/pages/index/index'
				  })
				}
				 
			  }
}
export {beforeEach}
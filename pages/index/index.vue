<template>
	<view class="body">
		<swiper indicator-dots=true autoplay="true" indicator-active-color="#ffffff">
			<swiper-item class="swiper-item" v-for="item in swipers">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<view class="nav">
		
				<view class="icon">
					<i></i>
				
				</view>
				
				<view class="icon">
					<i></i>
					
				</view>
				
				<view class="icon">
					
					<i></i>
				
				</view>
				
				<view class="icon">
					<i></i>
		
				</view>
				
		
		</view>
		           <view class="icon_text" >
					<text v-for="item in navText" @click="jump(item.path)">{{item.name}}</text>
				</view>
				<view class="recommandTitle">
					<text>推荐商品</text>
				</view>
				<view class="goodList">
					<goodsList :goodsInfo="goodList"></goodsList>
				</view>
	</view>
</template>

<script>
	import {swiper,goodList} from '../request/reqeust.js'
	import goodsList from '../common/goodsList.vue'
	import {beforeEach} from '../router_judge/router.js'
	export default {
		components:{
			goodsList
		},
		async onLoad() {
			beforeEach();
		
          await swiper().then( res=>{
			  this.swipers=res.data.message
			  console.log( this.swipers)
			  
		  })
	await goodList(1).then( res=>{
		for(let i=0;i<res.data.message.goods.length;i++){
		if(res.data.message.goods[i].goods_big_logo!=""){
			  this.goodList.push(res.data.message.goods[i])
				  console.log(this.goodList)
		}}
			
		
				
				  
	})
		  
		},
		data() {
			return {
		        swipers:[],
				navText:[{
					name:'网上商城',
					path:"./online_shop"
				},
				{
					name:'联系我们',
					path:'./about_us'
				},{
					name:'社区图片',
					path:'./pics'
				},{
					name:'学习视频',
					path:'./video'
				}],
				goodList:[]
			}
		},
		
		
		methods: {
 jump(path){
	 uni.navigateTo({
		 url:path
	 })
 }
		}
	}
</script>

<style lang="less">
	.body{
		background-color: #F8F8F8;
	}
	swiper{
		width: 750rpx;
		height:200px ;
		image{
			width:100%;
			height: 100%;
		}
	
	}
	.nav{
		
		width: 100%;
		padding-top: 20rpx;
		background-color:  #FFFFFF;
		display: flex; 
		justify-content: space-around;
			.icon{
				width: 130rpx;
				height: 130rpx;
				border-radius: 50%;
				background-color: #DD524D;
				i{
					display: inline-block;
					width: 50%;
					height: 50%;
					position: relative;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
					}
					&:nth-child(1){
									i{
					                    background-image: url("data:image/svg+xml,%3Csvg t='1625973469241' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1726' width='200' height='200'%3E%3Cpath d='M215.8 153.4h69.8c14.2 0 25.6-11.5 25.6-25.6s-11.5-25.6-25.6-25.6h-88.1c-10.9 0-20.7 6.9-24.2 17.3l-67.8 197.1c-12.4 36-7.1 76.5 14.2 108.2 20.9 31.1 54 50.2 90.9 52.3 2.4 0.1 4.8 0.2 7.2 0.2 39.8 0 75.3-18.9 98-48.3 22.6 29.4 58.1 48.3 98 48.3s75.3-18.9 98-48.3c22.6 29.4 58.1 48.3 98 48.3s75.3-18.9 98-48.3c22.6 29.4 58.1 48.3 98 48.3 2.4 0 4.8-0.1 7.2-0.2 36.9-2.1 70-21.2 90.9-52.3 21.3-31.7 26.6-72.2 14.2-108.2L850 119.4c-3.6-10.3-13.3-17.3-24.2-17.3H445.6c-14.2 0-25.6 11.5-25.6 25.6s11.5 25.6 25.6 25.6h361.9l61.8 179.8c7.3 21.3 4.3 44.2-8.3 63-11.9 17.7-30.5 28.5-51.2 29.7-1.4 0.1-2.8 0.1-4.3 0.1-39.9 0-72.3-32.4-72.3-72.3 0-14.2-11.5-25.6-25.6-25.6-14.2 0-25.6 11.5-25.6 25.6 0 39.9-32.4 72.3-72.3 72.3s-72.3-32.4-72.3-72.3c0-14.2-11.5-25.6-25.6-25.6-14.2 0-25.6 11.5-25.6 25.6 0 39.9-32.4 72.3-72.3 72.3s-72.3-32.4-72.3-72.3c0-14.2-11.5-25.6-25.6-25.6-14.2 0-25.6 11.5-25.6 25.6 0 39.9-32.4 72.3-72.3 72.3-1.4 0-2.9 0-4.3-0.1-20.7-1.2-39.4-12-51.2-29.7-12.6-18.8-15.6-41.7-8.3-63l61.5-179.7zM178.3 530.7c-14.2 0-25.6 11.5-25.6 25.6v240c0 70.9 57.7 128.6 128.6 128.6H742c70.9 0 128.6-57.7 128.6-128.6V556.8c0-14.2-11.5-25.6-25.6-25.6s-25.6 11.5-25.6 25.6v239.6c0 42.7-34.7 77.4-77.4 77.4H281.3c-42.7 0-77.4-34.7-77.4-77.4v-240c0-14.2-11.5-25.7-25.6-25.7z' p-id='1727' fill='%23ffffff'%3E%3C/path%3E%3Cpath d='M636.2 815c14.2 0 25.6-11.5 25.6-25.6v-94.8c0-82.8-67.4-150.2-150.2-150.2-82.8 0-150.2 67.4-150.2 150.2v94.8c0 14.2 11.5 25.6 25.6 25.6s25.6-11.5 25.6-25.6v-94.8c0-54.6 44.4-98.9 98.9-98.9s98.9 44.4 98.9 98.9v94.8c0.2 14.1 11.7 25.6 25.8 25.6z' p-id='1728' fill='%23ffffff'%3E%3C/path%3E%3C/svg%3E");
										  background-size: cover;
										}
									}	
                   &:nth-child(2){	
					i{
							background-image:url("data:image/svg+xml,%3Csvg t='1625972173628' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1216' width='200' height='200'%3E%3Cpath d='M512.1 0C229.4 0 0 229.2 0 512.1S229.2 1024 512.1 1024s512.1-229.2 512.1-512.1S794.8 0 512.1 0z m0 949.5C270.5 949.5 74.6 753.7 74.6 512S270.4 74.4 512.1 74.4s437.5 195.9 437.5 437.5S753.7 949.5 512.1 949.5z m108.4-253.4l-34.9-33.2-8.4 7.7c-41.1 37.8-57.4 47.8-63.3 50.5 0-0.2-0.1-0.3-0.1-0.5 10-63.1 25.7-125.1 46.9-185.3 12.3-35.9 22.2-72.6 29.6-109.9l0.2-0.9v-0.9c0.4-10.4-4.2-20.3-12.3-26.7l-0.5-0.4c-8.7-6.1-19.2-9-29.7-8.4-24.3 1.7-47.9 9.4-68.6 22.3a357.6 357.6 0 0 0-84.8 71.2l-8.5 9.8 38.7 29.2 7.5-7.6c15.4-15.7 32-30.3 49.6-43.5 2.8-1.9 5.9-3.2 9.2-4-0.4 3.4-1.1 6.7-2.2 9.9-32.3 87.7-55.1 178.6-68.1 271.1l-0.1 0.9c-0.8 13 3.6 25.8 12.1 35.5l0.5 0.5c8.4 8.6 20 13.4 32 13.4h2.8c18.5-1.6 36.3-7.7 51.9-17.7l34.8-22.4h-3.2c21.1-15.9 41.2-33.2 60.1-51.8l8.8-8.8zM644.9 242c-1-23.5-20.8-41.7-44.2-40.9h-0.2c-15.1 0-29.5 6.5-39.5 17.7-10.9 11.2-16.8 26.2-16.5 41.8-0.4 12.1 4.1 23.9 12.4 32.7 7.9 8.3 18.9 13 30.3 13h1.2c13.3-0.3 26-5.5 35.7-14.7h0.1l3.6-3.6c11.1-11.4 17.3-26.7 17.2-42.6v-3.2l-0.1-0.2z' p-id='1217' fill='%23ffffff'%3E%3C/path%3E%3C/svg%3E");
						  background-size: cover;
						}
					}
						&:nth-child(3){
								i{
										background-image: url("data:image/svg+xml,%3Csvg t='1625973207452' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1325' width='200' height='200'%3E%3Cpath d='M343.466667 362.666667m-93.866667 0a93.866667 93.866667 0 1 0 187.733333 0 93.866667 93.866667 0 1 0-187.733333 0Z' p-id='1326' fill='%23ffffff'%3E%3C/path%3E%3Cpath d='M657.066667 375.466667L388.266667 644.266667l-134.4-134.4L128 633.6v121.6l125.866667-125.866667 134.4 136.533334 268.8-268.8 241.066666 241.066666v-121.6z' p-id='1327' fill='%23ffffff'%3E%3C/path%3E%3Cpath d='M981.333333 917.333333H42.666667V106.666667h938.666666v810.666666zM128 832h768V192H128v640z' p-id='1328' fill='%23ffffff'%3E%3C/path%3E%3C/svg%3E");
									  background-size: cover;
									}
								}	
								&:nth-child(4){
								i{
						background-image: url("data:image/svg+xml,%3Csvg t='1625973286615' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2388' width='200' height='200'%3E%3Cpath d='M413.504 666.944l223.488-127.296c20.544-11.776 20.544-45.248 0-56.96l-223.488-127.36c-18.624-10.56-40.448 4.736-40.448 28.48v254.72c0 23.68 21.824 38.976 40.448 28.416z m462.656-537.856H149.312c-45.952 0-83.52 43.136-83.52 96v572.096c0 52.992 37.248 96 83.52 96H876.16c46.016 0 83.52-43.2 83.52-96V225.088c0-53.056-37.248-96-83.52-96zM233.344 797.376c0 17.728-11.968 32.128-28.224 32.128h-55.296c-15.616 0-28.224-13.632-28.224-32.128v-63.04c0-17.728 11.968-32.128 28.224-32.128h55.36c15.552 0 28.16 13.632 28.16 32.128v63.04z m0-254.72c0 17.792-11.968 32.128-28.224 32.128h-55.296c-15.552 0-28.224-13.568-28.224-32.128v-63.04c0-17.728 11.968-32.128 28.224-32.128h55.36c15.552 0 28.16 13.632 28.16 32.128v63.04z m0-254.656c0 17.728-11.968 32.128-28.224 32.128h-55.296c-15.552 0-28.224-13.632-28.224-32.128v-63.04c0-17.792 11.968-32.128 28.224-32.128h55.36c15.552 0 28.16 13.632 28.16 32.128V288z m502.912 541.504H289.28V192.768h446.976v636.736z m167.552-32.128c0 17.728-11.968 32.128-28.16 32.128h-55.36c-15.488 0-28.096-13.632-28.096-32.128v-63.04c0-17.728 11.968-32.128 28.16-32.128h55.36c15.488 0 28.096 13.632 28.096 32.128v63.04z m0-254.72c0 17.792-11.968 32.128-28.16 32.128h-55.36c-15.488 0-28.096-13.632-28.096-32.128v-63.04c0-17.728 11.968-32.128 28.16-32.128h55.36c15.488 0 28.096 13.632 28.096 32.128v63.04z m0-254.656c0 17.728-11.968 32.128-28.16 32.128h-55.36c-15.488 0-28.096-13.632-28.096-32.128v-63.04c0-17.792 11.968-32.128 28.16-32.128h55.36c15.488 0 28.096 13.632 28.096 32.128V288z' p-id='2389' fill='%23ffffff'%3E%3C/path%3E%3C/svg%3E");
									  background-size: cover;
									}
								}	
			}
			
		}
	.icon_text{
		background-color:  #FFFFFF;
				width: 100%;
				display: flex;
				text-align: center;
				text{
					display: inline-block;
					flex: 1;
					font-size: 16px;
				}
			}
	
.recommandTitle{
	width: 100%;
	text-align: center;
	margin-top: 10px;
	margin-bottom: 5px;
	background-color: #FFFFFF;
	text{
		letter-spacing: 20px;
	color: #DD524D;
	}
	
}
.goodList{
	width:100%;
	
	
}
</style>

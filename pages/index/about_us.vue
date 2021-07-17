<template>
	<view>
		<view  class="topImg">
			<image src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b65d2148cd197ee48d65e02cbc00798.jpg" mode="aspectFit"></image>
	</view>
			<view class="phone" @click="playphone">
				联系电话：400-618-9090（点击拨打）
			</view>
		<view class="address">
			地址：武汉市洪山区花山大道中国光谷
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="icon"></map>
	</view>
</template>

<script>
	import {beforeEach} from '../router_judge/router.js'
	export default {
		created() {
				beforeEach();
		},
		data() {
			return {
				longitude:114.435695,
				latitude:30.461393,
				icon:[{
                 longitude:114.435695,
                 latitude:30.461393,
				 iconPath:'/static/icon/mi.jpeg',
				 width:30,
				 height:30
				}]
			}
		},
		methods: {
				
			playphone(){
			uni.makePhoneCall({
				phoneNumber:'15927369356',
				})
			}
		}
	}
</script>

<style lang="less">
.topImg{
	width: 100%;
	image{
		width: 100%;
	}
}
.phone{
	height: 30px;
	border-bottom: solid 1px #F1F1F1;
	font-size: 15px;
	padding: 0 30rpx;
}
.address{
	margin-top: 20rpx;
	font-size: 15px;
		padding: 0 30rpx;
	
}
	
.map{
	margin-top: 30rpx;
	width: 750rpx;
	height: 750rpx;
}
</style>

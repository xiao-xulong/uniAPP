<template>
	<view class="goodsList">
		<view class="goodItem" v-for="item in goodsInfo" @click="detail(item.goods_id)">
			<image :src="item.goods_big_logo" mode="aspectFit"></image>
			<view class="price">￥{{item.goods_price}}</view>
			<view class="goodsName">{{item.goods_name}}</view>
			</view>
	</view>
</template>
<script>
	export default{
		props:["goodsInfo"],
		methods:{
			detail(id){
				uni.navigateTo({
					url:`../index/detail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="less">
		
	.goodsList{
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 15rpx;
			
	}
	.goodItem{
	width: 48.5%;
		background-color: #FFFFFF;
	margin-top: 5px;
		
		image{
			width: 100%;
			height: 200px;
		}
		view{
			padding: 0 5px;
		}
		.price{
			color: #DD524D;
		}
		.goodsName{
			font-size: small;
		}
	}
</style>

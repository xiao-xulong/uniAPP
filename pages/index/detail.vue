<template>
	<view class="body">
	<image :src="detail.goods_big_logo" ></image>
	<view class="goodPrice">
		￥{{detail.goods_price}}
	</view>
	<view class="goodName">
		{{detail.goods_name}}
	</view>
	<view class="goodId_Num">
		货号：{{detail.goods_id}}<br>
		库存：{{detail.goods_number}}
	</view>
	<view class="goods_introduce">
		<view class="introduce_title">详情介绍</view>
		<rich-text :nodes="detail.goods_introduce"  class="introduce_content"></rich-text>
		
	</view>
   <view class="uni-goods-nav" ><uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="addCart" @buttonClick="buyNow" /></view>
	
	</view>
</template>

<script>
	import {beforeEach} from '../router_judge/router.js'
	import {goodsDetail} from '../request/reqeust.js'
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		    components: {uniGoodsNav},
	async	onLoad(option) {
			beforeEach();
		let res=await	goodsDetail(option.id)
this.detail=	res.data.message
if(this.detail.goods_introduce=="<div></div>"){
	this.detail.goods_introduce="<div><p> 暂无介绍</p></div>"
}
		console.log(this.detail.goods_introduce)
		
		},
		data() {
			return {
				detail:[],
				 options: [{
				            icon: 'headphones',
				            text: '客服'
				        }, {
				            icon: 'shop',
				            text: '店铺',
				            info: 2,
				            infoBackgroundColor:'#007aff',
				            infoColor:"red"
				        }, {
				            icon: 'cart',
				            text: '购物车',
				            info: 2
				        }],
				        buttonGroup: [{
				          text: '加入购物车',
				          backgroundColor: '#ff0000',
				          color: '#fff'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        }
				        ]
			}
		},
		methods: {
			addCart(e){
				console.log(e)
			},
			buyNow(e){
				console.log(e)
			}
		}
	}
</script>

<style lang="less">
	.body{
		background-color: #F8F8F8;
	}
	image{
		width:750rpx;
		height: 750rpx;
		
	}
.goodPrice{
	width: 100%;
	height: 30px;
	line-height: 30px;
	color: #DD524D;
	background-color: #FFFFFF;
}
.goodName{
	width: 100%;
	background-color: #FFFFFF;
}
.goodId_Num{
	margin-top: 8px;
	background-color: #FFFFFF;
}
	
.goods_introduce{
	margin-top: 8px;
	background-color: #FFFFFF;
	.introduce_title{
		height: 40px;
		line-height:40px;
	}
	.introduce_content{
		
		font-size: 14px;
	}
}
.uni-goods-nav{
width: 100%;
position: fixed;
bottom: 0;
height: 50px;
z-index: 999;
}
</style>

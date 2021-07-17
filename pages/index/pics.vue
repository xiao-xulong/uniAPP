<template>
	<view>
		<scroll-view scroll-y class="scroll-left">
			<view :class="index==act ? 'act':'' " @click="active(index)"  v-for="(item,index) in classify">{{item}}</view>
		</scroll-view>
		<scroll-view scroll-y class="scroll-right">
			<view class="goodInfo" v-for="item in goodList">
				<image :src="item.goods_big_logo" @click="previewImage(item.goods_id)"></image>
			<text>{{item.goods_name}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {beforeEach} from '../router_judge/router.js'
	import {classifyList} from '../request/reqeust.js'
	export default {
	async	onLoad() {
			beforeEach();
	this.getInfo_Pic()

		},
		data() {
			return {
			classify:['小米手机','小米电视','小米笔记本','小米路由器','小米充电宝','米家'] ,
			act:0,
			pageNum:1,
			goodList:[],
			picsUrl:[]
			}
		},
		methods: {
			active(i){
				if(this.act==i){
					return
					
				}else{
						this.act=i
				this.goodList=[]
				this.picsUrl=[]
				this.getInfo_Pic()
				}
				
			
				
				
				
				
			},
		async	getInfo_Pic(){
				await classifyList(this.classify[this.act],this.pageNum).then(res=>{
					for(let i=0;i<res.data.message.goods.length;i++){
					if(res.data.message.goods[i].goods_big_logo!=""){
						  this.goodList.push(res.data.message.goods[i])
							  console.log(this.goodList)
					}
					}
					 this.goodList.forEach((item)=>{
					this.picsUrl.push(item.goods_big_logo)
				})
				})
				
			},
			previewImage(id){
			let index=	this.goodList.findIndex((item)=>
				{
					return item.goods_id==id
				})
				console.log(id)
				console.log(index)
				uni.previewImage({
					urls:this.picsUrl,
					current:index
				})
			}
		}
	}
</script>

<style lang="less">
	uni-page-body,uni-view{
		height: 100%;
	}
.scroll-left{
	width: 200rpx;
	height: 100%;
	display: inline-block;
	view{
		width: 100%;
		height: 60px;
		line-height: 60px;
		text-align: center;
	font-size: 14px;
	border-right:solid 1rpx #F1F1F1 ;
	border-bottom:solid 1px #F1F1F1;
	background-color: #FFFFFF;
	}
	.act{
		background-color: #FF4500;
		color: #FFFFFF;
	}
}
	.scroll-right{
		vertical-align: top;
		display: inline-block;
		width: 500rpx;
		height: 100vh;
		
		margin-left: 25rpx;
		.goodInfo{
	width: 100%;
height: auto;
	image{
		width: 100%;
		
	}
	text{
		font-size: 16px;
	}
}
	}

</style>

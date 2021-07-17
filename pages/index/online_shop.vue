<template>
	<view>
		<goodsList :goodsInfo="goodList"></goodsList>
	</view>
</template>

<script>
	import {goodList} from '../request/reqeust.js'
	import goodsList from '../common/goodsList.vue'
	import {beforeEach} from '../router_judge/router.js'
	export default {
		components:{
			goodsList
		},
		
		async onLoad(){
		     	beforeEach();
		await goodList(this.pageNum).then( res=>{
				
			for(let i=0;i<res.data.message.goods.length;i++){
			if(res.data.message.goods[i].goods_big_logo!=""){
				  this.goodList.push(res.data.message.goods[i])
					  console.log(this.goodList)
			}
			}  
		})
			  
			},
		async	onReachBottom(){
				this.pageNum++
				await goodList(this.pageNum).then( res=>{
						
					for(let i=0;i<res.data.message.goods.length;i++){
					if(res.data.message.goods[i].goods_big_logo!=""){
						  this.goodList.push(res.data.message.goods[i])
							  console.log(this.goodList)
					}
					}  
				})
			},
		data() {
			return {
				goodList:[],
				pageNum:1
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

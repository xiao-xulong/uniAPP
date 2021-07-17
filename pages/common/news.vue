<template>
	<view >
			<!-- <navigator :url="item.m_url" > -->
		<view class="newsItem" v-for="item in news" @click="jump(item.m_url)">
			
		<view class="img">
			<image :src="item.imgsrc" ></image>
		</view>
		<view class="content">
			{{item.title}}<br>
			<text>发表时间{{item.time}}-{{item.source}}</text>
			
		</view>
		
		<!-- </navigator> -->
	</view>

	</view>
</template>

<script>
		
	export default{
			props:["news"],
			data(){
					
				return{
				}
			},
			methods:{
				jump(url){
					console.log(url)
			 uni.navigateTo({
				 url:`../webView/webView?url=${url}`
			 })
				}
			}
	
	
	}
</script>

<style lang="less">
		
	.newsItem{
		box-sizing: border-box;
		width: 100%;
		height: 13vh;
		display: flex;
		
		padding: 0 10px;
	padding-bottom: 5px;
	border-bottom: solid 1px #F0AD4E;
	margin-bottom: 3px;
	    .img{
			flex: 3;
			image{
				width: 100%;
				height: 100%;
				vertical-align: top;
			}
		}
		.content{
			flex: 7;
		font-size: 18px;
			
		text{
			vertical-align: bottom;
		font-size: 14px;
		}
		}
	}
</style>

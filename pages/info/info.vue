<template>
	<view>
		<news :news="newsInfo"></news>
	</view>
</template>

<script>
	import {beforeEach} from '../router_judge/router.js'
	import news from '../common/news.vue'
	import {newsList} from '../request/reqeust.js'
	export default {
		async	onLoad() {
				beforeEach();
		let res=	await	newsList()
		this.newsInfo= res.data.data
		console.log(this.newsInfo)
			},
		components:{
		news
		},
		data() {
			return {
				newsInfo:[]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

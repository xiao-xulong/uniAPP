<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			this.url=option.url
			console.log(option)
		},
		data(){
			return{
				url:""
			}
		}
	
	}
</script>

<style>
</style>

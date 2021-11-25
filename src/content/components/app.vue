<!--
 * @Author: migor
 * @Date: 2021-11-25 20:53:19
 * @LastEditors: migor
 * @LastEditTime: 2021-11-25 21:46:41
 * @Description: file content
-->
<template>
  <div class="content_page">
    content_page
    <div class="content_page_main">
      content_page_main
    </div>
  </div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
	.content_page{
		color: red;
		position: fixed;
		z-index: 100001;
		right: 10px;
		bottom: 10px;
		.content_page_main{
			color: green;
		}
	}
</style>


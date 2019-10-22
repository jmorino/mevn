<template>
	<div class="custom">Hello <span>{{name}}</span></div>
</template>


<script>
export default {
	data() { return {
		name: 'World',
	}},
}
</script>


<style lang="less">
.custom {
	font-size: 2rem;
	span { color: red }
}
</style>
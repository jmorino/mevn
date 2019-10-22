<template>
	<div>
		<div class="custom">Hello <span>{{name}}</span></div>
		<div>Server said: {{ response }}</div>
	</div>
</template>


<script>
export default {
	data() { return {
		name: 'World',
		response: null,
	}},
	mounted() {
		fetch('http://localhost:3000/api')
			.then(async response => {
				console.log(response);
				this.response = (await response.json()).ok;
			})
			.catch(err => {
				console.error(err);
				this.response = err.message;
			});
	}
}
</script>


<style lang="less" scoped>
.custom {
	font-size: 2rem;
	span { color: red }
}
</style>
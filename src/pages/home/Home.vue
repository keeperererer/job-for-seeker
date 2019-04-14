<template>
	<div>
		<home-header></home-header>
		<home-search></home-search>
		<home-footer></home-footer>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearch from './components/Search'
import HomeFooter from './components/Footer'

export default {
	name: 'Home',
	components: {
		HomeHeader,
		HomeSearch,
		HomeFooter
	}
}
</script>

<style>
	
</style>
<template>
	<div>
		<home-header></home-header>
		<list-ewatch></list-ewatch>
	</div>
</template>

<script>
import HomeHeader from '../home/components/Header'
import ListEwatch from './components/Ewatch'

export default {
	name: 'Watch',
	components: {
		HomeHeader,
		ListEwatch
	}
}
</script>

<style>
	
</style>
<template>
	<div>
		<home-header></home-header>
		<list-content></list-content>
	</div>
</template>

<script>
import HomeHeader from '../home/components/Header'
import ListContent from './components/Content'

export default {
	name: 'Person',
	components: {
		HomeHeader,
		ListContent
	}
}
</script>

<style>
	
</style>
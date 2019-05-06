<template>
<div>
	<home-header></home-header>
	<list-jdtitle></list-jdtitle>
	<list-jdleft></list-jdleft>
	<list-jdright></list-jdright>
</div>
</template>

<script>
import HomeHeader from '../../home/components/Header'
import ListJdtitle from './Jdtitle'
import ListJdleft from './Jdleft'
import ListJdright from './Jdright'

export default {
	name: 'ListJdetails',
	components:{
		HomeHeader,
		ListJdtitle,
		ListJdleft,
		ListJdright
	}
}
</script>

<style lang="stylus" scoped>


</style>

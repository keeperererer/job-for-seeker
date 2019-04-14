<template>
<div class="footer">
	<section class="features-area">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-3 col-sm-6 timy">
					<div class="single-feature">
						<h4>关于我们</h4>
						<p>
							一群被腰酸背痛，秃头掉发缠身的青年。
						</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 timy">
					<div class="single-feature">
						<h4>加入我们</h4>
						<p>
							加入我们不如直接打巨款买下这个网站。
						</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 timy">
					<div class="single-feature">
						<h4>联系我们</h4>
						<p>
							我们单方面不承认有bug。
						</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-6 timy">
					<div class="single-feature">
						<h4>版权所有</h4>
						<p>
							mat实验室 &copy; 2018版权所有
						</p>
					</div>
				</div>																		
			</div>
		</div>	
	</section>
</div>
</template>

<script>
export default{
	name: 'HomeFooter'	
}
</script>

<style lang="stylus" scoped>

.features-area{
	margin-top:-65px;
}
.container{
	width: 100%; 
	margin-left: auto; 
	margin-right: auto;
}
.single-feature {
    text-align: center;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 0px 40px 0px rgba(132, 144, 255, 0.2);
    padding: 30px 0;
}
.single-feature h4 {
    padding-bottom: 15px;
    font-weight:500;
}
p{
	color:#777777;
	font-size:1.2rem;
}
@media only screen and (min-width:582px) and (max-width: 768px){
	.timy{
		width:45%;		
		display:inline-block;
	}
	.row{
		text-align:center;
	}

}
</style>
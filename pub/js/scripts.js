// init css animation from wow.js

new WOW().init();

// navigation logic

$('.linksOneSub, .linksTwoSub, .linksThreeSub, .linksFourSub, .linksFiveSub, .linksSixSub').hide();

$('.linkOne').click(function(){
	event.preventDefault();
	$('.linksOneSub').show();
	$('.linkTwo, .linkThree, .linkFour, .linkFive, .linkSix').hide();
})

$('.linkTwo').click(function(){
	event.preventDefault();
	$('.linksTwoSub').show();
	$('.linkOne, .linkThree, .linkFour, .linkFive, .linkSix').hide();
})

$('.linkThree').click(function(){
	event.preventDefault();
	$('.linksThreeSub').show();
	$('.linkOne, .linkTwo, .linkFour, .linkFive, .linkSix').hide();
})

// close sub content

$('.linksSubClose').click(function(){
	$('.linksOneSub, .linksTwoSub, .linksThreeSub, .linksFourSub, .linksOneFive, .linksSixSub').hide();
	$('.linkOne, .linkTwo, .linkThree, .linkFour, .linkFive, .linkSix').show();
})
// init css animation from wow.js

new WOW().init();

// navigation logic

$('.linksOneSub').hide();

$('.linkOne').click(function(){
	event.preventDefault();
	$('.linksOneSub').show();
	$('.linkTwo, .linkThree, .linkFour, .linkFive, .linkSix').hide();
})

// close sub content

$('.linksSubClose').click(function(){
	$('.linksOneSub, .linksTwoSub, .linksThreeSub, .linksFourSub, .linksOneFive, .linksSixSub').hide();
	$('.linkOne, .linkTwo, .linkThree, .linkFour, .linkFive, .linkSix').show();
})
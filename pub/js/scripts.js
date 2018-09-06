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

$(".rslides").responsiveSlides({
	auto: true,             // Boolean: Animate automatically, true or false
	speed: 500,            // Integer: Speed of the transition, in milliseconds
	timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
	pager: false,           // Boolean: Show pager, true or false
	nav: false,             // Boolean: Show navigation, true or false
	random: false,          // Boolean: Randomize the order of the slides, true or false
	pause: false,           // Boolean: Pause on hover, true or false
	pauseControls: true,    // Boolean: Pause when hovering controls, true or false
	prevText: "Previous",   // String: Text for the "previous" button
	nextText: "Next",       // String: Text for the "next" button
	maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
	navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
	manualControls: "",     // Selector: Declare custom pager navigation
	namespace: "rslides",   // String: Change the default namespace used
	before: function(){},   // Function: Before callback
	after: function(){}     // Function: After callback
  });

  // init smooth scroll

var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});

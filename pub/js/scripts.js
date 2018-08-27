$('.icon__menu').click(function(){
	$('.navigation').bPopup({
    	closeClass:'navigation__close',
    	amsl: 0,
    	positionStyle: 'fixed',
    })
})

$('.link__auth').click(function(){
	$('.auth').bPopup({
    	closeClass:'auth__close',
    	amsl: 0,
    	positionStyle: 'fixed',
    })
})

$('.link__no-connect').click(function(){
	$('.no-connection').bPopup({
    	closeClass:'icon__close',
    	amsl: 0,
    	positionStyle: 'fixed',
    })
})

$('.test-socket').click(function(){
	$('.local-connection-error').bPopup({
    	closeClass:'icon__close',
    	amsl: 0,
    	positionStyle: 'fixed',
    })
})

$('.auth__elements input').click(function(){
	$('.keypad').show();
})

$('.keypad__close').click(function(){
	$('.keypad').hide();
})

// main tabs

$('.tabs__content__two, .tabs__content__three').hide();

$('.tab__one').click(function(){
	$('.tabs__content__one').show();
	$('.tabs__content__two').hide();
	$('.tabs__content__three').hide();
	$('.tab__one').addClass('tab__active');
	$('.tab__two').removeClass('tab__active');
	$('.tab__three').removeClass('tab__active');
})

$('.tab__two').click(function(){
	$('.tabs__content__one').hide();
	$('.tabs__content__two').show();
	$('.tabs__content__three').hide();
	$('.tab__two').addClass('tab__active');
	$('.tab__one').removeClass('tab__active');
	$('.tab__three').removeClass('tab__active');
})

$('.tab__three').click(function(){
	$('.tabs__content__one').hide();
	$('.tabs__content__two').hide();
	$('.tabs__content__three').show();
	$('.tab__three').addClass('tab__active');
	$('.tab__two').removeClass('tab__active');
	$('.tab__one').removeClass('tab__active');
})

// main subtabs

$('.subtabs__content__outs').hide();

$('.subtab__one').click(function(){
	$('.subtabs__content__in').show();
	$('.subtabs__content__outs').hide();
	$('.subtab__one').addClass('subtab__active');
	$('.subtab__two').removeClass('subtab__active');
})

$('.subtab__two').click(function(){
	$('.subtabs__content__outs').show();
	$('.subtabs__content__in').hide();
	$('.subtab__two').addClass('subtab__active');
	$('.subtab__one').removeClass('subtab__active');
})

// algo subtabs setting engine

$('.tab-content-two-setting-engine, .tab-content-three-setting-engine').hide();

$('.tab-link-one-setting-engine').click(function(){

	// link
	$('.tab-link-one-setting-engine').addClass('tab-link-active-setting-engine');
	$('.tab-link-two-setting-engine, .tab-link-three-setting-engine').removeClass('tab-link-active-setting-engine');

	// content
	$('.tab-content-one-setting-engine').show();
	$('.tab-content-two-setting-engine, .tab-content-three-setting-engine').hide();
})

$('.tab-link-two-setting-engine').click(function(){

	// link
	$('.tab-link-two-setting-engine').addClass('tab-link-active-setting-engine');
	$('.tab-link-one-setting-engine, .tab-link-three-setting-engine').removeClass('tab-link-active-setting-engine');

	// content
	$('.tab-content-two-setting-engine').show();
	$('.tab-content-one-setting-engine, .tab-content-three-setting-engine').hide();
})

$('.tab-link-three-setting-engine').click(function(){

	// link
	$('.tab-link-three-setting-engine').addClass('tab-link-active-setting-engine');
	$('.tab-link-two-setting-engine, .tab-link-one-setting-engine').removeClass('tab-link-active-setting-engine');

	// content
	$('.tab-content-three-setting-engine').show();
	$('.tab-content-two-setting-engine, .tab-content-one-setting-engine').hide();
})
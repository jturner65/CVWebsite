/**
 * 
 */
$(document).ready(function (){
	
	// load slidertron file slider div into banner when slidertron_banner div is loaded 
	$('#slidertron_banner').load("cvlayout/data/sliderTron.html #slider", function (){	
		$('#slider').slidertron({
			viewerSelector: '.viewer',
			reelSelector: '.viewer .reel',
			slidesSelector: '.viewer .reel .slide',
			advanceDelay: 2000,
			speed: 'slow',
			navPreviousSelector: '.previous-button',
			navNextSelector: '.next-button',
			indicatorSelector: '.indicator ul li',
			slideLinkSelector: '.link'
		});	
	});
})
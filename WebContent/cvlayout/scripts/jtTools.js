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
	// load topbar menu from root page
   $('#root_topbarMenu').load("cvlayout/data/topbarMenu.html #topbar", function() { 	
		$('#root_topbarMenu').find('a').each(function(){
			$(this).attr("href", $(this).attr("href").replace("../", "./cvpages/"));
		});
	});
		// load topbar menu from root page
   $('#bio_topbarMenu').load("../cvlayout/data/topbarMenu.html #topbar", function() { 	
		$('#bio_topbarMenu').find('a').each(function(){
			$(this).attr("href", $(this).attr("href").replace("../", "./"));
		});
	});
	// load topbar menu from content pages
	$('#topbarMenu').load("../../cvlayout/data/topbarMenu.html #topbar", function() {
		var fullPath = window.location.pathname;
		var idxOfFileName = fullPath.lastIndexOf("/")+ 1;
		// file name calling this load - use this to set selection active
		var fileNameID = "#" + fullPath.substring(idxOfFileName, fullPath.indexOf(".htm")) +"_menuID";
		// list for project name containing calling file - use this to set selection active
		var proj_ulID = "#" + fullPath.substring(fullPath.indexOf("cvpages/")+ 8, idxOfFileName-1) + "_list";
		// make subheading active
		$(proj_ulID).addClass("active");
		if(!fileNameID.includes("portfolio")){
			// make LI active for actual page
			$(fileNameID).addClass("active");
		}	
	});
})
$(document).ready(function(){

    //var currentYear = (new Date).getFullYear();
    //$('.footer').html('<p>Copyright ' + currentYear + ', Global Rate Management.</p>');

    // ### Add footer background with globe
    var bgBottom = {
        init: function(){
            var elFooterBg = $('<div id="footerBg"></div>');
            $('body').append(elFooterBg);
        },
        winResize: function(){
            var winH = $(window).height();
            var elFooter = $('#footerBg');
            if(winH >= 450){
                $(elFooter).show();
            }else{
                $(elFooter).hide();
            }
        }
    };

    var pageReStructure = {
        logoDiv: $('div#grmLogo'),
        navDiv: $('div.nav'),
        init: function(){
            this.linkHome = $(this.navDiv).children('ul').find('li').eq(0).attr('id', 'navHome');

            if($(this.navDiv).length > 0){
                this.addSections('topLinks')
                $(pageReStructure.linkHome[0]).appendTo(pageReStructure.sectionTopLinks);
                $('<li id="navContacts"><a class="contacts" href="/contact">Contacts</a></li>').appendTo(pageReStructure.sectionTopLinks);
                $('<li id="navPatients"><a class="patients" href="/patient">Patients</a></li>').appendTo(pageReStructure.sectionTopLinks);
            }
        },
        addSections: function(section){
            if(section === 'topLinks'){
                $(this.logoDiv).after('<ul id="stTopLinks"></ul>')
                this.sectionTopLinks = $('ul#stTopLinks');
            }
        }
    };

    var linkMarker = {
        pgTitle: $(document).attr('title'),
        init: function(){
            //links
            this topLinks = $('ul#stTopLinks');
            this.navHome = topLinks.find('li#navHome');
            this.navContacts = topLinks.find('li#navContacts');
            this.navPatients = topLinks.find('li#navPatients');

            this.markLink(this.pgTitle);
        },
        markLink: function(title){
            console.log(title);
        }
    };


    bgBottom.init();
    bgBottom.winResize();
    pageReStructure.init();
    linkMarker.init();

    $(window).resize(bgBottom.winResize);

    if($('#login').length){
    	//At login page
    	var divLogin = $('#login');
    	divLogin.children('.inner').css({
    		'display': 'inline-block',
			'margin-right': '20px'
    	});
    	var homeLogo = $('<img id="splashimg" src="http://help.nuehealth.com/grm/images/logo-big-vert.png">');
    	divLogin.before(homeLogo);
    	homeLogo.css({
    		'margin-left':'40px',
    		'float':'left'
    	});
    }else{
    	//NOT at login page
    	$('body').css({
    		'background-position': '0px -70px'
    	});
    	$('#grmLogo').html('<a href="/"><img src="http://help.nuehealth.com/grm/images/logo-small.png"></a>')
    				 .css({
    				 	'height': '107px'
    				 });
    	$('.nav').css({
    		'padding-left': '120px'
    	});
    }

    

});
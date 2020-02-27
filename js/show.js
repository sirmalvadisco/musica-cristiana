  $(document).ready(function() {
$('a.active-chords').click(function() {
    $("section.section-1").toggleClass("lyrcs-display");
    $("section.section-1").toggleClass("lyrcs-display-none");
    $("section.section-2").toggleClass("chords-display-none");
    $("section.section-2").toggleClass("chords-display");
});
        });


/*
 $("#US_toggle").click(function(){      
      if($("#US_toggle .ui-flipswitch").hasClass('ui-flipswitch-active')){  
		$("div.ui-content").addClass('black-mode');
        $("div.conquistadores").addClass('black-mode');
		$("a.list, a.listcqs").addClass('list-black-mode');
		$("p, span.chord").addClass('letter-black-mode');
		$("a.btn-back-fixed").addClass('btn-black-mode ui-alt-icon');
		$("div#mypanel").addClass('black-mode');
		$(".degrade").removeClass('degrade-1').addClass('degrade-2');
      }else{
        $("div.ui-content").removeClass('black-mode');
		$("div.conquistadores").removeClass('black-mode');
		$("a.list, a.listcqs").removeClass('list-black-mode');
		$("p, span.chord").removeClass('letter-black-mode');
		$("a.btn-back-fixed").removeClass('btn-black-mode ui-alt-icon');
		$("div#mypanel").removeClass('black-mode');
		$(".degrade").removeClass('degrade-2').addClass('degrade-1');
      }
    }); */

 $("#US_toggle, #US_toggle2").click(function(){        
		$("div.ui-content").toggleClass('black-mode');
        $("div.conquistadores").toggleClass('black-mode');
		$("a.list, a.listcqs").toggleClass('list-black-mode');
		$("p, span.chord").toggleClass('letter-black-mode');
		$("a.btn-back-fixed").toggleClass('btn-black-mode ui-alt-icon');
		$("div#mypanel").toggleClass('black-mode');
		$(".degrade").toggleClass('degrade-1').toggleClass('degrade-2');
    });


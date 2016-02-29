var flag =0;
$(document).ready(function(){

    $("button.toggle-image").click(function(){
        $(".imageShow").toggle();
    });

    $("button.show-image").click(function(){
        $(".imageShow").show();
    });

    $("button.hide-image").click(function(){
        $(".imageShow").hide();
    });

    $("button.fadeIn-image").dblclick(function(){
        $(".imageFade").fadeTo("slow", 1.0);
        $(".imageFade").fadeIn();
    });

    $("button.fadeOut-image").dblclick(function(){
        $(".imageFade").fadeOut();
    });

    $("button.fadeTo-image").dblclick(function(){
        $(".imageFade").fadeTo("slow", 0.5);
    });

    $("button.fadeToggle-image").dblclick(function(){
        $(".imageFade").fadeToggle();
    });

    $(".hoverImage").mouseenter(function() {
      console.log("mouseenter");
      if(flag==0){
        $(".hoverImage").animate({ marginLeft: "+=200px" }, 1000);
        flag = 1;
      }else{
        $(".hoverImage").animate({ marginLeft: "-=200px" }, 1000);
        flag = 0;
      }

    });

    $(".hoverImage").mouseleave(function() {
      console.log("mouseleave");
      $(".hoverImage").stop();
    });

});

$(document).keypress(function(key){
  //console.log(key.keyCode);
	if(key.keyCode == 102){
    $(".fade1").fadeOut(3000).fadeIn(1000).fadeOut(2000);
    $(".fade2").fadeOut(2000).fadeIn(2000).fadeOut(2000);
    $(".fade3").fadeOut(1000).fadeIn(3000).fadeOut(2000);
	}
});

$(document).keydown(function(key){
	if(key.keyCode == 65){
		$('.hoverImage')
			.animate({marginLeft:"+=200px"},200)
			.animate({marginLeft:"-=200px"},200)
			.animate({marginLeft:"+=200px"},200)
			.animate({marginLeft:"-=200px"},200)
	}
});

var counter = 1;
$('button.addRow').click(function(event){
    counter++;
    var newRow = jQuery('<tr>'+
      '<td class="tdclass" contenteditable="true">&nbsp;</td>'+
      '<td class="tdclass" contenteditable="true">&nbsp;</td>'+
      '<td class="tdclass" contenteditable="true">&nbsp;</td>'+
      '<td class="tdclass" contenteditable="true">&nbsp;</td>'+
      '<td><button class="btn btn-sm btn-primary deleteRow">Delete row</button></td>'+
      '</tr>');
    $('table.contactDetails').append(newRow);
});

$(document).on('click', 'button.deleteRow', function () {
     $(this).closest('tr').remove();
     return false;
 });

var flag = false;
$(document).keydown(function(key){
 	flag = (key.keyCode==18);
    $("td").mouseenter(function(){
      if(flag){
          $(this).css("background-color", "Blue");
 			    $(this).css("color","Red");
        }
 		});

 		$("td").mouseleave(function(){
      $(this).css("background-color", "white");
 			$(this).css("color","Black");
 		});
});

$(document).keyup(function(key){
 	if(key.keyCode==18){
 		flag = false;
 	}
});


//
// $(".tdclass").mouseenter(function() {
//    var me = this;
//    console.log("inside td");
//
//    $(document).keydown(function(key) {
//      //if(key.keyCode == 18){
//        $(me).css("background-color", "blue");
//        $(me).css("color", "red");
//      //}
//   });
//
// }, function() {
//   console.log('indise iufsd');
//     // unbind the keydown handler on mouseleave
//   $(document).unbind("keydown");
//
//   $(this).css("background-color", "white");
//   $(this).css("color", "black");
//
// });
//

// <tr><td><input type = "text"></input></td><td><input type = "text"></input></td><td><input type = "text"></input></td><td><input type = "text"></input></td><td><button class="btn btn-sm btn-primary">Delete row</button></td></tr>

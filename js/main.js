//create variables
listCount = 0;

$(document).ready(function(){

// $("ol").on("click","li",function(){
//
// });


//add click listeners to buttons
$("#inputButton").on('click',function(){
  var listElement = $("#inputText").val();
  //add li element to ol and buttons
  $("#toDoListOl").append("<li><span>"+listElement+"</span><button type='button' class='edit'>Edit</button><button type='button' class='remove'>Remove</button></li>");
  listCount +=1;
  console.log("list count= "+listCount);
  //add listener to ol
  addListener();
  updateCounter();
});

$("#clearList").on('click',function(){
  console.log("Clear list");
  $("li").remove();
  listCount = 0;
  updateCounter();
});

$("#clearComplete").on('click',function(){

  for (i=listCount-1;i>=0;i--){
    console.log("Reaching");
    if ($("li").eq(i).hasClass("done")){
      $("li").eq(i).remove();
      listCount-=1;
      updateCounter();
      console.log("i ="+i+", list element"+$("li").eq(i).val());
    }
  }
});

function addListener(){

  //Remove click listeners from li's
  $('ol').off('click',"li>span");
  //Add click listeners to li's
  $("ol").on('click','li>span',function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    //Toggle class -Change this
    console.log("cuantas veces span");

    $(this).parent().toggleClass("done");
  });

  //Event loop --> read about

  //Remove all click listeners
  $("ol").off("click","li .edit");
  //add listener to internal buttons
  $("ol").on("click","li .edit",function(ev){
    // $(this).parent().children().css("visibility","hidden");
    ev.preventDefault();
    ev.stopPropagation();
    //alt
    $(this).parent().children().css("display","none");

    $(this).parent().append("<form><input id='inputEdit' type='text' placeholder='Your edit here'></form>");


    $(this).siblings("form").submit(function(ev){
      event.preventDefault();
          var newText = $(this).parent().children("form").children("input").val();
          console.log(newText);
          $(this).parent().children().css("display","none");
          //change span text
          $(this).parent().children("span").text(newText);
          // $(this).parent().children().css("visibility","visible");
          $(this).parent().children().css("display","inline");
          $(this).parent().children("form").remove(); //what happens with remove method that it stops the code?
    });

    console.log("Edit clicked");
  });

  $("li .remove").on("click",function(){
    $(this).parent().remove();
    listCount -=1;
    updateCounter();
  });
}
function updateCounter(){
  $("p>span").text(listCount);
}


});

//Add click listeners to li elements
//toggle classes (done) turn gray

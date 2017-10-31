//create variables
listCount = 0;

$(document).ready(function(){

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

  // Remove all list elements when clicked
$("#clearList").on('click',function(){
  $("li").remove();
  listCount = 0;
  updateCounter();
});

 //Clear completed list elements when clicked
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

 //With this function we add click  listeners to the li elements added
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

  //Remove all click listeners before adding new ones
  $("ol").off("click","li .edit");
  
  //add listener to internal buttons
  $("ol").on("click","li .edit",function(ev){
    
    ev.preventDefault();
    ev.stopPropagation();
    
    //Hide elements that are not the edit input when in edit mode
    $(this).parent().children().css("display","none");
    //Add element to the ol
    $(this).parent().append("<form><input id='inputEdit' type='text' placeholder='Your edit here'></form>");
  
    //Function for 
    $(this).siblings("form").submit(function(ev){
      event.preventDefault();
          var newText = $(this).parent().children("form").children("input").val();
          $(this).parent().children().css("display","none");
          //change span text
          $(this).parent().children("span").text(newText);
          $(this).parent().children().css("display","inline");
          $(this).parent().children("form").remove();
    });

    console.log("Edit clicked");
  });

  //Remove signle element from the li when the remove button is clicked
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


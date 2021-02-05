//Check of Specific to do by Clicking.
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete to do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type= 'text']").keypress(function(event){
    if(event.which === 13){
        //Taking new todo from text input
       let todoText = $(this).val(); 
       $(this).val("");
       //create new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
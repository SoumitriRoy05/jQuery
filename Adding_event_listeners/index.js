$("h1").click(function()
{
    $("h1").css("color","purple");
})

//using js
for(var i=0;i<5;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
{
    document.querySelector("h1").style.color="purple";
})
}

//using jQuery
$("button").click(function()
{
    $("h1").css("color","purple");
});

$("input").keypress(function(event)
{
    console.log(event.key);
});


$(document).keypress(function(event)
{
    $("h1").text(event.key);
});

$("h1").on("mouseover", function()
{
  $("h1").css("color","purple");  
});
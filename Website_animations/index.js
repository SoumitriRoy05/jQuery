$("button").on("click",function()
{
    $("h1").fadeToggle();
});

$("button").on("click",function()
{
    $("h1").slideUp();
});

$("button").on("click",function()
{
    $("h1").slideToggle();
});

$("button").on("click", function()
{
    $("h1").animate({opacity:0.5})
});

$("button").on("click", function()
{
    $("h1").animate({margin:"20%"});
});

$("button").on("click", function()
{
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});
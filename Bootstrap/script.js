"use strict"
/* 
//jquery syntax
$(document).ready(function() {});
//alternatively:
$(function () {
    $("#btn1").hide(2000).show(2000).fadeOut(2000).fadein(3000); //postoji i fadeToggle
    $("#btn2").hide(2000).show(1000)
    $("#btn3").slideUp(2000).slideDown(300);
});
 */
//button shenanigans 
/* 
$(function () {
    $(".red:first-child").css({color:"red", fontWeight:"bold"});
});

$(function () {
    $("#btn1").html("gumbicyyyyy1");
})

$(function () {
    $("#btn1").on("click", function(){
        $(".col-sm-4:last-child").slideToggle(300);
    });

    $("#btn2").on("mouseover",function(){
        $(".col-sm-4:nth-child(2)").slideToggle(300);
    });
});
 */

$(".panel-button").on("click", function () {
    const panelId = $(this).attr("data-panel-class");
    console.log(this);
    alert(panelId);
    $("." + panelId).toggle();
});
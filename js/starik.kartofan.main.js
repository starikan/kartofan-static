"use strict"

window.mapsInstance = [];
window.opt = new Options();        // Options


// Foundation
$(document).foundation({
    live_validate : true,
});

$("#kf_mainLayout").foundation({
    live_validate : true,
});


document.oncontextmenu = function(){ return false };

console.log($("#kf_mainLayout").height());

// ********** ONLINE/OFFLINE EVENT **********

if (window.navigator.onLine != undefined){
    window.addEventListener('online',  function(){
        console.log("online");
        noty({text: loc("offline:online"), type: "error"});            
    });
    window.addEventListener('offline', function(){
        console.log("offline");
        noty({text: loc("offline:offline"), type: "error"});
    });
 }

// ********** ONRESIZE **********
// TODO: этот ресайз сделать чтобы действовал на фрейм когда встроено в окно
window.onresize = function() {
    console.log("resize");

    opt.updateInterfacePanelsPosition();

    // Maps
    $.each(mapsInstance, function(i, v){
        v.refreshMapAfterResize();
    });

    // TODO: сделать все в модальном окне
    // Fast Notes
    var $fastNotes = $("#fastNotes");
    if ($fastNotes.is(':visible')){
        var $containerMaps = $("#kf_mapsContainer");
        var offset = $containerMaps.offset();
        var newOffset = {
            top: offset.top + $containerMaps.height() * 0.02,
            left: offset.left + $containerMaps.width() * 0.02,
        }
        $fastNotes.offset(newOffset);

        try {
            CKEDITOR.instances.fastNotes_textarea.resize( $containerMaps.width() * 0.96, $containerMaps.height() * 0.96);
        } catch(e) {}
    }

 };
 
// ********** CLOCK **********
(function clockloop(){
    var currentTime = new Date ( );

    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );

    // Pad the minutes and seconds with leading zeros, if required
    currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    // // Choose either "AM" or "PM" as appropriate
    // var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

    // // Convert the hours component to 12-hour format if needed
    // currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

    // // Convert an hours component of "0" to "12"
    // currentHours = ( currentHours == 0 ) ? 12 : currentHours;

    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;

    // Update the time display
    getElementsByClass("infoMenuTime")[0].innerHTML = currentTimeString;

    requestAnimFrame(clockloop);
 })();



$(document).ready(function () {





    $("#rightarrow").on('mouseover', function () {
        console.log("hay");
        document.getElementById('yo').scrollLeft += 20;

        interval = setInterval(function () {
            var pos = $("#contain").scrollLeft();
            console.log('yo');
            $("#contain").animate({ scrollLeft: pos + 400 }, "fast");

        },10);
    }).on('mouseout', function () {
        clearInterval(interval);
    })
    ;
});






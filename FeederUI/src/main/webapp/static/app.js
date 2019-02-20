var app = app || {};

$(function () {
   /* $("#sendMessage").click(function(evt) {
        var msg = $("#message").val();

        $.ajax({
            type: "POST",
            url: "geofeeder",
            contentType: "application/json",
            data: msg
        }).done(function(data1){
        	alert("Message sent successfully");
           $(data1);
        }).fail(function(data1){
        	alert("Message can not be sent or it is empty.");
            $(data1);
        });
    });*/
    
    $("#clear").click(function(evt) {
        $("#message").val('');
    });
});
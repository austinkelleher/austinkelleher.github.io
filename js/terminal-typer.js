function generateTypedEle(prop, val) {
    return "<div style='padding-left:3em;'>" + prop + ": " + val + "</div>";
}

$(function(){
    $("#terminal-begin-text").html("Last login: " + new Date().toUTCString() + " on ttys006 <br /> Austins-MacBook-Pro:~ austin$");

    $("#vi-begin-text").typed({
        cursorChar: "",
        contentType: 'html',
        strings: ['vi austin.js'],
        typeSpeed: 0
    });

    var typedEles = [
        "module.exports = {",
            generateTypedEle('name', "'austin kelleher',"),
            generateTypedEle('profession', "'software engineer',"),
            generateTypedEle('email', "<a style='text-decoration:none !important;' href='mailto:a@alk.im'>'a@alk.im',</a>"),
            generateTypedEle('github', "<a style='text-decoration:none !important;' href='http://github.com/austinkelleher' target='_blank'>'github.com/austinkelleher',</a>"),
            generateTypedEle('twitter', "<a style='text-decoration:none !important;' href='http://twitter.com/austinkelleher' target='_blank'>'@austinkelleher',</a>"),
            generateTypedEle('resume', "<a style='text-decoration:none !important;' href='docs/Austin-Kelleher-Resume.pdf' target='_blank'>'Austin-Kelleher-Resume.pdf'</a>"),
        "};"
    ];

    var completeTyped = 0;

    setTimeout(function() {
        $("#vi-file-name").text('-- INSERT --');

        (function typeEle() {
            $("#typed-elements").append("<div id='element-" + completeTyped + "' class='element'></div>");
            $("#element-" + completeTyped).typed({
                cursorChar: "",
                contentType: 'html',
                strings: [typedEles[completeTyped]],
                typeSpeed: 0,
                onStringTyped: function() {
                    completeTyped++;
                    typeEle();
                }
            });
        }());
    }, 1200);

    $("#window").draggable({
        handle: "#toolbar"
    });
});

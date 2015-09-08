function generateTypedEle(prop, val) {
    return "<div style='padding-left:3em;'>" + prop + ": " + val + "</div>";
}

$(function(){
    $("#terminal-begin-text").html("Last login: " + new Date().toUTCString() + " on ttys006 <br /> Austins-MacBook-Pro:~ austin$");

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

    async.series([
        // Begin typing out `vi austin.js` after waiting 1.5s
        function(callback) {
            setTimeout(function() {
                $("#vi-begin-text").typed({
                    cursorChar: "",
                    contentType: 'html',
                    strings: ['vi austin.js'],
                    typeSpeed: 0,
                    onStringTyped: function() {
                        callback();
                    }
                });
            }, 1500);
        },

        // Show the initial vi text on the terminal denoting that a new file
        // has been created
        function(callback) {
            setTimeout(function() {
                $("#vi-begin-text").hide();
                $("#terminal-begin-text").hide();
                $("#vi-file-name").text('"austin.js" [New File]');
                callback();
            }, 500);
        },

        // vi insert mode and type each element out to it
        function(callback) {
            var indexTypedEles = typedEles.length - 1;
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
                            if (++completeTyped > indexTypedEles) {
                                callback();
                            } else {
                                typeEle();
                            }
                        }
                    });
                }());
            }, 1500);
        }
    ]);

    $("#window").draggable({
        handle: "#toolbar"
    });
});

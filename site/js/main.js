$("h1").velocity("transition.perspectiveUpIn", 900);

$(".call-to-action").mouseenter(function () {
    $(this)
        .velocity("callout.shake");
});

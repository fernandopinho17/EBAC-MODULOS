$(document).ready(function(){
    $('submit').click(function() {
        $('li').slideDown();
    })

    $('li').on('submit', function() {
        console.log("submit");
        e.preventDefault();
    })
})




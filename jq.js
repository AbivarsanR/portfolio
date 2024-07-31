

function sidebarexit(){
    $("#header1").hide();
    $("#enter").show();
}

function enter(){

    $("#header1").css('display','flex');
    $("#enter").hide();
}

document.addEventListener('touchstart', function() {
    document.getElementById('header1').style.display = 'none';
});

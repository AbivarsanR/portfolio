

function sidebarexit(){
    $("#header1").hide();
    $("#enter").show();
}

function enter(){
    $("#nav").css('display','flex');
    $("#header1").css('display','flex');
    $("#enter").hide();
}

function hide(){
    $("#nav").css('display','none');
    $("#header1").css('display','none');
    $("#enter").show();
}

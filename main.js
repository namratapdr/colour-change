function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var colors ='#';
    for (var i =0 ; i<6;i++)
    {
        colors += letters[Math.floor(Math.random()*16)];
    }

    return colors;
}
  $("#button").click(function(){
        $("#button").css("background-color", "#034970");
        $("body").css("background-color",getRandomColor());
        $("p").html("hexCode: " + getRandomColor());
      });

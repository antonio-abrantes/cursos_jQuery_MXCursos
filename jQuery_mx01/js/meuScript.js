/**
 * Created by Antonio on 15/05/2017.
 */

$("#texto").click(
    function(){
        $("#texto").hide("slow", function(){
            document.getElementById("voltar").innerHTML = "Voltar";
        });
    }
);

$("#voltar").click(
    function(){
        $("#texto").slideDown("slow", function(){
            document.getElementById("voltar").innerHTML = "";
        });
    }
);

$(":button").click(function(){
    $("p").slideToggle();
    $(".classes").css("background-color", "red", "font-family", "Verdana");
    document.getElementById("id1").style.backgroundColor = "blue";
    document.getElementById("id1").style.color = "yellow";
});


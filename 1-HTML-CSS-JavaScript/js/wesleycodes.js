$( document ).ready(function(){
  $("#img2").hide();
  $("#img1").mouseenter(function(){
    $("#img2").show();
    $("#img1").hide();
    $("#img2").mouseleave(function(){
        $("#img2").hide();
        $("#img1").show();

    });
  });
});

$('#New_1').mouseenter(function() {
  $('.background').css('background-image','url(../gifs/right_face.gif)');
  });

  $('#New_1').mouseleave(function() {
    $('.background').css('background-image','url(../gifs/front_face_3)');
    });

$('#Old_1').mouseenter(function() {
      $('.background').css('background-image','url(../gifs/right_face.gif)');
      });
    
  $('#Old_1').mouseleave(function() {
        $('.background').css('background-image','url(../gifs/front_face_3)');
        });

function project1() {
  window.location.replace("https://www.leahmarieinc.net/");
}

function project2() {
  window.location.replace("Abc_home.html");
}

function linkedIn() {
  window.location.replace("https://www.linkedin.com/in/wesley-john-morgan-8381715b/");
}

function gitHub() {
  window.location.replace("https://www.linkedin.com/in/wesley-john-morgan-8381715b/");
}

document.getElementById("New_1").onmouseover = function() {revealProject1(), changeColor(), leftFace()};
document.getElementById("New_1").onmouseout = function() {hideP1(), backWhite()};

function revealProject1() {
  document.getElementById("leahSalon").style.opacity = "1";
}

function hideP1() {
  document.getElementById("leahSalon").style.opacity = "0";
}

document.getElementById("Old_1").onmouseover = function() {revealProject2(), changeColor(), leftFace()};
document.getElementById("Old_1").onmouseout = function() {hideP2(), backWhite()};

function revealProject2() {
  document.getElementById("oldSalon").style.opacity = "1";
}

function hideP2() {
  document.getElementById("oldSalon").style.opacity = "0";
}



function changeColor() {
  document.body.style.backgroundColor = "";
}

function leftFace() {
  document.getElementsByClassName("background").style.backgroundImage = 'url(../gifs/right_face.gif)';
}

function backWhite() {
  document.body.style.backgroundColor = "white";
}
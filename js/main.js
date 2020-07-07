$(document).ready(function () {

  $('#web_score_circle').circleProgress({
    value:  0.95,
    size: 300,
    fill: '#177cf2',
    thickness: 5,
    lineCap: "round",
    emptyFill: "rgba(23, 124, 242, .2)" ,
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar_percentage').html(Math.round(95 * progress) + '<i>%</i>');
  });
  
  $('#graphic_score_circle').circleProgress({
    value:  0.85,
    size: 300,
    fill: '#008000',
    thickness: 10,
    lineCap: "round",
    emptyFill: "rgba(0, 128, 0, .3)" ,
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar_percentage').html(Math.round(85 * progress) + '<i>%</i>');
  });
  
  $('#digital_score_circle').circleProgress({
    value:  0.75,
    size: 300,
    fill: '#FF5535',
    thickness: 15,
    lineCap: "round",
    emptyFill: "rgba(255, 85, 53, .3)" ,
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.progressbar_percentage').html(Math.round(75 * progress) + '<i>%</i>');
  });

});
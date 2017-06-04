$(document).ready(function(){
  function fullscreen(){
    $('.bx-wrapper, .bx-viewport, .bxslider, .background').css({
      height: $(window).height()
    });
  }

  $('.bxslider').bxSlider({
    auto: true,
    pause: 3500,
    infiniteLoop: true,
    pager: false,
    controls: false,
    mode: 'fade',
    adaptiveHeight: false,
    adaptiveHeightSpeed: 500
  });

  fullscreen();
  $(window).resize(function() {
    fullscreen();
  });

  function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    var $table = $('#tour-dates table tbody');
    if (allTextLines.length > 1) {
      for (var i = 1; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        addRow($table, data);
      }
    } else {
      addRow($table, ['TBA', 'TBA']);
    }
  }

  function addRow(table, data) {
    var $tr = $('<tr>');
    $tr.append($('<td>').text(data[0]));
    $tr.append($('<td>').text(data[1]));
    table.append($tr);
  }

  $.ajax({
    type: "GET",
    url: "../tour-dates.csv",
    dataType: "text",
    success: function(data) { processData(data); },
    error: function(err) { console.log(err); }
  });

});

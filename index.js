$("#search-input").keyup(function(event){
    if(event.keyCode == 13){
        $("#search-button").click();
    }
});


// Search for streamer function

function search() {
  var input = $('#search-input').val();
  var twitchUrl = 'https://wind-bow.glitch.me/twitch-api/users/' + input + '?callback=?';
  var list = $('#streamer-list');
  var $offline = 'style="background-color: #EC6F55;"';
  var $online = 'style="background-color: green;"';
  
  // ajax for getting online status
  $.ajax({
    url: 'https://wind-bow.glitch.me/twitch-api/streams/' + input + '?callback=?',
    dataType: 'jsonp',
    success: function(a) {
      if (a.stream == null) {
        var status = $offline;
      } else {
        var status = $online;
      }
      
      // ajax for adding div with info
      $.ajax({
        url: twitchUrl,
        dataType: 'jsonp',
        success: function(data) {
          var streamerUrl = 'https://go.twitch.tv/' + data.name;
          list.prepend('<div ' + status + ' class="stream-list">' + '<a href="' + streamerUrl + '">' + '<img src="' + data.logo + '" class="streamer-icon">' + data.display_name  + '<br/><p id="online-status">' + data.bio + '</p></a></div>');
        }
      });
    }
  });
}


// freeCodeCamp stream
$.ajax({
  url: 'https://wind-bow.glitch.me/twitch-api/streams/freecodecamp?callback=?',
  dataType: 'jsonp',
  success: function(a) {
    var input = $('#search-input').val();
    var twitchUrl = 'https://wind-bow.glitch.me/twitch-api/users/freecodecamp?callback=?';
    var list = $('#streamer-list');
    var $offline = 'style="background-color: #EC6F55;"';
    var $online = 'style="background-color: green;"';
    
    if (a.stream == null) {
      var status = $offline;
    } else {
      var status = $online;
    }
    
    // ajax for adding div with info
    $.ajax({
      url: twitchUrl,
      dataType: 'jsonp',
      success: function(data) {
        var streamerUrl = 'https://go.twitch.tv/' + data.name;
        list.append('<div ' + status + ' class="stream-list">' + '<a href="' + streamerUrl + '">' + '<img src="' + data.logo + '" class="streamer-icon">' + data.display_name  + '<br/><p id="online-status">' + data.bio + '</p></a></div>');
      }
    });
  }
});


// noobs2ninjas stream
$.ajax({
  url: 'https://wind-bow.glitch.me/twitch-api/streams/noobs2ninjas?callback=?',
  dataType: 'jsonp',
  success: function(a) {
    var input = $('#search-input').val();
    var twitchUrl = 'https://wind-bow.glitch.me/twitch-api/users/noobs2ninjas?callback=?';
    var list = $('#streamer-list');
    var $offline = 'style="background-color: #EC6F55;"';
    var $online = 'style="background-color: green;"';
        
    if (a.stream == null) {
      var status = $offline;
    } else {
      var status = $online;
    }
        
    // ajax for adding div with info
    $.ajax({
      url: twitchUrl,
      dataType: 'jsonp',
      success: function(data) {
        var streamerUrl = 'https://go.twitch.tv/' + data.name;
        list.append('<div ' + status + ' class="stream-list">' + '<a href="' + streamerUrl + '">' + '<img src="' + data.logo + '" class="streamer-icon">' + data.display_name  + '<br/><p id="online-status">' + data.bio + '</p></a></div>');
      }
    });
  }
});


// cretetion stream
$.ajax({
  url: 'https://wind-bow.glitch.me/twitch-api/streams/cretetion?callback=?',
  dataType: 'jsonp',
  success: function(a) {
    var input = $('#search-input').val();
    var twitchUrl = 'https://wind-bow.glitch.me/twitch-api/users/cretetion?callback=?';
    var list = $('#streamer-list');
    var $offline = 'style="background-color: #EC6F55;"';
    var $online = 'style="background-color: green;"';
    
    if (a.stream == null) {
      var status = $offline;
    } else {
      var status = $online;
    }
    
    // ajax for adding div with info
    $.ajax({
      url: twitchUrl,
      dataType: 'jsonp',
      success: function(data) {
        var streamerUrl = 'https://go.twitch.tv/' + data.name;
        list.append('<div ' + status + ' class="stream-list">' + '<a href="' + streamerUrl + '">' + '<img src="' + data.logo + '" class="streamer-icon">' + data.display_name  + '<br/><p id="online-status">' + data.bio + '</p></a></div>');
      }
    });
  }
});
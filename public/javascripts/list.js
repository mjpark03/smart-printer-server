

$(document).ready( function () {

  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/users/tweet/friends',
    dataType: 'application/json',
    headers: {
      'Content-Type': 'application/json'
    },
    complete: function(data) {
        var users = JSON.parse(data.responseText).users;
        $.each(users, function(key, value) {
          var tag = '<a href="#" class="list-group-item">' + value.name + '</a>';
          $('#friends').append(tag)
        });
    }
  });

});
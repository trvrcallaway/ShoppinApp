$(document).ready(function() {

  $('#add').click(function(event) {
      var txtbox = document.getElementById('active');
      var txtval = txtbox.value;
      event.preventDefault();

      $('<li class="items"></li>').appendTo('#list').html('<input type="checkbox"><span>' + txtval + '</span><button type="button" class="fa fa-trash delete"></button>');

      document.getElementById('active').value = '';
  })

  $('#list').on('click', '.fa-trash', function(e){e.preventDefault(); $(this).parent().remove()});

});

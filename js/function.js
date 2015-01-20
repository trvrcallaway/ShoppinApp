$(document).ready(function() {

  $('#active').keydown(function (e){
    if(e.keyCode == 13){
      event.preventDefault();
      $('#add').click();
    }
  })

  $('#add').click(function(event) {
      var txtbox = document.getElementById('active');
      var txtval = txtbox.value;
      event.preventDefault();

      if(!$.trim($('#active').val())) {
        alert('Enter something, man.');
      } else {

      $('<li class="items"></li>').appendTo('#list').html('<input type="checkbox"> <span>' + txtval + '</span><button type="button" class="fa fa-trash delete"></button>');

      document.getElementById('active').value = '';
      };
    });

  $('#list').on('click', '.fa-trash', function(e){e.preventDefault(); $(this).parent().remove()});

});

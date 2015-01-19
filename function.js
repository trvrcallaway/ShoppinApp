$(document).ready(function() {

//Enter
  $('#active').keyup(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      $('#add').click();
    };
  });

//Add items
  $('#add').click(function(){
    var txtbox = document.getElementById('#active');
    var txtval = txtbox.value;
    event.preventDefault();

    if(!$trim($('#active').val())) {
      alert('Enter something');
    } else {
        $('<li class="items"></li>').appendTo('#list').html('<div class="box"></div><span>' + txtval + '</span><')
    }
  }

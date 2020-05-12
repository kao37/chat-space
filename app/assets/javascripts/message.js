$(function(){ 
  function buildHTML(message){
  if ( message.image ) {
    var html =
    `<div class="message">
        <div class="mainr-message">
          <div class="main-message__user-name">
            ${message.user_name}
          </div>
          <div class="main-message__time">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
        <img src=${message.image} >
      </div>`
    return html;
  } else {
    var html =
      `<div class="message">
        <div class="main-message">
          <div class="main-message__user-name">
            ${message.user_name}
          </div>
          <div class="main-message__time">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`
    return html;
  };
}
$('#new_message').on('submit', function(e){
e.preventDefault();
var formData = new FormData(this);
var url = $(this).attr('action')
$.ajax({
  url: url,
  type: "POST",
  data: formData,
  dataType: 'json',
  processData: false,
  contentType: false
})
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('.box').animate({'height' : '200px'});
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    $('#message_content').val('')
    $('form')[0].reset();
  })
  .fail(function(){
    alert('error');
  });
  return false;
});
}); 

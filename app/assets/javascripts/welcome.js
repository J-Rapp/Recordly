if (typeof Recordly === 'undefined') {
  Recordly = {};
}

$(document).ready(function() {
  Recordly.dynamicRegistration();
})

Recordly.dynamicRegistration = function() {
  var registrationButton = $('#registration')

  registrationButton.click(function(event){
    event.preventDefault();
    alert('Was gonna build the first AJAX call!');
  })
}

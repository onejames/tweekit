
$("body").append('On Page Load');

tweekIt();

function tweekIt() {
  if ( $( "#xdebug-var-dump" ).length ) {
    $( "#xdebug-var-dump" ).css('text-align', 'left');
  }
}


document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('dev');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {

      tweekIt();

    });
  }, false);
}, false);

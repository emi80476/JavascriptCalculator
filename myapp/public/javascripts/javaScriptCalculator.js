var calculatedValue = "";
var added = "";

function showOnInput(clicked_id){
  added += clicked_id
  $('#inputBar').val(calculatedValue + added);
  //calculatedValue += clicked_id;
}

function autoResizeDiv()
{
  document.getElementById('container').style.height = window.innerHeight +'px';
}

$('#equalTo').on('click', function(){
  var cal = calculatedValue + added;
  $('#inputBar').val(eval(cal));
  calculatedValue = eval(cal);
});
$('#AC').on('click', function(){
  calculatedValue = "";
  added = "";
  $('#inputBar').val("");
});

window.onresize = autoResizeDiv;
autoResizeDiv();


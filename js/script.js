
  var elem = document.querySelector('select');
  var instance = M.FormSelect.init(elem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });


function send_data() {
    // let student_num = document.getElementById('student_num').value;
    // let university = document.getElementById('select_uni').value;
    document.getElementById("disappear1").style.display = 'none';
    document.getElementById("student_num").style.display = 'none';
    document.getElementById("disappear2").style.display = 'none';
    document.getElementById("select_uni").style.display = 'none';
    remove_button();


}
function remove_button() {
    document.getElementById("button").style.display = 'none';
    document.getElementById("appear").style.display = 'block';

}




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

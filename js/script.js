
  var elem = document.querySelector('select');
  var instance = M.FormSelect.init(elem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });


function send_data() {
    let student_num = document.getElementById('student_num').value;
    let university = document.getElementById('select_uni').value;
    console.log(student_num, university);
}



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

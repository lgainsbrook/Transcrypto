function send_transcript() {
    document.getElementById('student_num').innerHTML = "Student Number: " + 193755 + "Student Name: Mariya Mannes";
}

function upload_file() {

}

function search_completed() {
    let completed_requests = [
        {Name: "Billy Jean",
        Id: 1234},
        {Name: "Sweet Caroline",
        Id: 5678}
    ];
    let query = document.getElementById('search_query').value;
    document.getElementById('search_query').value = "";
    for (let i=0; i < completed_requests.length; i++) {
        if (completed_requests[i].Id == parseInt(query)) {
            document.getElementById('query_result').innerHTML = "Name: " + completed_requests[i].Name + " ID: " + completed_requests[i].Id;
            break;
        }
        else if (completed_requests[i].Id != parseInt(query)) {
            document.getElementById('query_result').innerHTML = "No students found.";
        }
    }
}

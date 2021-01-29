//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyAxEZiileOdjdyhJxp6EyCGj5I_Q_odA0s",
    authDomain: "naisha-schatbot-kwynji.firebaseapp.com",
    databaseURL: "https://naisha-schatbot-kwynji.firebaseio.com",
    projectId: "naisha-schatbot-kwynji",
    storageBucket: "naisha-schatbot-kwynji.appspot.com",
    messagingSenderId: "18542455388",
    appId: "1:18542455388:web:a70ae9c8d3901323ed9499"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName")
document.getElementById("userName").innerHTML = "welcome : " + userName
function addRoom() {
      Room_name = document.getElementById("roomName").value;

      firebase.database().ref("/").child(Room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", Room_name)

      window.location = "kwitter_page.html"
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectRoomName (this.id)'>#" + Room_names + "</div> <hr>"
                  document.getElementById("output").innerHTML += row
      //End code
            });
      });
}
getData();
function logout() {
      localStorage.removeItem("userName")
      localStorage.removeItem("Room_name")
window.location="kwitter.html"
}
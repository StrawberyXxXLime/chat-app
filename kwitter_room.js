
var firebaseConfig = {
    apiKey: "AIzaSyDBh5GK9AH6SkYwTfIiPz5Ps9YT2dNqhNc",
    authDomain: "kwitter-caa00.firebaseapp.com",
    databaseURL: "https://kwitter-caa00-default-rtdb.firebaseio.com",
    projectId: "kwitter-caa00",
    storageBucket: "kwitter-caa00.appspot.com",
    messagingSenderId: "1051288174535",
    appId: "1:1051288174535:web:344cb0a041c7552ec7a3e2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome "+ user_name+"!"
function addRoom(){
      room_name=document.getElementById("roomname").value;
      firebase.database().ref("/"). child(room_name).update ({
            purpose:"addingRoomName"
      });
      localStorage.setItem("roomname", room_name)
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_name = childKey;
      //Start code
        row="<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)'>#"+Room_name+"</div><hr>";
        document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("roomname", name)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("roomname")
      window.location="index.html"
}
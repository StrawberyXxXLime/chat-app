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
 username=localStorage.getItem("username")
 roomname=localStorage.getItem("roomname")
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });
    document.getElementById("msg").value=" "
}   







function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
name=message_data['name']
message=message_data['message']
like=message_data['like']
nameDisplay = "<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
messageDisplay="<h4 class='message_h4'>"+message+"</h4>";
likeButton= "<button class='btn btn-info' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'> ";
thumbsUp="<span class='glyphicon glyphicon-thumbs-up'> like;"+like+"</span> </button> <hr>";
display=nameDisplay+messageDisplay+likeButton+thumbsUp 
document.getElementById("output").innerHTML+=display
//End code
      } });  }); }
getData();
function updateLike (message_id){
      button_id=message_id
      likes=document.getElementById(button_id).value;
      updatedLike=Number(likes)+1
      console.log(updateLike)
      firebase.database().ref(room_name).child(message_id).update({
            like:updateLike
      });
      
}
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("roomname")
      window.location="index.html"
}
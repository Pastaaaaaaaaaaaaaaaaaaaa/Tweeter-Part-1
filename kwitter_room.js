
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBXNN9vTIGcwyoKkgc-l0a6FOh3B4zKytk",
      authDomain: "kwitterapp-fb8ae.firebaseapp.com",
      databaseURL: "https://kwitterapp-fb8ae-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-fb8ae",
      storageBucket: "kwitterapp-fb8ae.appspot.com",
      messagingSenderId: "563607596218",
      appId: "1:563607596218:web:e3ce2fc6c28a25f0ef2683"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    name_variable=localStorage.getItem("user_name");
    document.getElementById("user_name_welcome").innerHTML = "Welcome, "+name_variable;

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("trendingrooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      one_row="<div class='room_name' id='"+Room_names+"' onclick='click_to_room()'>"+Room_names+"</div><hr>";
      document.getElementById("trendingrooms").innerHTML +=one_row;
      });});}
getData();

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Added room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="room.html";
}
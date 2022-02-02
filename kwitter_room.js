// Your web app's Firebase configuration
 var  firebaseConfig = {
      apiKey: "AIzaSyDiGSH56-WcGHIVZMlADcHW1cyN1xyxuxk",
      authDomain: "kwitter-60df3.firebaseapp.com",
      databaseURL: "https://kwitter-60df3-default-rtdb.firebaseio.com",
      projectId: "kwitter-60df3",
      storageBucket: "kwitter-60df3.appspot.com",
      messagingSenderId: "735547428777",
      appId: "1:735547428777:web:b13d5b405ad6a10bc13eb8"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name") ;
document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";

function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "index.html";
}

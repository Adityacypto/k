
//ADD YOUR FIREBASE LINKS HERE
firebaseConfig = {
      apiKey: "AIzaSyBxlhWOROPhbaGY9X868ceZ-VlZf4zsB8Y",
      authDomain: "slaughter-race-3723a.firebaseapp.com",
      projectId: "slaughter-race-3723a",
      storageBucket: "slaughter-race-3723a.appspot.com",
      messagingSenderId: "531076062307",
      appId: "1:531076062307:web:7f3366494b50a36fef6c56",
      measurementId: "G-W5M8DMQ8DK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");

document.getElementById("username").innerHTML= "Welcome" + user_name + "!!";
window.location = "kwitter_room.html";


   function addroom(){

        roomname= document.getElementById("roomname").value;
        firebase.database().ref("/").child(roomname).update({
              purpose : "add roomname"
        });

        localStorage.setItem("roomname",roomname);
        window.location = "kwitter_room.html";

   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names );
      row =  "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("roomname",name);
      window.location= "kwitter_page.html";
}

function logout(){
       
      localStorage.removeItem("username");
      window.location= "index.html";
}
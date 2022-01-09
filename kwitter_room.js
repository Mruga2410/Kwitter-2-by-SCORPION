
var firebaseConfig = {
      apiKey: "AIzaSyBW19JkV4LUmgGdntJC10K26aBekz7rjjU",
      authDomain: "kwitter-webapp-project-94.firebaseapp.com",
      databaseURL: "https://kwitter-webapp-project-94-default-rtdb.firebaseio.com",
      projectId: "kwitter-webapp-project-94",
      storageBucket: "kwitter-webapp-project-94.appspot.com",
      messagingSenderId: "919315275094",
      appId: "1:919315275094:web:3320853cd94f32635ccaf7"
    };
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
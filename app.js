var firebaseConfig = {
  apiKey: "AIzaSyDrKglX2PWzqLpSCV70wBCh-kIHG3ZJsP8",
  authDomain: "scrap-rid.firebaseapp.com",
  databaseURL: "https://scrap-rid-default-rtdb.firebaseio.com/",
  projectId: "scrap-rid",
  storageBucket: "scrap-rid.appspot.com",
  messagingSenderId: "173308541211",
  appId: "1:173308541211:web:d0c826890bfb1e26aebbbe",
  measurementId: "G-JN9XV406KR",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));

  alert("Signed Up");
}

function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));
}

function signOut() {
  auth.signOut();
  alert("Signed Out");
}

auth.onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
    alert("Active User " + email);
    window.location = "Menu/index.html";
  }
});

firebase
  .auth()
  .setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function () {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

function DoViewIFRAME(tid1, tid2, tid3) {
  document.getElementById(tid1).style.display = "none";
  document.getElementById(tid2).style.display = "";
  document.getElementById(tid3).style.display = "";
}
function DoHideIFRAME(tid1, tid2, tid3) {
  document.getElementById(tid1).style.display = "none";
  document.getElementById(tid2).style.display = "none";
  document.getElementById(tid3).style.display = "";
}

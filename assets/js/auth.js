import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

    const firebaseConfig = {						//Firebase App Data required for API
        apiKey: "AIzaSyCYsOexRfQS1eCKXf4UXasY1N8HQ-ckWF0",
        authDomain: "telemetry-upload.firebaseapp.com",
        databaseURL: "https://telemetry-upload-default-rtdb.firebaseio.com",
        projectId: "telemetry-upload",
        storageBucket: "telemetry-upload.appspot.com",
        messagingSenderId: "56055561946",
        appId: "1:56055561946:web:9c0ace75c3352ac0df6fe3",
        measurementId: "G-T3VQ6Q4R3M"
    };

    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
        });

        getRedirectResult(auth)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access Google APIs.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
      
          // The signed-in user info.
          const user = result.user;
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
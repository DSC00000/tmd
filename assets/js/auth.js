import "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";

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

    // 1) Create a new firebaseui.auth instance stored to our local variable ui
    const ui = new firebaseui.auth.AuthUI(firebase.auth())

    // 2) These are our configurations.
    const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl) {
        return true
        },
        uiShown() {
        document.getElementById("loader").style.display = "none"
        },
    },
    signInFlow: "popup",
    signInSuccessUrl: "signedIn",
    signInOptions: [
        //firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // Additional login options should be listed here
        // once they are enabled within the console.
    ],
    }

    // 3) Call the 'start' method on our ui class
    // including our configuration options.
    ui.start("#firebaseui-auth-container", uiConfig)

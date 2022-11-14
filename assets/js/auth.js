// import "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// import "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
// import "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";

var firebase = require('firebase');
var firebaseui = require('firebaseui');


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
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    // 2) These are our configurations.
    var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          //firebase.auth.GithubAuthProvider.PROVIDER_ID,
          //firebase.auth.EmailAuthProvider.PROVIDER_ID,
          //firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
      };
            
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
      
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { GoogleAuthProvider, signInWithPopup, getAuth, initApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

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

const app = initializeApp(firebaseConfig);		//Standard database initialization
const database = getDatabase(app);

/* ------- Authentication ------- */
    function toggleSignIn() {
    if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        document.getElementById('quickstart-oauthtoken').textContent = token;
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
            // If you are using multiple auth providers on your app you should handle linking
            // the user's accounts here.
        } else {
            console.error(error);
        }
        });
    } else {
        firebase.auth().signOut();
    }
    //document.getElementById('quickstart-sign-in').disabled = true;
    }

    function initApp() {
    // Listening for auth state changes.
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
        document.getElementById('quickstart-sign-in').textContent = 'Sign out';
        document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
        } else {
        // User is signed out.
        document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
        document.getElementById('quickstart-sign-in').textContent = 'Sign in with Google';
        document.getElementById('quickstart-account-details').textContent = 'null';
        document.getElementById('quickstart-oauthtoken').textContent = 'null';
        }
        document.getElementById('quickstart-sign-in').disabled = false;
    });

    document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
    }

/* --------- Real-time Database ----------- */
    getData.addEventListener('click',(e) => {		//Start the script on click for query button
        $('#dataTable td').remove();

        const dbRef = ref(database, `production/`);	//Look specifically at the production collection in the DB

        onValue(dbRef, (snapshot) => {				//Go through each production child and assign it to a single variable
            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();

                var row = "<tr><td>"    + childData.Machine_Serial                        	+ "</td><td>"
                                        + childData.Lifetime_Hours_On                     	+ "</td><td>"
                                        + childData.Lifetime_Hours_Running_Product        	+ "</td><td>"
                                        + childData.Lifetime_Louver_Count                 	+ "</td><td>"
                                        + childData.Lifetime_Louvers_Drilled              	+ "</td><td>"
                                        + childData.Lifetime_Louvers_Notched              	+ "</td><td>"
                                        + childData.Lifetime_Louvers_Pinned               	+ "</td><td>"
                                        + childData.Lifetime_Louvers_Stapled_to_Tilt_Rod  	+ "</td><td>"
                                        + childData.Lifetime_Stile_Count 					+ "</td><td>"
                                        + childData.Lifetime_Stile_Linear_Feet 				+ "</td></tr>";
                
                $(row).appendTo(dataTable)    		//Take the child variable and stick in the HTML table/DOM                        
            });
        }, {onlyOnce: true});						//Do the above one time
    });
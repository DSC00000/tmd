import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { getAuth, signInWithPopup, getRedirectResult, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
            
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
    const provider = new GoogleAuthProvider();

/* --------AUTHENTICATION --------- */
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
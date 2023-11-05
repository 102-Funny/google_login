import {initializeApp} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyAD5enlnyxoQ3j6aAuSN857Ohj75FwXF7c",
    authDomain: "membership-system-4f4f8.firebaseapp.com",
    databaseURL: "https://membership-system-4f4f8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "membership-system-4f4f8",
    storageBucket: "membership-system-4f4f8.appspot.com",
    messagingSenderId: "737147849360",
    appId: "1:737147849360:web:94e5a446393bbdfb8ae615",
    measurementId: "G-9YR3MYPJEB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'zh_tw'
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener('click', function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window.location.href = "logged.html";
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})
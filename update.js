import {initializeApp} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {getAuth,GoogleAuthProvider,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"


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

const user = auth.currentUser;

function updateUserProfile(user){
    const username = user.displayName;
    const useremail = user.email;
    const userProfilePicture = user.photoURL;
    console.log(useremail);

    document.getElementById("username").textContent = username;
    document.getElementById("useremail").textContent = useremail;
    document.getElementById("profilepicture").src = userProfilePicture;
}

onAuthStateChanged(auth, (user) => {
    if(user){
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    }else{
        alert("create account and login")
    }
})
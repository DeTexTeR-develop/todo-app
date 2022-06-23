var firebaseConfig = {
    apiKey: "AIzaSyALEz1anVx-P_VdPU2GldX4abByYdpCWWM",
    authDomain: "to-do-list-a645d.firebaseapp.com",
    projectId: "to-do-list-a645d",
    storageBucket: "to-do-list-a645d.appspot.com",
    messagingSenderId: "883963362578",
    appId: "1:883963362578:web:9492b0736ff09d5e6547cb",
    measurementId: "G-B9M1P77ZTQ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
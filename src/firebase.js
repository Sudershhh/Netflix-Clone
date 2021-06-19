import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB_iJBTqGy7T1WdRsQhs-TZ_v5rxqBbw1A",
    authDomain: "netflix-clone-177b2.firebaseapp.com",
    projectId: "netflix-clone-177b2",
    storageBucket: "netflix-clone-177b2.appspot.com",
    messagingSenderId: "254108017196",
    appId: "1:254108017196:web:ef4c640c5f7796f2bb2789"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth();

export {auth};


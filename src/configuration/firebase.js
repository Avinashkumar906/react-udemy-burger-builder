import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAyeQ-Hpx2SvXgtGWhRdFN9tr0SsJN80V8",
  authDomain: "react-6302e.firebaseapp.com",
  databaseURL: "https://react-6302e-default-rtdb.firebaseio.com",
  projectId: "react-6302e",
  storageBucket: "react-6302e.appspot.com",
  messagingSenderId: "1060056256042",
  appId: "1:1060056256042:web:561c2d1b2093e0aeb07d53",
  measurementId: "G-BQXS0RHZJK"
}

const app = () => firebase.initializeApp(config);

export default app;
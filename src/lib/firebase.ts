import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas",
  authDomain: "timecapsule-app.firebaseapp.com",
  projectId: "timecapsule-app",
  storageBucket: "timecapsule-app.appspot.com",
  messagingSenderId: "581326886241",
  appId: "1:581326886241:web:c441b7f3e33b833e7s9e2c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
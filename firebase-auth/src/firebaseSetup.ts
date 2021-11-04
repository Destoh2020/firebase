import { getAuth } from '@firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAQoPIXnoZ4QTGvUwq0z5w0cHY0FIv-uLw',
  authDomain: 'fir-auth-tut-9d861.firebaseapp.com',
  projectId: 'fir-auth-tut-9d861',
  storageBucket: 'fir-auth-tut-9d861.appspot.com',
  messagingSenderId: '29962571501',
  appId: '1:29962571501:web:9593a122e74db0bf1306e4',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

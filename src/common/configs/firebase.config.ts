// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBWgAFb2GlQWXKX3knIFYP8V5UhLw2AGsA',
  authDomain: 'kb-blog-30ec4.firebaseapp.com',
  projectId: 'kb-blog-30ec4',
  storageBucket: 'kb-blog-30ec4.appspot.com',
  messagingSenderId: '1050116099856',
  appId: '1:1050116099856:web:9ce388b3c2e80fba3c5f95',
  measurementId: 'G-BK28YT0ZQQ',
};

export const firebase_app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(firebase_app);

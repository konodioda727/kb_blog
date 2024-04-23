// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBWgAFb2GlQWXKX3knIFYP8V5UhLw2AGsA',
  authDomain: 'kb-blog-30ec4.firebaseapp.com',
  projectId: 'kb-blog-30ec4',
  storageBucket: 'kb-blog-30ec4.appspot.com',
  messagingSenderId: '1050116099856',
  appId: '1:1050116099856:web:9ce388b3c2e80fba3c5f95',
  measurementId: 'G-BK28YT0ZQQ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

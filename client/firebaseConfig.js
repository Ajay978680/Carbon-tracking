import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import Constants from 'expo-constants'

const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.apiKey,
  authDomain: Constants.expoConfig.extra.authDomain,
  projectId: Constants.expoConfig.extra.projectId,
  storageBucket: Constants.expoConfig.extra.storageBucket,
  messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
  measurementId: Constants.expoConfig.extra.measurementId,
  appId: Constants.expoConfig.extra.appId,
}

initializeApp(firebaseConfig)
export const auth = getAuth();
const app=initializeApp(firebaseConfig);
export default app; 
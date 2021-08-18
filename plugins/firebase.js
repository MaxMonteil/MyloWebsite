import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const apps = getApps()

const firebaseApp = apps.length
  ? apps[0]
  : initializeApp({
      apiKey: process.env.FIREBASE.APIKEY,
      authDomain: process.env.FIREBASE.AUTHDOMAIN,
      databaseURL: process.env.FIREBASE.DATABASEURL,
      projectId: process.env.FIREBASE.PROJECTID,
      storageBucket: process.env.FIREBASE.STORAGEBUCKET,
      appId: process.env.FIREBASE.APPID,
    })

const db = getFirestore(firebaseApp, {})

export { db }

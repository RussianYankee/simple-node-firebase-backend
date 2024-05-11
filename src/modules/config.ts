import fs from 'fs'
const firebaseConfig = JSON.parse(fs.readFileSync('config/firebase-config.json', 'utf8'))
export default firebaseConfig

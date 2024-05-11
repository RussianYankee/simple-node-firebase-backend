import express, {Express} from "express"
import cors from 'cors'
import firestore from "./modules/firebaseApp";
import {collection, getDocs} from 'firebase/firestore'

const app: Express = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.post('/post-something', (request, response) => {
    console.log('[server]: post request handling...')
    console.log(`[server]: data received ${JSON.stringify(request.body)}`);
})

app.get('/get-something', (request, response) => {
    console.log('[server]: fetching data...')
    getData().then(() => console.log('[server]: data received'))
})

async function getData() {
    const data = await getDocs(collection(firestore, 'payments'))
    data.forEach((doc) => console.log(doc.id, '=>', doc.data()))
}

app.listen(port, () => console.log(`Listening to port ${port}`))

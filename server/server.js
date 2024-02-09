const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const action = require('./actions');
const port = process.env.PORT || 3001;
const app = express();

// parsery 
// Content-type: application/json
app.use(bodyParser.json());

// fix cors
app.use(cors());

// routes - obsługa requestów
app.use('/', router);

app.use(bodyParser.json());

// zwykły GET
app.get('/aa', (req, res) => {
  res.json({message: "Odpowiedź z serwera"});
})

router.get('/getMedia', action.getMedia)

router.get('/getLocations', action.getLocations)

router.get('/getJobs', action.getJobs)

router.post('/postNewsData', action.postNewsData)

// server
app.listen(port, () => {
  console.log(`serwer słucha... http://localhost:${port}`);
});


import bodyParser from 'body-parser';
import cors from 'cors'
import router from './src/routes/route'
import database from './src/models/database';

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({origin: true}));



app.use("/", router);
const port = 4000;

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

database()
    .then(async () => {
        console.log("database server is connected");
        http.listen(port, () => {
            console.log(`Serveur lancé sur le port ${port} ...`);
        });
    });




export default app;

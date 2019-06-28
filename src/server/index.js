
import Player from "./controllers/Player";
import Games from"./controllers/Games" ;
import Game from "./controllers/Game";

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
    res.sendFile(__dirname + '../client/public/index.html');
});
let games = new Games()
let gameTest = new Game('test','me')
let gameTest2 = new Game('test2','you')
let gamesList = games.getNameList()

games.addGame(gameTest)
games.addGame(gameTest2)

io.on('connection', function(socket){
    console.log('a user connected', socket.id);
    socket.emit('start', 'Un utilisateur est connecté')

    socket.on('getGamesList',()=>{
        gamesList = games.getNameList()
        socket.emit('GamesList', gamesList)
    });

    socket.emit('newPlayer', (data)=>{
        console.log('newPlayer', data)
    });

    socket.on('userData', (login, room) =>{

        gamesList = games.getNameList()

        socket.join(room)
        const gameExist = gamesList.find(element =>element.name === room)
        if(gameExist){

            const gameData = games.getGameData(room)
            const newPieces = gameData.getPiece()
        
            gameData.addPlayer(login)
            const allSpectres = gameData.getAllSpectres()
            console.log('createGame players', gameData.getPlayersNb())
            io.to(room).emit('receiveSpectres', room, allSpectres )

            socket.emit('playerStatus', {
                name:room,
                status:'follower',
                login,
                newPieces,
                spectres:allSpectres
            })

        }else{

            let createGame = new Game(room, login)
            createGame.addPlayer(login, true)
            console.log('createGame players', createGame.getPlayersNb())

            createGame.createNewPieces(7)
            createGame.setStatus('ready')
            createGame.addSpectre(login,[0,0,0,0,0,0,0,0,0,0])

            const nvxPlayer = new Player(login, createGame)

            games.addGame(createGame)

            const newPieces = createGame.getPiece()

            gamesList = games.getNameList()

            socket.emit('playerStatus', {
                name:room,
                status:'master',
                login,
                newPieces,
                spectres:[{
                    name:login,
                    spectre:[0,0,0,0,0,0,0,0,0,0]
                }]
            })

        }
        socket.emit('GamesList', games.getNameList())

    });

    socket.on('gameStatus', (data) =>{

        console.log('**********************$cdata dans gameStatus', data)

        games.udpdateData(data.room, 'status', data.status, data.login)


        io.to(data.room).emit('status',data.status)

        if(data.status === 'STOP_GAME'){

            socket.emit('GamesList', games.getNameList())
        }

    })

    socket.on('resquestShape', (room) =>{

        const roomData = games.getGameData(room)
        roomData.createNewPieces(7)
        const newCreatedPieces = roomData.getPiece()
        io.to(room).emit('getNewPieces', newCreatedPieces, room )

    });

    socket.on('sendSpectre', (spectre,room, login) =>{

        const gameExist = gamesList.find(element =>element.name === room)

        if(gameExist){

            const gameData = games.getGameData(room)
            console.log('room', room)
            console.log('GameData', gameData)
            console.log('login', login)
            console.log('spectre', spectre)
            gameData.addSpectre(login, spectre)

            const allSpectre = gameData.getAllSpectres()

            io.to(room).emit('receiveSpectres', room,allSpectre )
        }
    })
});

http.listen(8000, function(){
    console.log('listening on *:3000');
});
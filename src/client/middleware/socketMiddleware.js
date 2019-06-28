import {
    DATA_FROM_SOCKET,
    START_GAME,
    PAUSE_GAME,
    UNPAUSE_GAME,
    SEND_LOGIN_ROOM,
    MANAGE_PIECES_STOCK,
    NEW_PIECES_FROM_SOCKET,
    SEND_SPECTRE,
    RECEIVE_NEW_SPECTRE,
    GET_GAMES_LIST,
    GET_PLAYER_STATUS,
    SEND_START_GAME,
    GAME_OVER, STOP_GAME
} from "../actions";

export default function socketMiddleware(socket) {
    return ({dispatch}) => next => (action) => {

        if(!socket){
            socket.emit('connection', 'hello je suis connecte')
        }

        socket.on('start', (data) => {
            console.log('dans start', data)
        });

        socket.on('status', (data) => {
            const action = {
                type: DATA_FROM_SOCKET,
                data
            }
            return next(action);
        });
        socket.on('GamesList', (data) => {
            console.log('hello', data)
            return next({type: "GET_GAME_LIST", games:data});

        });

        const {
            type,
            room,
            user
        } = action;

        console.log('MIDDLEWARE', action)
        switch(type) {
            case UNPAUSE_GAME:
            case PAUSE_GAME: {

                const data = {
                    type,
                }
                socket.emit('gameStatus', data);
                break;
            }
            case SEND_LOGIN_ROOM: {
                socket.emit('userData', action.login, action.room)
                break;
            }
            case MANAGE_PIECES_STOCK: {

                if (action.piecesStock.length === 5) {

                    socket.emit('resquestShape', action.room);
                    socket.on('getNewPieces', (newCreatedPieces, room) => {
                        const action = {
                            type: NEW_PIECES_FROM_SOCKET,
                            newCreatedPieces,
                            room
                        }
                        return next(action);
                    });
                }
                break;
            }
            case GET_GAMES_LIST: {
                socket.emit('getGamesList')
                socket.on('GamesList', (data) => {

                    action = {...action, games:data};

                    return next(action);

                });
                break;
            }
            case GET_PLAYER_STATUS: {
                socket.on('playerStatus', (data) => {

                    console.log('playerStatus', data)
                    action = {...action, data};

                    return next(action);

                });
                break;
            }
            case SEND_SPECTRE: {

                socket.emit('sendSpectre',action.spectre, action.room, action.login)
                socket.on('receiveSpectres', (room, allSpectres) => {
                    const action = {
                        type: RECEIVE_NEW_SPECTRE,
                        room,
                        allSpectres
                    }
                    return next(action);
                });
                break;
            }
            case GAME_OVER : {
                const data = {
                    status:'GAME_OVER',
                    room
                }

                socket.emit('gameStatus', data)
            }
            case STOP_GAME :{
                const data = {
                    status: 'STOP_GAME',
                    room: user.room,
                    login: user.login

                }

                socket.emit('gameStatus', data)
            }
            case SEND_START_GAME : {
                const data = {
                    status:'START_GAME',
                    room
                }

                socket.emit('gameStatus', data)
            }
            default:
        }
        return next(action);
    }
}
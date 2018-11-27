import { startGame, newTetriminos, rotate, moveDown, moveLeft, moveRight, lastMove } from '../redux/actions/index.js';
import gameConstants from '../redux/constants/gameConstants.js';
const { shapeTypes } = gameConstants;
// import {asset, NativeModules} from 'react-360';
// const {AudioModule} = NativeModules;
// const deleteSound = new Audio('../../../public/sounds/delete.mp3');


export const moveTetriminos = (direction) => (
    function (dispatch, getState) {
        const { gameStatus, activeTetriminos, currentTetriminos, nextTetriminos } = getState();
        let state = getState();
        let edge = null;
        
        if (gameStatus === 'PAUSED' || gameStatus === 'GAME_OVER' )
            return ;

        edge = checkCollision(activeTetriminos, currentTetriminos.pos)
        if (edge.xb === false && state.lastMove) {
            deleteLine(activeTetriminos);
            return dispatch(newTetriminos(currentTetriminos, nextTetriminos));
        }

        switch(direction) {
            case 'down':
                if (edge.xb === true)
                    dispatch(moveDown());
                else
                    dispatch(lastMove());
                break ;
            case 'right':
                if (edge.yr === true)
                    dispatch(moveRight());
                break ;
            case 'left':
                if (edge.yl === true)
                    dispatch(moveLeft());
                break ;
            case 'rotate':
                if (edge.xt && edge.xb && edge.yl && edge.yr)
                    dispatch(rotate())
                break;
            default:
                return ;
        }
    }
);

export const rotateTetriminos = (cx, cy, x, y) => {
    const radians = (Math.PI / 180) * 90,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = Math.round((cos * (x - cx)) + (sin * (y - cy)) + cx),
        ny = Math.round((cos * (y - cy)) - (sin * (x - cx)) + cy);
    return [nx, ny];
}

export const getNewGrid = (grid, currentTetriminos) => {
    let index = shapeTypes.indexOf(currentTetriminos.name) + 1;
    let newGrid = grid.map((row, i, arr) => {
        row.map((sq, j) => {
            if (currentTetriminos.shape[i][j] === index) 
                arr[i][j] = index;
            return sq;
        });
        return row;
    });
    return newGrid;
}

export const loadGame = () => {
    console.log('About to start the game...');
    return (dispatch, getState) => {
        dispatch(startGame());
        const handleMove = (e) => {
            e.preventDefault();
            switch(e.keyCode) {
                case 37:
                    dispatch(moveTetriminos('left'));
                    break ;
                case 38:
                    dispatch(moveTetriminos('rotate'));
                    break;
                case 39:
                    dispatch(moveTetriminos('right'));
                    break ;
                case 40:
                    dispatch(moveTetriminos('down'));
                    break ;
                default:
                    break ;
            }
        }
        setInterval(() => {
            dropTetriminos(dispatch, getState);
        }, 1000);
        window.addEventListener('keydown', handleMove);
    }
};

export const checkCollision = (arr, pos) => {
    let edge = {xt: true, xb: true, yl: true, yr: true};
    
    for (let i = 0; i < 4; i++) {
        let pointX = {x:pos[i].x + 1, y:pos[i].y};
        let pointYl = {x:pos[i].x, y:pos[i].y - 1};
        let pointYr = {x:pos[i].x, y:pos[i].y + 1};

        // For each point of my tetriminos I check if the next square is out of bound or if it is occupied and not a point of the current tetriminos
        if (pos[i].x <= 0)
            edge.xt = false;
        else if (pos[i].x >= 19 || (arr[pos[i].x + 1][pos[i].y] !== 0 && !pos.some(element => {return JSON.stringify(element) === JSON.stringify(pointX)})))
            edge.xb = false;
        else if (pos[i].y <= 0 || (arr[pos[i].x][pos[i].y - 1] !== 0 && !pos.some(element => {return JSON.stringify(element) === JSON.stringify(pointYl)})))
            edge.yl = false;
        else if (pos[i].y >= 9 || (arr[pos[i].x][pos[i].y + 1] !== 0 && !pos.some(element => {return JSON.stringify(element) === JSON.stringify(pointYr)})))
            edge.yr = false;
    }
    return edge;
}

export const dropTetriminos = (dispatch, getState) => {
    const { gameStatus } = getState();

    if (gameStatus !== 'PAUSED' && gameStatus !== 'GAME_OVER') {
        dispatch(moveTetriminos('down'));
    }
}

export const cling = (lineToDelete) => {
    let line = [...lineToDelete];
    console.log(line);
    for (let i = 0; i < 1000; i++) {
        if (i % 2 === 0)
            lineToDelete = [0,0,0,0,0,0,0,0,0,0];
        else
            lineToDelete = line;    
    }
    return line;
}

export const isLineDone = (gridLine) => {
    for (let i = 0; i < 10; i++) {
        if (gridLine[i] === 0)
            return false;
    }
    return true;
}

export const deleteLine = (grid) => {
    grid.map((row, i) => {
        if (isLineDone(row) === true) {
            grid.splice(i, 1);
            // deleteSound.play();
            grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }
        return grid;
    });
}
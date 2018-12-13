let initialGrid = Array(20).fill(0).map(() => Array(10).fill(0));
const newLine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export default {
    shapeTypes: [
        'straight', 'square', 'tee', 'leftGun', 'rightGun', 'leftSnake', 'rightSnake'
    ],
    tetriminos: {
        straight: {
            shape: [
                [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 8, 8, 8, 8, 0, 0, 0],
            ],
            initialPos: [{x:0, y:3}, {x:0, y:4}, {x:0, y:5}, {x:0, y:6}],
            pos: [{x:0, y:3}, {x:0, y:4}, {x:0, y:5}, {x:0, y:6}],
            oldPos: [{x:0, y:3}, {x:0, y:4}, {x:0, y:5}, {x:0, y:6}],
            ghost: [{x:19, y:3}, {x:19, y:4}, {x:19, y:5}, {x:19, y:6}],
            oldGhost: [{x:19, y:3}, {x:19, y:4}, {x:19, y:5}, {x:19, y:6}]
        },
        square: {
            shape: [
                [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
                [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 8, 8, 0, 0, 0, 0],
                [0, 0, 0, 0, 8, 8, 0, 0, 0, 0],
            ],
            initialPos: [{x:0, y:4}, {x:0, y:5}, {x:1, y:4}, {x:1, y:5}],
            pos: [{x:0, y:4}, {x:0, y:5}, {x:1, y:4}, {x:1, y:5}],
            oldPos: [{x:0, y:4}, {x:0, y:5}, {x:1, y:4}, {x:1, y:5}],
            ghost: [{x:18, y:4}, {x:18, y:5}, {x:19, y:4}, {x:19, y:5}],
            oldGhost: [{x:18, y:4}, {x:18, y:5}, {x:19, y:4}, {x:19, y:5}]
        },
        tee: {
            shape: [
                [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
                [0, 0, 0, 0, 3, 3, 3, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 8, 0, 0, 0, 0],
                [0, 0, 0, 0, 8, 8, 8, 0, 0, 0],
            ],
            initialPos: [{x:0, y:5}, {x:1, y:4}, {x:1, y:5}, {x:1, y:6}],
            pos: [{x:0, y:5}, {x:1, y:4}, {x:1, y:5}, {x:1, y:6}],
            oldPos: [{x:0, y:5}, {x:1, y:4}, {x:1, y:5}, {x:1, y:6}],
            ghost: [{x:18, y:5}, {x:19, y:4}, {x:19, y:5}, {x:19, y:6}],
            oldGhost: [{x:18, y:5}, {x:19, y:4}, {x:19, y:5}, {x:19, y:6}]
        },
        leftGun: {
            shape: [
                [0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
                [0, 0, 0, 4, 4, 4, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 8, 0, 0, 0, 0],
                [0, 0, 0, 8, 8, 8, 0, 0, 0, 0],
            ],
            initialPos: [{x:0, y:5}, {x:1, y:3}, {x:1, y:4}, {x:1, y:5}],
            pos: [{x:0, y:5}, {x:1, y:3}, {x:1, y:4}, {x:1, y:5}],
            oldPos: [{x:0, y:5}, {x:1, y:3}, {x:1, y:4}, {x:1, y:5}],
            ghost: [{x:18, y:5}, {x:19, y:3}, {x:19, y:4}, {x:19, y:5}],
            oldGhost: [{x:18, y:5}, {x:19, y:3}, {x:19, y:4}, {x:19, y:5}]
        },
        rightGun: {
            shape: [
                [0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 5, 5, 5, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 8, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 8, 8, 8, 0, 0, 0, 0],
            ],
            initialPos: [{x:0, y:3}, {x:1, y:3}, {x:1, y:4}, {x:1, y:5}],
            pos: [{x:0, y:3}, {x:1, y:3}, {x:1, y:4}, {x:1, y:5}],
            oldPos: [{x:0, y:3}, {x:1, y:3}, {x:1, y:4}, {x:1, y:5}],
            ghost: [{x:18, y:3}, {x:19, y:3}, {x:19, y:4}, {x:19, y:5}],
            oldGhost: [{x:18, y:3}, {x:19, y:3}, {x:19, y:4}, {x:19, y:5}]
        },
        leftSnake: {
            shape: [
                [0, 0, 0, 6, 6, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 6, 6, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 8, 8, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 8, 8, 0, 0, 0, 0],
            ],
            initialPos: [{x:0, y:3}, {x:0, y:4}, {x:1, y:4}, {x:1, y:5}],
            pos: [{x:0, y:3}, {x:0, y:4}, {x:1, y:4}, {x:1, y:5}],
            oldPos: [{x:0, y:3}, {x:0, y:4}, {x:1, y:4}, {x:1, y:5}],
            ghost : [{x:18, y:3}, {x:18, y:4}, {x:19, y:4}, {x:19, y:5}],
            oldGhost : [{x:18, y:3}, {x:18, y:4}, {x:19, y:4}, {x:19, y:5}]
        },
        rightSnake: {
            shape: [
                [0, 0, 0, 0, 7, 7, 0, 0, 0, 0],
                [0, 0, 0, 7, 7, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 8, 8, 0, 0, 0, 0],
                [0, 0, 0, 8, 8, 0, 0, 0, 0, 0],
            ],
            initialPos: [{x:0, y:4}, {x:0, y:5}, {x:1, y:3}, {x:1, y:4}],
            pos: [{x:0, y:4}, {x:0, y:5}, {x:1, y:3}, {x:1, y:4}],
            oldPos: [{x:0, y:4}, {x:0, y:5}, {x:1, y:3}, {x:1, y:4}],
            ghost: [{x:18, y:4}, {x:18, y:5}, {x:19, y:3}, {x:19, y:4}],
            oldGhost: [{x:18, y:4}, {x:18, y:5}, {x:19, y:3}, {x:19, y:4}]
        }
    },
    initialGrid,
    newLine,
    colors: ['white', 'red', '#00BCD4', 'green', 'orange', 'yellow', 'purple', 'brown', '#A74ACC']
};
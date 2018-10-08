const initialGrid = Array(20).fill(null).map(()=>Array(10).fill(null));

export default {
    shapesMapping: [
        'straight', 'square', 'tee', 'leftGun', 'rightGun', 'leftSnake', 'rightSnake'
    ],
    tetriminos: {
        straight: {
            shape: [
                [0,0,0,1,1,1,1,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
            ],
            color: 'red'
        },
        square: {
            shape: [
                [0,0,0,0,1,1,0,0,0,0]
                [0,0,0,0,1,1,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
            ],
            color: '#00BCD4'
        },
        tee: {
            shape: [
                [0,0,0,0,0,1,0,0,0,0]
                [0,0,0,0,1,1,1,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
            ],
            color: 'green'
        },
        leftGun: {
            shape: [
                [0,0,0,0,0,1,0,0,0,0]
                [0,0,0,1,1,1,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
            ],
            color: 'orange'
        },
        rightGun: {
            shape: [
                [0,0,0,1,0,0,0,0,0,0]
                [0,0,0,1,1,1,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
            ],
            color: 'yellow'
        },
        leftSnake: {
            shape: [
                [0,0,0,1,1,0,0,0,0,0]
                [0,0,0,0,1,1,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
            ],
            color: 'purple'
        },
        rightSnake: {
            shape: [
                [0,0,0,0,1,1,0,0,0,0]
                [0,0,0,1,1,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
                [0,0,0,0,0,0,0,0,0,0]
            ],
            color: 'brown'
        }
    },
    initialGrid
};
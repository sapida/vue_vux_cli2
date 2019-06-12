const app = {
    state: {
        direction: 'tip',       //tip或者swiper(点击返回还是滑动返回)
    },
    mutations: {
        SET_DIRECTION: (state, direction) => {
            state.direction = direction
        }
    },
}

export default app
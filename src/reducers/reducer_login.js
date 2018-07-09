export default function (state = null, action) {
    switch (action.type) {
        case ('GET_USER'):
            return {
                ...state,
                data: action.payload
            }
        default:
           return {...state}
    }
}
import * as Message from '../../redux/constants/message'
let initialState = Message.MSG_WELCOME
const message = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state]
    }
}
export default message
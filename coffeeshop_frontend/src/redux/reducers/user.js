import { FETCH_CREDENTIALS } from "../constants/type"

let initialState = {
    //credentials:chính là thông tin đăng nhập của user
    credentials: null
}
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CREDENTIALS:
            state.credentials = action.payload
            return { ...state }
        default: return state
    }
}
export default UserReducer
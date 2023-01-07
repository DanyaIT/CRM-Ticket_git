import { getLoadingUser, getAccessUser, getErrorUser } from "./userSlice";
import { fetchUser } from "../../api/userApi";

export const getUserProfile = () => async (dispatch) => {
    try {
        dispatch(getLoadingUser())
        const result = await fetchUser()
        if(result.user && result.user._id){
            return dispatch(getAccessUser(result.user))            
        }
        dispatch(getErrorUser('Пользователь не найден'))
    } catch (error) {
        dispatch(getErrorUser(error.message))
    }

}
import {
    userRegistrationIsLoading,
    userRegistrationSuccess, 
    userRegistrationError
} from './userRigistrationSlice'
import {createNewUser} from '../../api/userApi'

export const newUserRegistration = (formData) => async (dispatch) => {
    dispatch(userRegistrationIsLoading())
    try {
        const result = await createNewUser(formData)
        result.status === 'success' ? dispatch(userRegistrationSuccess(result.message))
        :dispatch(userRegistrationError(result.message))
    } catch (error) {
        dispatch(userRegistrationError(error.message))
    }
}
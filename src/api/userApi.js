import axios from 'axios'

const userUrl = 'http://localhost:5000/api/user/login'
export const userLogin =  formData => {
    return new Promise (async (resolve, reject) =>{
        try {
            const result = await axios.post(userUrl, formData)
            console.log(result)
            resolve(result.data)
            if(result.data.status === 'access'){
                sessionStorage.setItem('createJWT', result.data.createJWT)
                localStorage.setItem('crmSite', JSON.stringify({refreshJWT: result.data.refreshJWT}))
            }
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}
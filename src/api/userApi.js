import axios from 'axios'
const rootUrl = 'http://localhost:5000/api'
const loginUrl = rootUrl + '/user/login'
const userProfileUrl = rootUrl + '/user'
const logoutUrl = rootUrl + '/user/logout'
const newAccessTokentUrl = rootUrl + '/tokens'

export const userLogin =  formData => {
    return new Promise (async (resolve, reject) =>{
        try {
            const result = await axios.post(loginUrl, formData)
            resolve(result.data)
            if(result.data.status === 'access'){
                sessionStorage.setItem('createJWT', result.data.accessJWT)
                localStorage.setItem('crmSite', JSON.stringify({refreshJWT: result.data.refreshJWT}))
            }
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}

export const fetchUser = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const accessJwt = sessionStorage.getItem('createJWT')
            if(!accessJwt){
                reject('Токен доступа не найден!')
            }
            const result = await axios.get(userProfileUrl, {
                headers: {
                    authorization: accessJwt
                }
            })
            resolve(result.data)
        } catch (error) {
            reject(error)
        }
    })
}

export const userLogout = async() => {
    try {
        const accessJWT = sessionStorage.getItem('createJWT')
        await axios.delete(logoutUrl, {
            headers: {
                Authorization: accessJWT
            }
        })

    } catch (error) {
        console.log(error)
    }
}

export const fetchNewTokenAccess = () =>{
    return new Promise(async(resolve, reject)=>{
        try {
            const {refreshJWT} = JSON.parse(localStorage.getItem('crmSite'))
            if(!refreshJWT){
                reject('Токен не найден')
            }
            const result = await axios.get(newAccessTokentUrl, {
                headers:{
                    Authorization: refreshJWT
                }
            })
            if(result.data.status === 'success'){
                sessionStorage.setItem('createJWT', result.data.accessJWT)
            }
            resolve(true)
        } catch (error) {
           if(error){
            localStorage.removeItem('crmSite')
           }
            reject(false)
        }
    })
}
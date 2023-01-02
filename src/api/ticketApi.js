import axios from 'axios'


export const getAllTicket = () => {
    return new Promise(async (resolve, reject) =>{
        try {
            const result = await axios.get('http://localhost:5000/api/ticket',{
                headers:{
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVAZTQuY29tIiwiaWF0IjoxNjcyNjg5MzM4LCJleHAiOjE2NzI2OTI5Mzh9.1wuabJEMoKw8mSKgvzk4HkRwiC_MA-AMYKiaR9AHPhc'
                }
            })
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
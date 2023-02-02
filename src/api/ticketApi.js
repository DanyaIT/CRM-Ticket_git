import axios from 'axios'


export const getAllTicket = () => {
    return new Promise(async (resolve, reject) =>{
        try {
            const result = await axios.get('http://localhost:5000/api/ticket',{
                headers:{
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVAZTQuY29tIiwiaWF0IjoxNjczMDI0MzI2LCJleHAiOjE2NzMwMjc5MjZ9.M37tqcEfIb0cRPV6u-p-CpNYWliY1QJKW6efFWao4uQ'
                }
            })
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
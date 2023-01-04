import axios from 'axios'


export const getAllTicket = () => {
    return new Promise(async (resolve, reject) =>{
        try {
            const result = await axios.get('http://localhost:5000/api/ticket',{
                headers:{
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVAZTQuY29tIiwiaWF0IjoxNjcyODU1MDcwLCJleHAiOjE2NzI4NTg2NzB9.x6U6_Lj7Zow9Td1igWZMnq3yKQG3SRPQ-CxPgsI8YZg'
                }
            })
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
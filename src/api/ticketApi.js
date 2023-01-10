import axios from "axios";

const rootUrl = "http://localhost:5000/api/ticket/";
const closeTicketUrl = rootUrl + 'close-ticket/';

export const getAllTicket = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("createJWT");
      const result = await axios.get(rootUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSingleTicket = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("createJWT");
      const result = await axios.get(rootUrl + _id, {
        headers: {
          Authorization: accessJWT,
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};


export const updateReplyTicket = (_id, messageObj) => {
  return new Promise(async(resolve, reject) => {
    try {
      const result = await axios.put(rootUrl + _id, messageObj, {
        headers:{
          Authorization: sessionStorage.getItem('createJWT')
        }
      })
      resolve(result)
    } catch (error) {
      reject(error)
    }
  })
}

export const updateTicketStatusClosed = (_id) => {
  return new Promise(async(resolve, reject) => {
    try {
      const result = await axios.patch(closeTicketUrl + _id, {}, {
        headers: {
          Authorization: sessionStorage.getItem('createJWT')
        }
      })
      resolve(result)
    } catch (error) {
      console.log(error.message)
      reject(error)
    }
  })
}

export const createNewTicketInBD = (formData) => {
  return new Promise(async(resolve, reject) => {
    try {
      const result = await axios.post(rootUrl, formData, {
        headers:{
          Authorization: sessionStorage.getItem('createJWT')
        }
      })
      resolve(result.data)
    } catch (error) {
      reject(error)
    }
  })
}
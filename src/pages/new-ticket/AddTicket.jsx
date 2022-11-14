import React, {useState, useEffect} from "react";
import FormTicket from "../../components/formTicket/FormTicket";
import { shortText } from "../../utils/validation";

const AddTicket = () => {

const formType = {
  topic:'',
  date: '',
  description:''
}

const formTypeEr = {
  topic: false,
  date: false,
  description:false
}


const [formInfo, setFormInfo] = useState(formType)
const [formInfoEr, setFormInfoEr] = useState(formTypeEr)
  
const handleOnChange = (e)=>{
    e.preventDefault()
    const {name, value} = e.target
    setFormInfo({
      ...formInfo,
      [name]:value

    })

  }
const handleOnSubmit = async (e)=>{
e.preventDefault()
  const validTopic =  await shortText(formInfo.topic)

 setFormInfoEr({
    ...formTypeEr,
    topic: !validTopic
  })
}

useEffect(()=>{

},[formInfo,formInfoEr])

  return(
      <FormTicket formInfo = {formInfo} formInfoEr = {formInfoEr} handleOnSubmit = {handleOnSubmit} handleOnChange = {handleOnChange}/>
  );
};

export default AddTicket;

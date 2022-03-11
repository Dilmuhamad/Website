import React, {useState, useRef} from "react";
import Rasm from '../img/img.jpg'
import emailjs from 'emailjs-com'


    
export const Mailer=()=> {
        function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(
            "service_38rlw9i",
            "template_tbhv4wh",
            e.target,
            "user_Vnv6LuS4Opq6bk3ctvbXX"
        ).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err))
    }
    
const[inputValue, setInputValue]=useState("")
const inputRes=useRef(null)
    const onHandleClick=()=>{
        setInputValue('')
    }
    const onHandleChange=(Event)=>{
        setInputValue(Event.value)
    }
  return (
        <div className='mailer'>
            <div className="mail">
            <form onSubmit={sendEmail   }>
            <label htmlFor="">mail</label>
            <input type="email" name='name' value={inputValue} onChange={onHandleChange} />
            <label htmlFor="">password</label>
            <input type="password" name='name' value={inputValue} onChange={onHandleChange} /><br />
            <label htmlFor="">massage</label>
            <textarea name="massage" id="" cols="30" rows="10"  value={inputValue} onChange={onHandleChange} ></textarea>
            <input type="submit" value='submit' onClick={onHandleClick} className='inp2'/>
            </form>
            </div>
        </div>
    );
}

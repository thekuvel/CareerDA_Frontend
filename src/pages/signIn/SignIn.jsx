import { useState } from "react";
import { signInAPI } from "../../api/authentication.js";
import { useNavigate } from "react-router-dom";

function SignIn(){

    let navigate = useNavigate();

    let [userInput, setUserInput] = useState();

    function handleChange(e){
        e.preventDefault();
        setUserInput({
            ...userInput,
            [e.target.name]:e.target.value,
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        let data = await signInAPI(userInput)
        alert(data.msg)
        if(data.code){
            localStorage.setItem("token",data.token)
            navigate("/")
        }
    }

    return(
        <div className="flex justify-center">

            <form onSubmit={handleSubmit} className="w-[300px] flex flex-col gap-[20px]">

                <h1 className="text-center text-[36px]">Career Deopt Application</h1>

                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="email">Email</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="email" onChange={handleChange} required/>
                </div>

                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="password">Password</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="password" onChange={handleChange} required/>
                </div>

                <div className="flex justify-center">
                    <button className="p-[5px] border border-[#60B5FF] rounded-[5px] bg-[#60B5FF]">Sign in</button>
                </div>

            </form>
            
        </div>
    )
}

export default SignIn
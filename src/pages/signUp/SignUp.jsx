import { useState } from "react";
import { signUpAPI } from "../../api/authentication.js";
import { Link, useNavigate } from "react-router-dom";

function SignUp(){

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
        // console.log(userInput);
        let data = await signUpAPI(userInput);
        alert(data.msg)
        if(data.code){
            navigate("/signin")
        }
    }

    return(
        <div className="flex justify-center">

            <form onSubmit={handleSubmit} className="w-[300px] flex flex-col gap-[20px]">
                
                <h1 className="text-center text-[36px]">Career Deopt Application</h1>

                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="userType">User type</label>
                    <select name="userType" className="border border-[#D9D9D9] rounded-[5px]" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="jobSeeker">Job Seeker</option>
                        <option value="employer">Employer</option>
                    </select>
                    {/* <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="userType"/> */}
                </div>
                
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="email">Email</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="email" onChange={handleChange} required/>
                </div>

                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="password">Password</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="password" onChange={handleChange} required/>
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="p-[5px] border border-[#60B5FF] rounded-[5px] bg-[#60B5FF]">Sign up</button>
                </div>

                <div className="flex justify-center">
                    <Link className="" to="/signin">Sign In</Link>
                </div>

            </form>
            
        </div>
    )
}

export default SignUp
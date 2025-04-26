import { useState } from "react";
import { applicationAPI } from "../../api/jobs.js";

function ApplicationForm({id}){

    // console.log(id);
    
    
    let [fileName, setFileName] = useState();

    let userEmail = localStorage.getItem("email");

    let [userInput, setUserInput] = useState({id,userEmail});

    function handleUploadResumeClick(e){
        e.preventDefault();
        let resume = document.querySelector("#resume");
        resume.click();
    }

    function handleUploadResumeChange(e){
        e.preventDefault();
        let file = e.target.files[0];
        // Display file name
        if(file){
            setFileName(file.name);
        }
        // Add file to user input.
        setUserInput(
            {...userInput,
            [e.target.name]:e.target.value,
        })
    }

    function handleChange(e){
        setUserInput(
            {...userInput,
            [e.target.name]:e.target.value,
        })
    }

    async function handleClick(e){
        e.preventDefault();
        // console.log(userInput);
        let data = await applicationAPI(userInput);
        // console.log(data);
        alert(data.msg)
    }

    return(
        <div className="my-[50px] p-[20px] border border-[#D9D9D9] rounded-[10px]">
            
            <form onSubmit={handleClick} className="grid grid-cols-2 gap-y-[20px] gap-x-[200px]">

                <div className="flex gap-[10px] justify-between">
                    <label htmlFor="firstName">First Name</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="firstName" onChange={handleChange} required/>
                </div>
                
                <div className="flex gap-[10px] justify-between">
                    <label htmlFor="secondName">Second Name</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="secondName" onChange={handleChange} required/>
                </div>
                
                <div className="flex gap-[10px] justify-between">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="mobile" onChange={handleChange} required/>
                </div>
                
                <div className="flex gap-[10px] justify-between">
                    <label htmlFor="email">Email</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="email" onChange={handleChange} required/>
                </div>

                {/* <div className="flex gap-[10px] ">
                    <label htmlFor="resume" className="p-[5px] border border-[#D9D9D9] rounded-[5px]" onClick={handleUploadResumeClick} >Upload Resume</label>
                    <p>{fileName}</p>
                    <input id="resume" name="resume" type="file" style={{display:"none"}} onChange={handleUploadResumeChange} />
                </div> */}

                <div className="flex gap-[10px] justify-between">
                    <label htmlFor="experience">Relevent years of experience</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="experience" onChange={handleChange} required/>
                </div>
                
                <div className="flex gap-[10px] justify-between">
                    <label htmlFor="designation">Current Designation</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="designation" onChange={handleChange} required/>
                </div>

                <div className="flex gap-[10px] justify-between">
                    <label htmlFor="relocation">Willing to relocate?</label>
                    <select name="relocate">
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    {/* <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="relocation" onChange={handleChange} /> */}
                </div>

                <div>
                    <button type="submit" className="p-[5px] border border-[#60B5FF] rounded-[5px] bg-[#60B5FF]" >Apply</button>
                </div>
                

            </form>

        </div>
    )
}

export default ApplicationForm
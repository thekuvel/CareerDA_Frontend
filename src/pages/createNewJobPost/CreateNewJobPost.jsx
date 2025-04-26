import { useState } from "react"
import { createJobAPI } from "../../api/jobs.js";

function CreateNewJobPost(){

    let userEmail = localStorage.getItem("email")

    let [userInput, setUserInput] = useState({userEmail});

    function handleChange(e){
        setUserInput(
            {...userInput,
            [e.target.name]:e.target.value,
        })
    }

    async function handleSave(e){
        e.preventDefault();
        console.log(userInput);
        let data = await createJobAPI(userInput);
        console.log(data);
        
    }

    return(
        <div>

            <form className="flex flex-col gap-[20px]">

                <div className="flex gap-[10px]">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="jobTitle" onChange={handleChange}/>
                </div>

                <div className="flex gap-[10px]">
                    <label htmlFor="company">Company Name</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="company"  onChange={handleChange}/>
                </div>

                <div className="flex gap-[10px]">
                    <label htmlFor="location">Location</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="location"  onChange={handleChange}/>
                </div>

                <div className="flex gap-[10px]">
                    <label htmlFor="experience">Experience in years</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="number" name="experience"  onChange={handleChange}/>
                </div>

                <div className="flex gap-[10px]">
                    <label htmlFor="salary">Salary</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="number" name="salary"  onChange={handleChange}/>
                </div>

                <div className="flex gap-[10px]">
                    <label htmlFor="jobType">Job Type</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="jobType" placeholder="Full time/ Part time/ intern"  onChange={handleChange}/>
                </div>

                <div className="flex gap-[10px]">
                    <label htmlFor="mode">Mode</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="text" name="mode" placeholder="In person / Remote/ Hybrid"  onChange={handleChange}/>
                </div>

                <div className="flex gap-[10px]">
                    <label htmlFor="lastDate">Last Date</label>
                    <input className="border border-[#D9D9D9] rounded-[5px]" type="date" name="lastDate"  onChange={handleChange}/>
                </div>

                <div className="flex gap-[10px]">
                    <label htmlFor="description">Description</label>
                    <textarea className="border border-[#D9D9D9] rounded-[5px]" name="description"  onChange={handleChange}/>
                </div>

                <div className="flex justify-center">
                    <button className="p-[5px] border border-[#60B5FF] rounded-[5px] bg-[#60B5FF]" onClick={handleSave}>Save</button>
                </div>

            </form>

        </div>
    )

}

export default CreateNewJobPost
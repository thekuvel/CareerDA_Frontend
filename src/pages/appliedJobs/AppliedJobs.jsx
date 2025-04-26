import { useEffect, useState } from "react";
import { getUserAPI } from "../../api/users";
import JobCard from "../../components/jobCard/JobCard.jsx";

function AppliedJobs() {

    let email = localStorage.getItem("email");   
    
    let [jobsArray, setJobsArray] = useState([]);

    async function getApplication(){
        let data = await getUserAPI({email});
        // console.log(data.jobs);
        
        setJobsArray(data.jobs);
    }

    useEffect(()=>{
        getApplication();
    },[0])

    return(
        <div>

            {
                jobsArray.map( job => (
                    <JobCard job={job} key={job._id}/>
                ) )
            }
            
            
        </div>
    )
}

export default AppliedJobs
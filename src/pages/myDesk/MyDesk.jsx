import { useEffect, useState } from "react";
import { getMyDeskAPI } from "../../api/users.js";
import JobCard from "../../components/jobCard/JobCard.jsx";

function MyDesk() {

    let email = localStorage.getItem("email");   
    
    let [jobsArray, setJobsArray] = useState([]);

    async function getJobs(){
        let data = await getMyDeskAPI({email});
        // console.log(data.jobs);
        
        setJobsArray(data.jobs);
    }

    useEffect(()=>{
        getJobs();
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

export default MyDesk
import ApplicationForm from "../../components/applicationForm/ApplicationForm.jsx"

import { useLocation } from "react-router-dom";
import ApplicationList from "../../components/applicationList/ApplicationList.jsx";

function JobDescription(){

    let location = useLocation();
    let job = location.state;

    let userType = localStorage.getItem("userType");

    // console.log(job);

    return(
        <div className="grid gap-[10px]">
            
            <p>{job.jobTitle}</p>
            
            <p><span className="font-semibold">Company: </span>{job.company}</p>
              
            <p><span className="font-semibold">Location: </span>{job.location}</p>
            <p><span className="font-semibold">Minimum experience required:</span> {job.experience}</p>
            <p><span className="font-semibold">Salary range:</span> {job.salary}</p>

            <p>{job.jobType}, {job.mode}, Last date to apply {job.lastDate}</p>

            <p className="font-semibold">Description</p>
            <p>{job.description}</p>
            
            {(userType == "employer")?
            <ApplicationList applications={job.applicationArray}/>
            :
            <ApplicationForm id={job._id}/>
            }

        </div>
    )
}

export default JobDescription
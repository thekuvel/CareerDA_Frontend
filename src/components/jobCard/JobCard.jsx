import { Link } from "react-router-dom"

function JobCard({job}){
    // console.log(job);
    
    return(
        <Link to={`/jd`} state={job} className="p-[20px] col-span-4 grid gap-[10px] border rounded-[10px] border-[#D9D9D9] col-span-4">

            <div className="flex items-center gap-[20px]">
                <div className="w-[50px]">
                    <img src="/icons/careerdaIcon.png" alt="careerda" />
                </div>
                <div>
                    <h1>{job.jobTitle}</h1>
                    <p>{job.company}</p>
                </div>
            </div>

            <div>
                <p>{job.location}</p>
            </div>

            <div className="flex gap-[20px]">
                <p>{job.experience}</p>
                <p>{job.salary}</p>
            </div>

            <div className="flex gap-[20px]">
                <p>{job.jobType}</p>
                <p>{job.mode}</p>
                <p>{job.lastDate}</p>
            </div>

        </Link>
    )
}

export default JobCard
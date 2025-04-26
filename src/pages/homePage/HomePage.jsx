import { Link } from "react-router-dom"
import { getAllJobsAPI } from "../../api/jobs.js"
import JobCard from "../../components/jobCard/JobCard.jsx";
import { useEffect, useState } from "react";

function HomePage(){

    let [jobs, setJobs] = useState([])

    async function getAllJobs(){
        let data = await getAllJobsAPI();
        setJobs(data);
    }

    useEffect(()=>{
        getAllJobs();
    },[0])

    return(
        <div className="grid grid-cols-12 gap-[20px]">
            {
                jobs.map((job)=>(
                    <JobCard job={job} key={job._id}/>
                ))
            }
        </div>
        // <Link to="/jd" className="grid grid-cols-12 gap-[20px]">
            
        //     <div className="p-[20px] grid gap-[10px] border rounded-[10px] border-[#D9D9D9] col-span-4">

        //         <div className="flex items-center gap-[20px]">
        //             <div className="w-[50px]">
        //                 <img src="/icons/careerdaIcon.png" alt="careerda" />
        //             </div>
        //             <div>
        //                 <h1>Developer</h1>
        //                 <p>Career D A</p>
        //             </div>
        //         </div>

        //         <div>
        //             <p>Chennai, India</p>
        //         </div>

        //         <div className="flex gap-[20px]">
        //             <p>5 Years</p>
        //             <p>$10,000</p>
        //         </div>
        //         <div className="flex gap-[20px]">
        //             <p>Partime</p>
        //             <p>Hybrid</p>
        //             <p>30-6-2025</p>
        //         </div>

        //     </div>

        // </Link>

    )
}

export default HomePage
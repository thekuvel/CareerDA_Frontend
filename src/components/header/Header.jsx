import { Link, useNavigate } from "react-router-dom"

function Header(){

    let navigate = useNavigate();

    let token = localStorage.getItem("token")
    let userType = localStorage.getItem("userType")

    function handleLogOut() {
        localStorage.clear();
        navigate("/signin")
    }

    return(
        <div className="p-[20px] col-start-2 col-span-10 border rounded-[10px] border-[#D9D9D9] flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
                <div className="w-[32px]">
                    <img src="/icons/careerdaIcon.png" alt="Creer D A icon." />
                </div>
                <p className="text-[32px]">careerda</p>
            </Link>
            
            <div className="flex gap-[20px] items-center">

                <Link to="/">Home</Link>

                {(userType=="employer")?
                <>
                <Link to="/createjob">Create Job</Link>
                <Link to="/mydesk">My desk</Link>
                </>
                :
                (userType=="jobSeeker")?
                <Link to="/appliedjobs">Applied Jobs</Link>
                :""
                }

                {token?
                <button onClick={handleLogOut} className="p-[10px] border rounded-[10px]">Logout</button>
                :
                <Link to="/signup" className="p-[10px] border rounded-[10px]">Sign up</Link>
                }
                
                
            </div>
            
        </div>
    )
}

export default Header
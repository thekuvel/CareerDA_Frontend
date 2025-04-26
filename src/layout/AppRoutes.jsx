
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout.jsx"
import HomePage from "../pages/homePage/HomePage.jsx"
import JobDescription from "../pages/jobDescription/JobDescription.jsx"
import CreateNewJobPost from "../pages/createNewJobPost/CreateNewJobPost.jsx"
import AppliedJobs from "../pages/appliedJobs/AppliedJobs.jsx"
import MyDesk from "../pages/myDesk/MyDesk.jsx"
import SignIn from "../pages/signIn/SignIn.jsx"
import SignUp from "../pages/signUp/SignUp.jsx"
import ProtectedRoutes from "./ProtectedRoutes.jsx"

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>

                {/* Public routes */}
                <Route path="/" element={<Layout/>}>
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                </Route>

                <Route path="/" element={<ProtectedRoutes component={<Layout/>}/>}>
                    <Route index element={<HomePage/>} />
                    <Route path="/jd" element={<JobDescription/>} />
                    <Route path="/createjob" element={<CreateNewJobPost/>} />
                    <Route path="/appliedjobs" element={<AppliedJobs/>} />
                    <Route path="/mydesk" element={<MyDesk/>} />
                </Route>
                

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
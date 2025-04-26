
function ApplicationList({applications}){
    console.log(applications);
    
    return(
        <div className="my-[50px] grid gap-[10px]">
            <h1>Application List</h1>
            {applications.map(application=>(
                <div className="p-[5px] border rounded-[5px]" key={application.email}>
                    <p>Name: {application.firstName} {application.secondName}</p>
                    <p>Email: {application.email}</p>
                    <p>Email: {application.mobile}</p>
                    <p>Current designation: {application.designation}</p>
                    <p>Relevent experience: {application.experience}</p>
                </div>
            ))}

        </div>
    )
}

export default ApplicationList
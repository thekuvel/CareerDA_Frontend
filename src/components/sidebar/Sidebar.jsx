
import { Link } from "react-router-dom"

let sideBarList = [
    {
        filterName: "Location",
        filterIcon: "/icons/locationIcon.png",
        altText: "Location Icon",
        inputType: "text"
    },
    {
        filterName: "Experience",
        filterIcon: "/icons/fileIcon.png",
        altText: "File Icon",
        inputType: "number"
    },
    {
        filterName: "Visa_requirement",
        filterIcon: "/icons/aeroplaneIcon.png",
        altText: "Aeroplane Icon",
        inputType: "text"
    },
    {
        filterName: "Travel_required",
        filterIcon: "/icons/backpackIcon.png",
        altText: "Backpack Icon",
        inputType: "text"
    }
]

function Sidebar(){
    return(
        <div className="p-[20px] col-start-2 col-span-2 border rounded-[10px] border-[#D9D9D9] h-[100dvh]">
            <ul className="flex flex-col gap-[20px]">

                {sideBarList.map( list => {
                    return (
                    <li className="flex flex-col gap-[10px]" key={list.filterName}>
                        <Link className="flex items-center gap-[10px]">
                            <div className="w-[24px]">
                                <img src={list.filterIcon} alt={list.altText} />
                            </div>
                            <p>{list.filterName}</p>
                        </Link>
                        <input name={list.filterName} className="border border-[#D9D9D9] rounded-[5px]" type={`${ list.inputType == "text" ? "text" : "number" }`} />
                    </li>)
                })}

            </ul>
            <div className="my-[20px] flex justify-center">
                <button className="p-[5px] border border-[#60B5FF] rounded-[5px] bg-[#60B5FF]">
                    Search Jobs
                </button>
            </div>
        </div>
    )
}
export default Sidebar
import Link from "./Link";

function Sidebar(){
    const links =[
        {path: "/accordion", label: "Accordion"},
        {path: "/dropdown", label: "Dropdown"},
    ]

    const renderedLinks = links.map(({path, label})=>{
        return <Link to={path} key={label}>{label}</Link>
    })

    return(
        <div className="flex flex-col w-1/5 bg-gray-800 text-gray-100">
            {/* <div className="flex flex-col flex-grow">
                <Link to="/accordion">Accordion</Link>
                <Link to="/dropdown">Dropdown</Link>
            </div> */}
            {renderedLinks}
        </div>
    )
}

export default Sidebar;
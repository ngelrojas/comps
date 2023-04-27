import { useState } from "react";
import {GoChevronDown, GoChevronLeft} from "react-icons/go";

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        // first version
        // if (nextIndex === expandedIndex) {
        //     setExpandedIndex(-1);
        //     return;
        // }else{
        //     setExpandedIndex(nextIndex);
        // }
        
        // second version 
        setExpandedIndex((currentExpandedIndex) => {
            if(currentExpandedIndex === nextIndex) {
                return -1;
            }else{
                return nextIndex;
            }
        });
        
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = <span className="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        return (
            <div key={item.id}>
                <div onClick={() => handleClick(index)} className="flex justify-between p-3 bg-gray-50 border-b items-center">
                    {item.title}
                    {icon}
                </div>
                {
                    isExpanded && <div className="border-b p-5">{item.content}</div>
                }
                
            </div>
        );
    })

    return (
        <div className="border-x border-t rounded">
        {renderedItems}
        </div>
    );
}

export default Accordion;

// scanning ip aroud from my current ip
// import nmap
// scanner = nmap.PortScanner()
// ip = input("inserte")
// print("scanning from you ip", ip)
// scanner.scan(ip)
// print(scanner.all_hosts())
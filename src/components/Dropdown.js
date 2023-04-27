import { useState, useEffect, useRef } from "react"
import {GoChevronDown} from 'react-icons/go';
import Panel from "./Panel";

export default function Dropdown({options, value, onChange}){
    const [isOpen, setIsOpen] = useState(false);
    const divEvl = useRef(null);

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }

    const renderOptions = options.map((option) => {
        return (
            <div onClick={() => handleOptionClick(option)} key={option.value} className="hover:bg-sky-100 rounded cursor-pointer p-1">
                {option.label}
            </div>
        )
    })

    // let content = 'Select...';
    // if (selection) {
    //     content = selection.label;
    // }

    useEffect(()=> {
        const handler = (event) => {
            if(!divEvl.current) return;
            if (!divEvl.current.contains(event.target)){
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        }
    }, [])
    

    return (
        <div ref={divEvl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && <Panel className="absolute top-full border">{renderOptions}</Panel>}
        </div>
    )
}
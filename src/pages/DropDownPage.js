import { useState } from 'react';
import Dropdown from "../components/Dropdown";

export default function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const handleSelected = (option) => {
        setSelection(option);
    }

    const options = [
        {label: 'red', value: 'red'},
        {label: 'green', value: 'green'},
        {label: 'blue', value: 'blue'},
    ]
    return (
        <div>
        <Dropdown 
            options={options} 
            value={selection} 
            onChange={handleSelected} 
        />

        </div>
    );
}
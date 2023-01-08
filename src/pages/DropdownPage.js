import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        { label: 'Feed Animals', value: 'feed' },
        { label: 'Clean Stables', value: 'clean' },
        { label: 'Pat Bellies', value: 'pat' },
    ];

    return (
        <div className="flex">
            <Dropdown options={options} value={selection} onChange={handleSelect}/>
        </div>
    );
}

export default DropdownPage;
//import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

function TablePage() {
    const data = [
        {name: 'Pink Lady', color: 'bg-pink-500', score: 3},
        {name: 'Honeycrisp', color: 'bg-red-500', score: 2},
        {name: 'Golden Delicious', color: 'bg-yellow-500', score: 4},
        {name: 'Granny Smith', color: 'bg-green-500', score: 1},
        {name: 'Liberty', color: 'bg-red-600', score: 5},
    ];

    const config = [
        { 
            label: 'Apple Name',
            render: (apple) => apple.name,
            sortValue: (apple) => apple.name
        },
        {
            label: 'Color',
            render: (apple) => <div className={`p-3 m-2 ${apple.color}`}></div>
        },
        {
            label: 'Score',
            render: (apple) => apple.score,
            sortValue: (apple) => apple.score
        },
    ];

    const keyFn = (apple) => {
        return apple.name;
    };

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
    )
}
export default TablePage;
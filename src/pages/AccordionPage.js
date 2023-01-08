import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: '1',
            label: 'Miniture Horses',
            content: 'Chocky (M) and Zinny (M)'
        },
        {
            id: '2',
            label: 'Rescued Pigs',
            content: 'Sheeran (M) and Poppy (F)'
        },
        {
            id: '3',
            label: 'House Cats',
            content: 'George (M), Harry (M), Bertie (M), Millie (F), and Gracie (F)'
        }
    ];

    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
}

export default AccordionPage;
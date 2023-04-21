import Accordion from "./components/Accordion";

const App = () => {
    const items = [
        {
            id: "asdf",
            title: 'What is React?',
            content: 'React is a front end javascript framework'
        },
        {
            id: "iuyi",
            title: 'can I sue React?',
            content: 'React is a front end javascript framework'
        },
        {
            id: "jklj",
            title: 'can I use css?',
            content: 'React is a front end javascript framework'
        }
    ]
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
}

export default App;
import Route from "./components/Route";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Sidebar from "./components/Sidebar";

export default function App() {
    
    return (
        <div className="container mx-auto grid-cols-6 gap-4 mt-4">
            {/* <Link to="/accordion">go to accordion</Link>
            <Link to="/dropdown">go to dropdown</Link> */}
            <Sidebar />
            <div className="cols-4">
                <Route path="/accordion">
                    <Accordion />
                </Route>
                <Route path="/dropdown">
                    <Dropdown />
                </Route>
            </div>
        </div>
    );
}
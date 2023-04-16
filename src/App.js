import {HiBadgeCheck} from "react-icons/hi";

import Button from "./Button";

const App = () => {
    return (
        <div>
            <div>
                <HiBadgeCheck />
                <Button success rounded>click here</Button>
            </div>

            <div>
                <Button secondary rounded>click here1 </Button>
            </div>

            <div>
                <Button warning rounded>click here2</Button>
            </div>
            <div>
                <Button danger rounded>click here2</Button>
            </div>
            <div>
                <Button primary rounded>click here3</Button>
            </div>

        </div>
    );
}

export default App;
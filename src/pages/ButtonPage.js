import {HiBadgeCheck} from "react-icons/hi";

import Button from "../components/Button";

const ButtonPage = () => {

    const handleClick = () => {
        console.log('clicked');
    }

    return (
        <div>
            <div>
                <HiBadgeCheck />
                <Button onClick={handleClick} success rounded>click here</Button>
            </div>

            <div>
                <Button secondary rounded className="mb-5">click here1 </Button>
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

export default ButtonPage;
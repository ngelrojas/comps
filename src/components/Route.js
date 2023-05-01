// import { useContext } from "react";
// import NavigationContext from "../context/navigation";
import useNavigation from "../hooks/use-navigation";

function Route({path, children}){
    // const {currentPath} = useContext(NavigationContext);
    const {currentPath} = useNavigation();

    return currentPath === path ? children : null;
}

export default Route;
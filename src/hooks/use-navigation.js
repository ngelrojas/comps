import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigation(){
    const {navigate} = useContext(NavigationContext);
    return navigate;
}
export default useNavigation;
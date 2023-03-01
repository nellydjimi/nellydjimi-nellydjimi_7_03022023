import { Navigate } from "react-router-dom";

export default function Redirection(id){
    
    if(`/Logements/${id}`  === false){
        return <Navigate to="/error" />;
}


}

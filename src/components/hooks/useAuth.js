import { useContext } from "react";
import { AuthContext } from "../hooks/ProvideAuth";
export const useAuth = () => {
return useContext(AuthContext);
};

export default useAuth;
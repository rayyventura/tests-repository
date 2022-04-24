import { useContext } from "react";
import AuthContext from "../contexts/authContexts";

export default function useAuth() {
  return useContext(AuthContext);
}

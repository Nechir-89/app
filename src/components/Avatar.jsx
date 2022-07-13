import { useContext } from "react";
import UserContext from "../contexts/user";

export default function Avatar() {
  const signedInUser = useContext(UserContext);
  console.log(signedInUser)
  return (
    <div>
      <a href="#profile" rel="noopener noreferal">
        <img src={signedInUser.pic} alt="happy user" />
      </a>
    </div>
  )
}
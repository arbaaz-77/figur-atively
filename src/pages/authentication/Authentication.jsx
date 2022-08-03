import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import { AuthContainer } from "./AuthenticationStyles";

const Authentication = () => {
  return (
    <AuthContainer>
      <SignIn />
      <SignUp />
    </AuthContainer>
  );
};

export default Authentication;

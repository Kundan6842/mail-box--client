import AuthForm from "./Components/Authentication/AuthForm";

import Homepage from "./Components/Homepage/Homepage";

import { useSelector } from "react-redux";

function App() {
  const IsLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div>
      {!IsLoggedIn && <AuthForm />}
      {IsLoggedIn && <Homepage />}
    </div>
  );
}

export default App;

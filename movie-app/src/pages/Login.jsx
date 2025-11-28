import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";


function Login() {
const dispatch = useDispatch();


const handleLogin = () => {
dispatch(loginUser({ name: "Test User" }));
};


return (
<div className="container mt-3 text-center">
<h2>Login</h2>
<button className="btn btn-success" onClick={handleLogin}>Login</button>
</div>
);
}
export default Login;
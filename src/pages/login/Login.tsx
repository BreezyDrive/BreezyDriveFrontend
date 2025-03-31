import "./Login.css";

function Login() {
  return (
    <div className="loginpage">
      <div className="loginform">
        <h1 className="loginform__header">Login</h1>
        <div className="loginform__input">
          <label className="username"> Username</label>
          <input
            type="text"
            placeholder="username"
            className="loginform__input"
          />
        </div>
        <div className="loginform__input">
          <label className="password"> Password</label>
          <input
            type="password"
            placeholder="Password"
            className="loginform__input"
          />
        </div>
        <div className="loginform__rememberMe">
            <input type="checkbox" className="loginform__rememberMe__checkbox" /> Remember Me
        </div>
        <div className="loginform__input">
          <button className="loginform__button">Login</button>
        </div>
        <div className="loginform__register">
            <p>Dont have account?</p>
            <a href="/register" className="">Register</a>
        </div>
      </div>
    </div>
  );
}

export default Login;

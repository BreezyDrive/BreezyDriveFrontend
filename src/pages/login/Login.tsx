import "./Login.css";
import { FaUser, FaLock, FaCheckSquare } from "react-icons/fa";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AxiosError } from "axios";
import { postLogin } from "../../services/authService";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Xử lý đăng nhập ở đây
    try {
      if (phone === "" || password === "") {
        toast.error("Tên đăng nhập và mật khẩu không được để trống.", {
          position: "top-right",
        });
        return; // Dừng quá trình đăng nhập nếu các trường trống
      }
      const response = await postLogin({ phone, password });

      if (response?.token) {
        // Lưu token vào localStorage hoặc làm gì đó với dữ liệu
        localStorage.setItem("token", response.token);
        toast.success("Đăng nhập thành công!", { position: "top-right" });
      }
    } catch (error) {
      // Xử lý lỗi từ API
      if (error instanceof Error) {
        toast.error(error.message, { position: "top-right" });
        return;
      }
      const err = error as AxiosError;

      const data = err.response?.data as { message?: string; error?: string };

      const message =
        data?.message || data?.error || "Có lỗi xảy ra khi đăng nhập!";

      toast.error(message);
    }

    console.log("Đăng nhập với:", { phone, password, rememberMe });
  };

  return (
    <div className="login">
      <ToastContainer />

      <div className="login__container">
        <form className="login__form" onSubmit={handleSubmit}>
          <h1 className="login__title">Đăng nhập</h1>

          <div className="login__input-group">
            <div className="login__input-wrapper">
              <FaUser className="login__icon" />
              <input
                type="text"
                placeholder="Tên đăng nhập"
                className="login__input"
                onChange={handleUsernameChange}
                value={phone}
              />
            </div>
          </div>

          <div className="login__input-group">
            <div className="login__input-wrapper">
              <FaLock className="login__icon" />
              <input
                type="password"
                placeholder="Mật khẩu"
                className="login__input"
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
          </div>

          <div className="login__options">
            <label className="login__remember">
              <input
                type="checkbox"
                className="login__checkbox"
                onChange={handleRememberMeChange}
              />
              <span className="login__checkbox-label">Ghi nhớ đăng nhập</span>
            </label>
            <a href="/forgot-password" className="login__forgot">
              Quên mật khẩu?
            </a>
          </div>

          <button className="login__button">Đăng nhập</button>

          <div className="login__divider">
            <span className="login__divider-text">hoặc</span>
          </div>

          <div className="login__social">
            <button className="login__social-button login__social-button--google">
              <img
                src="/google-icon.png"
                alt="Google"
                className="login__social-icon"
              />
              Đăng nhập với Google
            </button>
            <button className="login__social-button login__social-button--facebook">
              <img
                src="/facebook-icon.png"
                alt="Facebook"
                className="login__social-icon"
              />
              Đăng nhập với Facebook
            </button>
          </div>

          <div className="login__register">
            <span>Chưa có tài khoản?</span>
            <a href="/register" className="login__register-link">
              Đăng ký ngay
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

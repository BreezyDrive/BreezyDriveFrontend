import "./Register.css";
import { FaUser, FaLock, FaEnvelope, FaPhone, FaCheckSquare } from "react-icons/fa";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AxiosError } from "axios";
import { postRegister } from "../../services/authService";

function Register() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleAgreeTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeTerms(event.target.checked);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Validate form
      if (!fullName || !phone || !email || !password || !confirmPassword) {
        toast.error("Vui lòng điền đầy đủ thông tin.", {
          position: "top-right",
        });
        return;
      }

      if (password !== confirmPassword) {
        toast.error("Mật khẩu xác nhận không khớp.", {
          position: "top-right",
        });
        return;
      }

      if (!agreeTerms) {
        toast.error("Vui lòng đồng ý với điều khoản sử dụng.", {
          position: "top-right",
        });
        return;
      }

      const response = await postRegister({
        fullName,
        phone,
        email,
        password,
      });

      if (response?.success) {
        toast.success("Đăng ký thành công!", { position: "top-right" });
        // Redirect to login page after successful registration
        window.location.href = "/login";
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, { position: "top-right" });
        return;
      }
      const err = error as AxiosError;
      const data = err.response?.data as { message?: string; error?: string };
      const message = data?.message || data?.error || "Có lỗi xảy ra khi đăng ký!";
      toast.error(message);
    }
  };

  return (
    <div className="register">
      <ToastContainer />

      <div className="register__container">
        <form className="register__form" onSubmit={handleSubmit}>
          <h1 className="register__title">Đăng ký tài khoản</h1>

          <div className="register__input-group">
            <div className="register__input-wrapper">
              <FaUser className="register__icon" />
              <input
                type="text"
                placeholder="Họ và tên"
                className="register__input"
                onChange={handleFullNameChange}
                value={fullName}
              />
            </div>
          </div>

          <div className="register__input-group">
            <div className="register__input-wrapper">
              <FaPhone className="register__icon" />
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="register__input"
                onChange={handlePhoneChange}
                value={phone}
              />
            </div>
          </div>

          <div className="register__input-group">
            <div className="register__input-wrapper">
              <FaEnvelope className="register__icon" />
              <input
                type="email"
                placeholder="Email"
                className="register__input"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
          </div>

          <div className="register__input-group">
            <div className="register__input-wrapper">
              <FaLock className="register__icon" />
              <input
                type="password"
                placeholder="Mật khẩu"
                className="register__input"
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
          </div>

          <div className="register__input-group">
            <div className="register__input-wrapper">
              <FaLock className="register__icon" />
              <input
                type="password"
                placeholder="Xác nhận mật khẩu"
                className="register__input"
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
              />
            </div>
          </div>

          <div className="register__terms">
            <label className="register__terms-label">
              <input
                type="checkbox"
                className="register__checkbox"
                onChange={handleAgreeTermsChange}
                checked={agreeTerms}
              />
              <span className="register__checkbox-text">
                Tôi đồng ý với <a href="/terms">điều khoản sử dụng</a> và{" "}
                <a href="/privacy">chính sách bảo mật</a>
              </span>
            </label>
          </div>

          <button className="register__button">Đăng ký</button>

          <div className="register__login">
            <span>Đã có tài khoản?</span>
            <a href="/login" className="register__login-link">
              Đăng nhập
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register; 
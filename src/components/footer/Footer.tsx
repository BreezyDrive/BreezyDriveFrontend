import './Footer.css';
import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left Section - Logo and Contact */}
        <div className="footer__section footer__section--contact">
          <img src="/logo.png" alt="Mioto Logo" className="footer__logo" />
          <div className="footer__contact">
            <div className="footer__phone">1900 9217</div>
            <div className="footer__hours">Tổng đài hỗ trợ: 7AM - 10PM</div>
            <a href="mailto:contact@mioto.vn" className="footer__email">contact@mioto.vn</a>
            <div className="footer__email-label">Gửi mail cho Mioto</div>
          </div>
          <div className="footer__social">
            <a href="#" className="footer__social-link"><FaFacebook /></a>
            <a href="#" className="footer__social-link"><FaTiktok /></a>
            <a href="#" className="footer__social-link"><SiZalo /></a>
          </div>
        </div>

        {/* Policy Section */}
        <div className="footer__section">
          <h3 className="footer__heading">Chính Sách</h3>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">Chính sách và quy định</a></li>
            <li><a href="#" className="footer__link">Quy chế hoạt động</a></li>
            <li><a href="#" className="footer__link">Bảo mật thông tin</a></li>
            <li><a href="#" className="footer__link">Giải quyết tranh chấp</a></li>
          </ul>
        </div>

        {/* Learn More Section */}
        <div className="footer__section">
          <h3 className="footer__heading">Tìm Hiểu Thêm</h3>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">Hướng dẫn chung</a></li>
            <li><a href="#" className="footer__link">Hướng dẫn đặt xe</a></li>
            <li><a href="#" className="footer__link">Hướng dẫn thanh toán</a></li>
            <li><a href="#" className="footer__link">Hỏi và trả lời</a></li>
          </ul>
        </div>

        {/* About Section */}
        <div className="footer__section">
          <h3 className="footer__heading">Về Mioto</h3>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">Về Mioto</a></li>
            <li><a href="#" className="footer__link">Mioto Blog</a></li>
            <li><a href="#" className="footer__link">Tuyển dụng</a></li>
          </ul>
        </div>

        {/* Partner Section */}
        <div className="footer__section">
          <h3 className="footer__heading">Đối Tác</h3>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">Đăng ký chủ xe Mioto</a></li>
            <li><a href="#" className="footer__link">Đăng ký GPS MITRACK 4G</a></li>
            <li><a href="#" className="footer__link">Đăng ký cho thuê xe dài hạn MICAR</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer__bottom">
        <div className="footer__info">
          <p className="footer__company">© Công ty Cổ Phần Mioto Asia</p>
          <p className="footer__address">
            Địa chỉ: Văn phòng 02, Tầng 08, Tòa nhà Pearl Plaza, Số 561A Điện Biên Phủ,
            Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam.
          </p>
          <div className="footer__registration">
            <p>Số GCNDKKD: 0317307544</p>
            <p>Ngày cấp: 24-05-22</p>
            <p>Nơi cấp: Sở Kế hoạch và Đầu tư TPHCM</p>
          </div>
          <div className="footer__banking">
            <p>Tên TK: CTCP MIOTO ASIA</p>
            <p>Số TK: 102-989-1989</p>
            <p>Ngân hàng Vietcombank - CN Tân Định</p>
          </div>
        </div>
        
        <div className="footer__payment">
          <div className="footer__bct">
            <img src="/bct-registered.png" alt="Đã đăng ký Bộ Công Thương" className="footer__bct-image" />
          </div>
          <div className="footer__payment-methods">
            <h4 className="footer__payment-title">Phương thức thanh toán</h4>
            <div className="footer__payment-logos">
              <img src="/payment/momo.png" alt="MoMo" className="footer__payment-logo" />
              <img src="/payment/vnpay.png" alt="VNPay" className="footer__payment-logo" />
              <img src="/payment/airpay.png" alt="AirPay" className="footer__payment-logo" />
              <img src="/payment/visa.png" alt="Visa" className="footer__payment-logo" />
              <img src="/payment/zalopay.png" alt="ZaloPay" className="footer__payment-logo" />
              <img src="/payment/viettel-money.png" alt="Viettel Money" className="footer__payment-logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./CarDetail.css";
import "../../App.css";
import {
  FaCar,
  FaTachometerAlt,
  FaSnowflake,
  FaBluetooth,
  FaCamera,
  FaWifi,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCarByGuid } from "../../services/carService";
import { Car } from "../../models/car";
import { getUserByGuid } from "../../services/userServices";
import { User } from "../../models/user";
import {
  GetAllCarRatingByCarId,
  GetCarRatingWithUserByCarId,
} from "../../services/carRatingService";
import { CarRating } from "../../models/carRating";
import { formatPrice } from "../../utils/formatPrice";
import { getTransmissionLabel } from "../../utils/transmissionLabel";

const carData = {
  id: 1,
  name: "HYUNDAI ACCENT 2023",
  images: {
    main: "/car-main.jpg",
    thumbnails: ["/car-thumb1.jpg", "/car-thumb2.jpg", "/car-thumb3.jpg"],
  },
  rating: {
    score: 4.5,
    total: 12,
  },
  features: {
    transmission: "Số tự động",
    seats: "4 chỗ",
    fuel: "Xăng",
    consumption: "6L/100km",
  },
  description:
    "HYUNDAI ACCENT 2023 màu trắng,số tự động,xe nhập khẩu từ Hàn Quốc,xe mới đi 1.000km,nội thất nguyên bản,sạch sẽ,bảo dưỡng định kỳ theo hãng.",
  amenities: [
    { icon: "bluetooth", name: "Bluetooth" },
    { icon: "camera", name: "Camera lùi" },
    { icon: "wifi", name: "Wifi" },
    { icon: "ac", name: "Điều hòa" },
  ],
  rentalPolicy: {
    documents: ["CMND và GPLX (bản gốc)", "Hộ khẩu hoặc KT3 (bản gốc)"],
    deposit:
      "15 triệu (tiền mặt/chuyển khoản) hoặc Xe máy (kèm cà vẹt gốc) trị giá 15 triệu",
  },
  location: "Quận Bình Thạnh, TP Hồ Chí Minh",
  owner: {
    name: "Công Tuấn",
    avatar: "/owner-avatar.jpg",
    rating: 4.8,
    trips: 89,
  },
  reviews: [
    {
      id: 1,
      user: "Nguyễn Văn A",
      avatar: "/reviewer-avatar.jpg",
      rating: 5,
      comment: "Xe rất tốt và sạch sẽ",
      date: "12/02/2024",
    },
  ],
  pricing: {
    daily: 803571,
    serviceFee: 100000,
  },
};

function CarDetail() {
  const { id } = useParams(); // lấy guid từ URL
  const [car, setCar] = useState<Car | null>(null); // khởi tạo state car với giá trị null
  const [owner, setOwner] = useState<User | null>(null); // khởi tạo state owner với giá trị null
  const [ratings, setRatings] = useState<CarRating[]>([]); // khởi tạo state ratings với giá trị là mảng rỗng

  useEffect(() => {
    if (id) {
      getCarByGuid(id) // gọi hàm getCarByGuid với id từ URL
        .then((data) => {
          setCar(data); // cập nhật state car với dữ liệu trả về
        })
        .catch((error) => {
          console.error("Lỗi khi lấy thông tin xe:", error); // xử lý lỗi nếu có
        });
    }
  }, [id]);

  useEffect(() => {
    if (car?.userId) {
      getUserByGuid(car.userId) // gọi hàm getUserByGuid với userId từ car
        .then((data) => {
          setOwner(data); // cập nhật state owner với dữ liệu trả về
        })
        .catch((error) => {
          console.error("Lỗi khi lấy thông tin chủ xe:", error); // xử lý lỗi nếu có
        });
    }
  });

  useEffect(() => {
    if (id) {
      GetCarRatingWithUserByCarId(id)
        .then((data) => {
          setRatings(data); // cập nhật state ratings với dữ liệu trả về
        })
        .catch((error) => {
          console.error("Lỗi khi lấy thông tin đánh giá xe:", error); // xử lý lỗi nếu có
        });
    }
  });

  if (!car) return <div>Đang tải...</div>;

  return (
    <div className="car-detail">
      <Header />

      <main className="car-detail__main">
        {/* Car Gallery Section */}
        <section className="car-gallery">
          <div className="car-gallery__main-image">
            <img src={car.frontImage} alt={car.carModel.name} />
          </div>

          <div className="car-gallery__side-image">
            <div className="side-image-item">
              <img src={car.leftImage} alt={car.carModel.name} />
            </div>
            <div className="side-image-item">
              <img src={car.rightImage} alt={car.carModel.name} />
            </div>
            <div className="side-image-item">
              <img src={car.backImage} alt={car.carModel.name} />
            </div>
          </div>
        </section>

        <div className="car-detail__content">
          <div className="car-detail__left">
            {/* Car Title Section */}
            <section className="car-header">
              <h1 className="car-header__title">
                {car.carModel.carBrand.name + " " + car.carModel.name}
              </h1>
              <div className="car-header__rating">
                <FaStar className="car-header__star" />
                <span>{carData.rating.score}</span>
                <span className="car-header__reviews">
                  ({carData.rating.total} đánh giá)
                </span>
              </div>
            </section>
            {/* Car Title and Rating Section */}
            <div className="section-divider"></div>

            {/* Car Features Section */}
            <section className="car-features">
              <h2 className="section-title">Đặc điểm</h2>
              <div className="car-features__grid">
                <div className="car-feature">
                  <FaCar className="car-feature__icon" />
                  <div className="car-feature__info">
                    <span className="car-feature__title">Truyền động</span>
                    <strong>
                      {getTransmissionLabel(car.transmissionType)}
                    </strong>
                  </div>
                </div>
                <div className="car-feature">
                  <i className="fa-solid fa-chair car-feature__icon"></i>
                  <div className="car-feature__info">
                    <span className="car-feature__title">Số ghế</span>
                    <strong>{car.seat} chỗ</strong>
                  </div>
                </div>
                <div className="car-feature">
                  <i className="fa-solid fa-gas-pump car-feature__icon"></i>
                  <div className="car-feature__info">
                    <span className="car-feature__title">Nhiên liệu</span>
                    <strong>{car.fuelType}</strong>
                  </div>
                </div>
                <div className="car-feature">
                  <FaTachometerAlt className="car-feature__icon" />
                  <div className="car-feature__info">
                    <span className="car-feature__title">Tiêu hao</span>
                    <strong>{car.fuelConsumption}</strong>
                  </div>
                </div>
              </div>
            </section>

            <div className="section-divider"></div>

            {/* Car Description */}
            <section className="car-description">
              <h2 className="section-title">Mô tả</h2>
              <p>{car.description}</p>
            </section>

            <div className="section-divider"></div>

            {/* Car Features Detail */}
            <section className="car-features-detail">
              <h2 className="section-title">Các tiện nghi khác</h2>
              <div className="car-features-detail__grid">
                {carData.amenities.map((amenity, index) => {
                  let IconComponent;
                  switch (amenity.icon) {
                    case "bluetooth":
                      IconComponent = FaBluetooth;
                      break;
                    case "camera":
                      IconComponent = FaCamera;
                      break;
                    case "wifi":
                      IconComponent = FaWifi;
                      break;
                    case "ac":
                      IconComponent = FaSnowflake;
                      break;
                    default:
                      IconComponent = FaCar;
                  }

                  return (
                    <div key={index} className="feature-item">
                      <IconComponent />
                      <span>{amenity.name}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            <div className="section-divider"></div>

            {/* Rental Policy */}
            <section className="rental-policy">
              <h2 className="section-title">Chính sách thuê xe</h2>
              <div className="rental-policy__content">
                <div className="rental-policy__item">
                  <h3>Giấy tờ thuê xe</h3>
                  <ul>
                    {carData.rentalPolicy.documents.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>
                <div className="rental-policy__item">
                  <h3>Tài sản thế chấp</h3>
                  <p>{carData.rentalPolicy.deposit}</p>
                </div>
              </div>
            </section>

            <div className="section-divider"></div>

            {/* Location */}
            <section className="car-location">
              <h2 className="section-title">Vị trí xe</h2>
              <div className="car-location__info">
                <FaMapMarkerAlt />
                <span>{car.location}</span>
              </div>
            </section>

            <div className="section-divider"></div>

            {/* Car Owner */}
            <section className="car-owner">
              <h2 className="section-title">Chủ xe</h2>
              <div className="car-owner__profile">
                <img
                  src={owner?.avatar}
                  alt={owner?.fullName}
                  className="car-owner__avatar"
                />
                <div className="car-owner__info">
                  <h3 className="car-owner__name">{owner?.fullName}</h3>
                  <div className="car-owner__rating">
                    <FaStar />
                    <span>{carData.owner.rating}</span>
                    <span className="car-owner__trips">
                      {owner?.totalReservation} chuyến
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <div className="section-divider"></div>

            {/* Reviews */}
            <section className="car-reviews">
              <h2 className="section-title">Đánh giá</h2>
              <div className="review-list">
                {ratings.map((rating) => (
                  <div key={rating.id} className="review-item">
                    <img
                      src={rating.user?.avatar}
                      alt=""
                      className="review-item__avatar"
                    />
                    <div className="review-item__content">
                      <h4 className="review-item__name">{rating.user?.name}</h4>
                      <div className="review-item__rating">
                        {[...Array(rating.star)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <p className="review-item__text">{rating.comment}</p>
                      <span className="review-item__date">{rating.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Section */}
          <div className="car-detail__right">
            <div className="booking-card">
              <div className="booking-card__price">
                <h2 className="booking-card__amount">
                  {formatPrice(car.pricePerDay)}
                </h2>
              </div>

              <div className="booking-card__dates">
                <div className="date-picker">
                  <div className="date-picker__field">
                    <label>Bắt đầu</label>
                    <input type="text" placeholder="Chọn ngày" />
                  </div>
                  <div className="date-picker__field">
                    <label>Kết thúc</label>
                    <input type="text" placeholder="Chọn ngày" />
                  </div>
                </div>
              </div>

              <div className="booking-card__summary">
                <div className="booking-card__row">
                  <span>Đơn giá thuê</span>
                  <span>{formatPrice(car.pricePerDay)}</span>
                </div>
                <div className="booking-card__row">
                  <span>Số ngày</span>
                  <span>1</span>
                </div>
                <div className="booking-card__total">
                  <span>Tổng cộng</span>
                  <span>{(car.pricePerDay * 1).toLocaleString()} đ</span>
                </div>
              </div>

              <button className="booking-card__button">Đặt xe</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default CarDetail;

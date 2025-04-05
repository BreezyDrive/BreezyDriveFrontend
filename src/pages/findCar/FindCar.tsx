import CarList from "../../components/carList/CarList";
import Header from "../../components/header/Header";
import "./FindCar.css";
import "../../assets/css/Base.css";

const carList = [
  {
    id: 1,
    image:
      "https://image.danchoioto.vn/Mitsubishi/Outlander/2022/ngoai-that-mitsubishi-outlander-1.jpg",
    name: "Mitsubishi Outlander",
    features: ["Số tự động", "7 Chỗ", "Dầu Diesel"],
    location: "Quận Bình Thạnh, Hồ Chí Minh",
    rating: 4.8,
    trips: 2,
    price: "2.247K /ngày",
  },
  {
    id: 2,
    image: "https://img1.oto.com.vn/2024/01/19/fortuner-abf5-b129_wm.webp",
    name: "Toyota Fortuner",
    features: ["Số tự động", "7 Chỗ", "Xăng"],
    location: "Quận 1, Hồ Chí Minh",
    rating: 4.9,
    trips: 5,
    price: "2.500K /ngày",
  },
  {
    id: 3,
    image:
      "https://i1-vnexpress.vnecdn.net/2024/03/25/Ngoaithat1JPG-1711351369.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=aMkRZBZjkwZZ7oDpCHLdyw",
    name: "Kia Seltos",
    features: ["Số sàn", "5 Chỗ", "Xăng"],
    location: "Quận 3, Hồ Chí Minh",
    rating: 4.7,
    trips: 8,
    price: "1.800K /ngày",
  },
  {
    id: 4,
    image:
      "https://i1-vnexpress.vnecdn.net/2023/09/05/HondaCityTestVnE20231299jpg-1693904414.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=bqcv0pbVwRqViH8rrrGCLA",
    name: "Honda City",
    features: ["Số tự động", "5 Chỗ", "Xăng"],
    location: "Quận 7, Hồ Chí Minh",
    rating: 4.6,
    trips: 3,
    price: "1.600K /ngày",
  },
  {
    id: 5,
    image:
      "https://www.ford.com.vn/content/dam/Ford/vn/nameplate/ranger/model/wildtrak/colorizer/360/%C4%91en/vn-wildtrak-absolute-black-01.webp",
    name: "Ford Ranger",
    features: ["Số sàn", "5 Chỗ", "Dầu Diesel"],
    location: "Quận 2, Hồ Chí Minh",
    rating: 4.9,
    trips: 7,
    price: "2.000K /ngày",
  },

  {
    id: 6,
    image:
      "https://static.wixstatic.com/media/b4dcef_c841d8cb9f6b4dbfabbf40ed29333abe~mv2.png/v1/fill/w_568,h_340,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b4dcef_c841d8cb9f6b4dbfabbf40ed29333abe~mv2.png",
    name: "Toyota Camry",
    features: ["Số tự động", "5 Chỗ", "Xăng"],
    location: "Quận 5, Hồ Chí Minh",
    rating: 4.8,
    trips: 4,
    price: "2.700K /ngày",
  },
  {
    id: 7,
    image:
      "https://i1-vnexpress.vnecdn.net/2024/10/09/Hyundai-Tucson-FL-3.jpg?w=2400&h=0&q=100&dpr=1&fit=crop&s=EDsyuX3Vwf1fKNWT_th2kQ&t=image",
    name: "Hyundai Tucson",
    features: ["Số tự động", "5 Chỗ", "Dầu Diesel"],
    location: "Quận 10, Hồ Chí Minh",
    rating: 4.7,
    trips: 6,
    price: "2.300K /ngày",
  },
  {
    id: 8,
    image:
      "https://proauto.vn/wp-content/uploads/2024/05/doi-mau-noi-that-xe-mercedes-gle.png",
    name: "Mercedes GLE",
    features: ["Số tự động", "7 Chỗ", "Xăng"],
    location: "Quận 9, Hồ Chí Minh",
    rating: 4.9,
    trips: 9,
    price: "4.500K /ngày",
  },
];

function FindCar() {
  return (
    <div className="findCar-page">
      <Header></Header>
      <div className="searchbar">
        <div className="searchbar__location-time">
          <p>
            <i className="fa-solid fa-location-dot"></i>
            TP.Hồ Chí Minh
          </p>
          <p>
            <i className="fa-solid fa-calendar-days"></i>
            21:00, 02/04/2025 - 20:00, 03/04/2025
          </p>
        </div>
        <div className="searchbar__divider"></div>
        <div className="searchbar__filter">
          

        </div>
      </div>

      <CarList cars={carList} hideTitle={true}></CarList>
    </div>
  );
}

export default FindCar;

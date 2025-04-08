import CarList from "../../components/carList/CarList";
import Header from "../../components/header/Header";
import "./FindCar.css";
import "../../assets/css/Base.css";
import { useEffect, useState } from "react";
import { getCars, Car } from "../../services/carService";


function FindCar() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars();
        setCars(data);
      } catch (error) {
        console.error("Lỗi khi fetch danh sách xe:", error);
      }
    };
  
    fetchCars();
  }, []);


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

      <CarList cars={cars} hideTitle={true}></CarList>
    </div>
  );
}

export default FindCar;

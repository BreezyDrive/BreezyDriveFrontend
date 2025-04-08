import "./CarList.css";
import { getCars, Car } from "../../services/carService";
import { formatPrice } from "../../utils/formatPrice";


// Định nghĩa kiểu dữ liệu cho props
interface CarListProps {
  cars: Car[];
  hideTitle?: boolean;
}

function CarList({ cars, hideTitle = false }: CarListProps) {
  return (
    <section className="carlist">
      {!hideTitle && <h1 className="carlist__title">Xe dành cho bạn</h1>}
      <div className="carlist__container">
        {cars.map((car:Car) => (
          <div className="carlist__item" key={car.id}>
            <img
              className="carlist__item__image"
              src={car.frontImage}
              alt={car.carModel.name}
            />
            <h3 className="carlist__item--title">{car.carModel.name}</h3>

            <div className="carlist__item__feature">
              <span>
                <i className="fa-solid fa-cogs"></i> {car.transmissionType}
              </span>
              <span>
                <i className="fa-solid fa-gas-pump"></i> {car.fuelType}
              </span>
              <span>
                <i className="fa-solid fa-chair"></i> {car.seat} chỗ
              </span>
            </div>

            <div className="carlist__item__location">
              <p>
                <i className="fa-solid fa-location-dot"></i>
                {car.location}
              </p>
            </div>

            <div className="carlist__item__divider"></div>

            <div className="carlist__item__info">
              <div className="carlist__item__details">
                <div className="carlist__item__rating">
                  <i className="fa-solid fa-star"></i>
                  <span>5</span>
                </div>
                <div className="carlist__item__tripnumber">
                  <i className="fa-solid fa-car-side"></i>
                  <span>{car.numberOfReservation} chuyến</span>
                </div>
              </div>

              <div className="carlist__item__price">
                <span>{formatPrice(car.pricePerDay)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CarList;

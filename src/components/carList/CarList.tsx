import "./CarList.css";

interface Car {
  id: number;
  image: string;
  name: string;
  features: string[];
  location: string;
  rating: number;
  trips: number;
  price: string;
}

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
              src={car.image}
              alt={car.name}
            />
            <h3 className="carlist__item--title">{car.name}</h3>

            <div className="carlist__item__feature">
              {car.features.map((feature, index) => (
                <span key={index}>
                  <i
                    className={
                      feature.includes("Số sàn") ||
                      feature.includes("Số tự động")
                        ? "fa-solid fa-cogs"
                        : feature.includes("Chỗ")
                        ? "fa-solid fa-chair"
                        : "fa-solid fa-gas-pump"
                    }
                  ></i>{" "}
                  {feature}
                </span>
              ))}
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
                  <span>{car.rating}</span>
                </div>
                <div className="carlist__item__tripnumber">
                  <i className="fa-solid fa-car-side"></i>
                  <span>{car.trips} chuyến</span>
                </div>
              </div>

              <div className="carlist__item__price">
                <span>{car.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CarList;

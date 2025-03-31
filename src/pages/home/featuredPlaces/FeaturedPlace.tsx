import './FeaturedPlace.css'

const places = [
  {
    id: 1,
    name: 'TP. Hồ Chí Minh',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1200',
    cars: '5000+ xe'
  },
  {
    id: 2,
    name: 'Hà Nội',
    image: 'https://vcdn1-dulich.vnecdn.net/2022/05/12/Hanoi2-1652338755-3632-1652338809.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=NxMN93PTvOTnHNryMx3xJw',
    cars: '2500+ xe'
  },
  {
    id: 3,
    name: 'Đà Nẵng',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1200',
    cars: '500+ xe'
  },
  {
    id: 4,
    name: 'Bình Dương',
    image: 'https://i2.ex-cdn.com/crystalbay.com/files/content/2024/06/11/du-lich-binh-duong-20-1342.jpg',
    cars: '500+ xe'
  }
]

function FeaturedPlace() {
  return (
    <section className="featured">
      <h2 className="featured__title">Địa Điểm Nổi Bật</h2>
      
      <div className="featured__grid">
        {places.map(place => (
          <div key={place.id} className="featured__card">
            <div className="featured__image">
              <img src={place.image} alt={place.name} />
            </div>
            <div className="featured__content">
              <h3>{place.name}</h3>
              <p>{place.cars}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedPlace

import './Searchbox.css'

function Searchbox() {
  return (
    <div className="searchbox">
      <div className="search-form">
        <div className="search-form__field">
          <span className="search-form__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#141414" strokeWidth="1.5"/>
              <path d="M12 22C12 22 19 16 19 10C19 5.58172 15.9183 2 12 2C8.08172 2 5 5.58172 5 10C5 16 12 22 12 22Z" stroke="#141414" strokeWidth="1.5"/>
            </svg>
          </span>
          <div>
            <label>Địa điểm</label>
            <select>
              <option>TP. Hồ Chí Minh</option>
              <option>Hà Nội</option>
              <option>Đà Nẵng</option>
            </select>
          </div>
        </div>

        <div className="search-form__field">
          <span className="search-form__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 2V5" stroke="#141414" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M16 2V5" stroke="#141414" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M3 8H21" stroke="#141414" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M3 9C3 7.11438 3 6.17157 3.58579 5.58579C4.17157 5 5.11438 5 7 5H17C18.8856 5 19.8284 5 20.4142 5.58579C21 6.17157 21 7.11438 21 9V17C21 18.8856 21 19.8284 20.4142 20.4142C19.8284 21 18.8856 21 17 21H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V9Z" stroke="#141414" strokeWidth="1.5"/>
            </svg>
          </span>
          <div>
            <label>Thời gian thuê</label>
            <select>
              <option>21:00, 31/03/2025 - 20:00, 01/04/2025</option>
            </select>
          </div>
        </div>

        <button type="submit" className="search-button">
          Tìm Xe
        </button>
      </div>
    </div>
  )
}

export default Searchbox

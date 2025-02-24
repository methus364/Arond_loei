

const Bookingform = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa", // สีพื้นหลัง
        padding: "20px",
      }}
    >
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="display-4">จองห้องพัก</h1>
        <p className="text-secondary">ห้องพักราคาดี ใกล้มหาลัย พร้อมบริการครบครัน</p>
      </div>

      {/* Booking Form */}
      <div
        className="card shadow"
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <form>
          {/* Room Type */}
          <div className="mb-3">
            <label htmlFor="roomType" className="form-label">
              ประเภทห้องพัก
            </label>
            <select className="form-select" id="roomType">
              <option value="single">ห้องเดี่ยว</option>
              <option value="double">ห้องคู่</option>
              <option value="suite">ห้องสวีท</option>
            </select>
          </div>

          {/* Check-in Date */}
          <div className="mb-3">
            <label htmlFor="checkInDate" className="form-label">
              วันที่เช็คอิน
            </label>
            <input
              type="date"
              className="form-control"
              id="checkInDate"
              required
            />
          </div>

          {/* Check-out Date */}
          <div className="mb-3">
            <label htmlFor="checkOutDate" className="form-label">
              วันที่เช็คเอาท์
            </label>
            <input
              type="date"
              className="form-control"
              id="checkOutDate"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            จองเลย
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bookingform;

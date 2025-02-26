import React, { useState } from "react";

const BookingForm = () => {
  // ข้อมูลห้องพัก
  const rooms = [
    { id: 1, roomNumber: "101", price: 2000, beds: 1, image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg" },
    { id: 2, roomNumber: "102", price: 2500, beds: 2, image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg" },
    { id: 3, roomNumber: "103", price: 3000, beds: 1, image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg" },
    { id: 4, roomNumber: "104", price: 3500, beds: 2, image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg" },
  ];

  // State สำหรับควบคุม Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // เปิด Modal พร้อมกำหนดห้องที่เลือก
  const handleBookRoom = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  // ปิด Modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRoom(null);
  };

  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          backgroundColor: "#f8f9fa", // สีพื้นหลัง
          padding: "20px",
        }}
      >

        {/* List ของห้องพัก */}
        <div className="container">
          <div className="row">
            {rooms.map((room) => (
              <div className="col-md-6 col-lg-4 mb-4" key={room.id}>
                <div className="card shadow">
                  <img
                    src={room.image}
                    className="card-img-top"
                    alt={`Room ${room.roomNumber}`}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">ห้อง {room.roomNumber}</h5>
                    <p className="card-text">ราคา: {room.price} บาท</p>
                    <p className="card-text">เตียงนอน: {room.beds} เตียง</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleBookRoom(room)}
                    >
                      จอง
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal สำหรับแบบฟอร์มการจอง */}
        {showModal && (
          <div
            className="modal d-block"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="modal-dialog"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "20px",
                width: "400px",
              }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    จองห้อง {selectedRoom?.roomNumber}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    {/* Room Number (แสดงข้อมูลห้องที่เลือก) */}
                    <div className="mb-3">
                      <label htmlFor="roomNumber" className="form-label">
                        หมายเลขห้อง
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="roomNumber"
                        value={`ห้อง ${selectedRoom?.roomNumber}`}
                        readOnly
                      />
                    </div>

                    {/* Check-in Date */}
                    <div className="mb-3">
                      <label htmlFor="checkInDate" className="form-label">
                        วันที่เข้าพัก
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="checkInDate"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100">
                      จองเลย
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    ปิด
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default BookingForm;

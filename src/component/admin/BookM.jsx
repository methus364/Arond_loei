import  { useState } from "react";

const BookM = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const bookingDetails = [
    {
      roomNumber: "101",
      guestName: "คุณสมชาย ใจดี",
      checkInDate: "2025-02-25",
      checkOutDate: "2025-02-28",
      guests: 2,
      roomRate: 5000,
      totalAmount: 5000,
      image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
    },
    {
      roomNumber: "102",
      guestName: "คุณสมหญิง ใจดี",
      checkInDate: "2025-02-26",
      checkOutDate: "2025-02-29",
      guests: 3,
      roomRate: 5500,
      totalAmount: 5500,
      image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
    },
  ];

  const handleConfirmClick = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRoom(null);
  };

  return (
    <div className="container mt-5">
      {bookingDetails.map((detail, index) => (
        <div className="card shadow mb-4" key={index}>
          <div className="card-header bg-primary text-white text-center">
            <h2>ยืนยันการจองห้องพัก</h2>
          </div>
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-md-4">
                <img
                  src={detail.image}
                  alt={`Room ${detail.roomNumber}`}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-8">
                <h4 className="mb-3">รายละเอียดการจอง</h4>
                <p>
                  <strong>หมายเลขห้อง:</strong> {detail.roomNumber}
                </p>
                <p>
                  <strong>ชื่อผู้จอง:</strong> {detail.guestName}
                </p>
                <p>
                  <strong>วันที่เข้าพัก:</strong> {detail.checkInDate}
                </p>
                <p>
                  <strong>วันที่ออก:</strong> {detail.checkOutDate}
                </p>
                <p>
                  <strong>จำนวนผู้เข้าพัก:</strong> {detail.guests} คน
                </p>
                <p>
                  <strong>ค่าเช่าห้อง:</strong> {detail.roomRate.toLocaleString()} บาท
                </p>
                <p>
                  <strong>รวมค่าบริการทั้งหมด:</strong> {detail.totalAmount.toLocaleString()} บาท
                </p>
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-success me-2"
                onClick={() => handleConfirmClick(detail)}
              >
                ยืนยันการจอง
              </button>
              <button className="btn btn-secondary">ยกเลิก</button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal Popup */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">ยืนยันการจอง</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  คุณต้องการยืนยันการจองห้องหมายเลข{" "}
                  <strong>{selectedRoom.roomNumber}</strong> หรือไม่?
                </p>
                <p>ชื่อผู้จอง: {selectedRoom.guestName}</p>
                <p>รวมค่าบริการทั้งหมด: {selectedRoom.totalAmount.toLocaleString()} บาท</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleCloseModal}
                >
                  ยืนยัน
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookM;

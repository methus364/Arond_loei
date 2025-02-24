import { useState } from "react";

const Fixed = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingDetails, setBookingDetails] = useState([
    {
      roomNumber: "101",
      guestName: "คุณสมชาย ใจดี",
      problem: 2,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit consectetur sapiente tempora expedita alias perspiciatis, amet officia omnis nisi! Beatae maiores corrupti exercitationem sapiente eius necessitatibus totam similique molestiae voluptas!",
      date: "2025-02-26",
      image: [
        "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
        "https://cdn.pixabay.com/photo/2014/07/23/15/03/cent-400247_960_720.jpg",
      ],
    },
    {
      roomNumber: "102",
      guestName: "คุณสมหญิง ใจดี",
      problem: 1,
      description:
        "Aliquid dolorem quia, voluptate nostrum amet porro nihil molestias ullam tempore eos labore repellat dolore eius ipsam quae explicabo error suscipit!",
      date: "2025-02-27",
      image: [
        "https://cdn.pixabay.com/photo/2019/07/30/05/41/interior-4372112_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/09/28/14/33/bedroom-961799_960_720.jpg",
      ],
    },
  ]);

  const handleConfirmClick = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRoom(null);
  };

  const handleDelete = (roomNumber) => {
    const updatedDetails = bookingDetails.filter(
      (detail) => detail.roomNumber !== roomNumber
    );
    setBookingDetails(updatedDetails);
  };

  return (
    <div className="container mt-5">
      {bookingDetails.map((detail, index) => (
        <div className="card shadow mb-4" key={index}>
          <div className="card-header bg-primary text-white text-center">
            <h2>รายละเอียดปัญหาห้องพัก</h2>
          </div>
          <div className="card-body">
            <div className="row mb-4">
              <div className="col-md-4">
                <img
                  src={detail.image[0]}
                  alt={`Room ${detail.roomNumber}`}
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-8">
                <h4 className="mb-3">รายละเอียด</h4>
                <p>
                  <strong>หมายเลขห้อง:</strong> {detail.roomNumber}
                </p>
                <p>
                  <strong>ชื่อผู้แจ้ง:</strong> {detail.guestName}
                </p>
                <p>
                  <strong>ปัญหาที่พบ:</strong> {detail.problem} รายการ
                </p>
                <p>
                  <strong>คำอธิบายปัญหา:</strong> {detail.description}
                </p>
                <p>
                  <strong>วันที่แจ้ง:</strong> {detail.date}
                </p>
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary me-2"
                onClick={() => handleConfirmClick(detail)}
              >
                รายละเอียดเพิ่มเติม
              </button>
              <button
                className="btn btn-success"
                onClick={() => handleDelete(detail.roomNumber)}
              >
                ซ่อมเรียบร้อย
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal Popup */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">รายละเอียดปัญหาห้อง {selectedRoom.roomNumber}</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>ชื่อผู้แจ้ง:</strong> {selectedRoom.guestName}
                </p>
                <p>
                  <strong>วันที่แจ้ง:</strong> {selectedRoom.date}
                </p>
                <p>
                  <strong>ปัญหาที่พบ:</strong> {selectedRoom.problem} รายการ
                </p>
                <p>
                  <strong>คำอธิบายปัญหา:</strong> {selectedRoom.description}
                </p>
                <div className="row">
                  {selectedRoom.image.map((img, idx) => (
                    <div className="col-md-6 mb-3" key={idx}>
                      <img
                        src={img}
                        alt={`Room Issue ${idx + 1}`}
                        className="img-fluid rounded shadow"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleCloseModal}
                >
                  ตกลง
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

export default Fixed;

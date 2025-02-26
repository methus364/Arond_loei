import { useState } from "react";

const RoomList = () => {
    const [rooms, setRooms] = useState([
        {
          roomNumber: "101",
          image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
          status: "ว่าง",
          isPaid: false,
          owner: null,
        },
        {
          roomNumber: "102",
          image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
          status: "ไม่ว่าง",
          isPaid: true,
          bill: {
            amount: 5000,
            date: "2025-02-20",
          },
          owner: {
            name: "อนุชา พัฒนศิริ",
            phone: "080-123-4567",
          },
        },
        {
          roomNumber: "103",
          image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
          status: "ไม่ว่าง",
          isPaid: false,
          bill: {
            amount: 4500,
            date: "2025-02-18",
          },
          owner: {
            name: "ปริญญา ใจดี",
            phone: "091-234-5678",
          },
        },
        {
          roomNumber: "104",
          image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
          status: "ไม่ว่าง",
          isPaid: true,
          bill: {
            amount: 4000,
            date: "2025-02-19",
          },
          owner: {
            name: "สุมาลี คงมั่น",
            phone: "082-345-6789",
          },
        },
        {
          roomNumber: "105",
          image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
          status: "ไม่ว่าง",
          isPaid: false,
          bill: {
            amount: 4800,
            date: "2025-02-21",
          },
          owner: {
            name: "วิทยา สายบุญ",
            phone: "083-456-7890",
          },
        },
      ]);
      

  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">รายการห้องพัก</h1>

      <div className="row">
        {rooms.map((room, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow">
              <img
                src={room.image}
                alt={`Room ${room.roomNumber}`}
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title">ห้อง {room.roomNumber}</h5>
                <p className={`badge ${room.status === "ว่าง" ? "bg-success" : "bg-danger"}`}>
                  {room.status}
                </p>
                <button
                  className={`btn mt-2 ${
                    room.status === "ว่าง"
                      ? "btn-secondary"
                      : room.isPaid
                      ? "btn-primary"
                      : "btn-warning"
                  }`}
                  onClick={() => room.status !== "ว่าง" && handleRoomClick(room)}
                  disabled={room.status === "ว่าง"}
                >
                  {room.status === "ว่าง"
                    ? "ว่าง"
                    : room.isPaid
                    ? "ดูรายละเอียด"
                    : "ยังไม่จ่าย"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal แสดงสถานะการชำระเงิน */}
      {/* Modal แสดงสถานะการชำระเงิน */}
{selectedRoom && (
  <div className="modal show d-block" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">รายละเอียดห้องพัก</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleCloseModal}
          ></button>
        </div>
        <div className="modal-body">
          <p>หมายเลขห้อง: {selectedRoom.roomNumber}</p>
          <p>สถานะ: {selectedRoom.status}</p>
          <p>
            สถานะการชำระเงิน:{" "}
            <span className={selectedRoom.isPaid ? "text-success" : "text-danger"}>
              {selectedRoom.isPaid ? "ชำระแล้ว" : "ยังไม่ได้ชำระ"}
            </span>
          </p>
          {selectedRoom.bill && (
            <>
              <p>ค่าใช้จ่าย: {selectedRoom.bill.amount.toLocaleString()} บาท</p>
              <p>วันที่บิล: {selectedRoom.bill.date}</p>
            </>
          )}
          {selectedRoom.owner && (
            <>
              <p>ชื่อเจ้าของห้อง: {selectedRoom.owner.name}</p>
              <p>เบอร์โทรติดต่อ: {selectedRoom.owner.phone}</p>
            </>
          )}
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
  );
};

export default RoomList;

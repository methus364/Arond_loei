import { useState } from "react";

const Memberlist = () => {
  const [users, setUsers] = useState([
    {
      roomNumber: "101",
      name: "อนุชา พัฒนศิริ",
      phone: "080-123-4567",
      checkInDate: "2025-02-10",
      image: "https://cdn.pixabay.com/photo/2019/03/23/07/44/girl-4074833_1280.jpg",
    },
    {
      roomNumber: "102",
      name: "ปริญญา ใจดี",
      phone: "091-234-5678",
      checkInDate: "2025-02-12",
      image: "https://cdn.pixabay.com/photo/2014/12/06/19/46/girl-559307_1280.jpg",
    },
    {
      roomNumber: "103",
      name: "สุมาลี คงมั่น",
      phone: "082-345-6789",
      checkInDate: "2025-02-15",
      image: "https://cdn.pixabay.com/photo/2016/10/12/03/02/girl-1733364_1280.jpg",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">รายชื่อผู้พัก</h1>
      <div className="row">
        {users.map((user, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow">
              <div
                className="card-img-top"
                style={{
                  height: "200px",
                  backgroundColor: "#f8f9fa", // สีพื้นหลังของกรอบ
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={user.image}
                  alt={`Room ${user.roomNumber}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain", // ปรับให้รูปพอดีกับกรอบ
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">ห้อง {user.roomNumber}</h5>
                <p>ชื่อ: {user.name}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUserClick(user)}
                >
                  แสดงรายละเอียด
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal แสดงรายละเอียด */}
      {selectedUser && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">รายละเอียดผู้พัก</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>เลขห้อง: {selectedUser.roomNumber}</p>
                <p>ชื่อ: {selectedUser.name}</p>
                <p>เบอร์โทร: {selectedUser.phone}</p>
                <p>วันที่เข้าพัก: {selectedUser.checkInDate}</p>
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

export default Memberlist;

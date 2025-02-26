import { useState } from "react";
import { rooms as initialRooms } from "../../room"; // นำเข้าข้อมูลจาก roomsData.js

const RoomTable = () => {
  const [rooms, setRooms] = useState(initialRooms);
  const [editingRoom, setEditingRoom] = useState(null); // สำหรับแก้ไขห้อง
  const [newRoom, setNewRoom] = useState({
    roomNumber: "",
    status: "",
    beds: "",
    image: "",
    electric: "",
    water: "",
  }); // ข้อมูลห้องใหม่

  // ฟังก์ชันเพิ่มห้อง
  const addRoom = () => {
    if (
      newRoom.roomNumber &&
      newRoom.status &&
      newRoom.beds &&
      newRoom.image &&
      newRoom.electric &&
      newRoom.water
    ) {
      const newRoomData = { ...newRoom, id: rooms.length + 1 };
      setRooms([...rooms, newRoomData]);
      setNewRoom({
        roomNumber: "",
        status: "",
        beds: "",
        image: "",
        electric: "",
        water: "",
      }); // รีเซ็ตฟอร์ม
    } else {
      alert("กรุณากรอกข้อมูลให้ครบ");
    }
  };

  // ฟังก์ชันลบห้อง
  const deleteRoom = (id) => {
    const updatedRooms = rooms.filter((room) => room.id !== id);
    setRooms(updatedRooms);
  };

  // ฟังก์ชันบันทึกการแก้ไข
  const saveEdit = () => {
    const updatedRooms = rooms.map((room) =>
      room.id === editingRoom.id ? editingRoom : room
    );
    setRooms(updatedRooms);
    setEditingRoom(null);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">ตารางห้องพัก</h1>

      {/* Form เพิ่มห้อง */}
      <div className="mb-4">
        <h3>เพิ่มห้องพัก</h3>
        <div className="d-flex flex-wrap gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="หมายเลขห้อง"
            value={newRoom.roomNumber}
            onChange={(e) => setNewRoom({ ...newRoom, roomNumber: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="สถานะ"
            value={newRoom.status}
            onChange={(e) => setNewRoom({ ...newRoom, status: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="เตียง"
            value={newRoom.beds}
            onChange={(e) => setNewRoom({ ...newRoom, beds: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            placeholder="URL ภาพ"
            value={newRoom.image}
            onChange={(e) => setNewRoom({ ...newRoom, image: e.target.value })}
          />
          <input
            type="number"
            className="form-control"
            placeholder="ค่าไฟต่อหน่วย"
            value={newRoom.electric}
            onChange={(e) => setNewRoom({ ...newRoom, electric: e.target.value })}
          />
          <input
            type="number"
            className="form-control"
            placeholder="ค่าน้ำต่อหน่วย"
            value={newRoom.water}
            onChange={(e) => setNewRoom({ ...newRoom, water: e.target.value })}
          />
          <button className="btn btn-success" onClick={addRoom}>
            เพิ่มห้อง
          </button>
        </div>
      </div>

      {/* ตารางแสดงข้อมูล */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>หมายเลขห้อง</th>
            <th>สถานะ</th>
            <th>เตียง</th>
            <th>ภาพห้องพัก</th>
            <th>ค่าไฟต่อหน่วย</th>
            <th>ค่าน้ำต่อหน่วย</th>
            <th>การจัดการ</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.id}>
              <td>
                {editingRoom?.id === room.id ? (
                  <input
                    type="text"
                    className="form-control"
                    value={editingRoom.roomNumber}
                    onChange={(e) =>
                      setEditingRoom({ ...editingRoom, roomNumber: e.target.value })
                    }
                  />
                ) : (
                  room.roomNumber
                )}
              </td>
              <td>
                {editingRoom?.id === room.id ? (
                  <input
                    type="text"
                    className="form-control"
                    value={editingRoom.status}
                    onChange={(e) =>
                      setEditingRoom({ ...editingRoom, status: e.target.value })
                    }
                  />
                ) : (
                  room.status
                )}
              </td>
              <td>
                {editingRoom?.id === room.id ? (
                  <input
                    type="text"
                    className="form-control"
                    value={editingRoom.beds}
                    onChange={(e) =>
                      setEditingRoom({ ...editingRoom, beds: e.target.value })
                    }
                  />
                ) : (
                  room.beds
                )}
              </td>
              <td>
                {editingRoom?.id === room.id ? (
                  <input
                    type="text"
                    className="form-control"
                    value={editingRoom.image}
                    onChange={(e) =>
                      setEditingRoom({ ...editingRoom, image: e.target.value })
                    }
                  />
                ) : (
                  <img
                    src={room.image}
                    alt={`Room ${room.roomNumber}`}
                    style={{ width: "100px", height: "auto" }}
                  />
                )}
              </td>
              <td>
                {editingRoom?.id === room.id ? (
                  <input
                    type="number"
                    className="form-control"
                    value={editingRoom.electric}
                    onChange={(e) =>
                      setEditingRoom({ ...editingRoom, electric: e.target.value })
                    }
                  />
                ) : (
                  `${room.electric} บาท`
                )}
              </td>
              <td>
                {editingRoom?.id === room.id ? (
                  <input
                    type="number"
                    className="form-control"
                    value={editingRoom.water}
                    onChange={(e) =>
                      setEditingRoom({ ...editingRoom, water: e.target.value })
                    }
                  />
                ) : (
                  `${room.water} บาท`
                )}
              </td>
              <td>
                {editingRoom?.id === room.id ? (
                  <button className="btn btn-success btn-sm me-2" onClick={saveEdit}>
                    บันทึก
                  </button>
                ) : (
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => setEditingRoom(room)}
                  >
                    แก้ไข
                  </button>
                )}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteRoom(room.id)}
                >
                  ลบ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomTable;

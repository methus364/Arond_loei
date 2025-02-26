import React, { useState } from "react";

const InvoiceForm = () => {
  // ข้อมูลใบแจ้งหนี้
  const [invoiceData, setInvoiceData] = useState({
    roomNumber: "101",
    electricity: 1200,
    water: 300,
    rent: 5000,
    total: 6500,
    date: "2025-02-25",
    image:
      "https://www.scb.co.th/getmedia/2f609c0d-4ec2-4682-a194-137f66371bad/qr-code-generated-7.jpg",
  });

  // State สำหรับควบคุม Pop-up แจ้งเตือน
  const [showPopup, setShowPopup] = useState(false);

  // ฟังก์ชันจัดการการอัปโหลดรูปภาพ
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setInvoiceData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // ฟังก์ชันจัดการการกดปุ่มยืนยัน
  const handleConfirm = () => {
    setShowPopup(true); // แสดง Pop-up
    setTimeout(() => {
      setShowPopup(false); // ซ่อน Pop-up หลังจาก 3 วินาที
    }, 3000);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg">
            {/* หัวข้อ */}
            <div className="card-header bg-primary text-white text-center py-3">
              <h2 className="mb-0">ใบแจ้งหนี้ห้องพัก</h2>
            </div>

            {/* เนื้อหา */}
            <div className="card-body">
              {/* วันที่ */}
              <div className="mb-4 text-center">
                <label className="form-label">
                  <strong>วันที่</strong>
                </label>
                <p className="mb-0">{invoiceData.date}</p>
              </div>

              {/* ฟอร์มแสดงข้อมูล */}
              <form>
                <div className="mb-3">
                  <label className="form-label">
                    <strong>หมายเลขห้อง</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={invoiceData.roomNumber}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <strong>ค่าไฟฟ้า (บาท)</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={`${invoiceData.electricity} บาท`}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <strong>ค่าน้ำประปา (บาท)</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={`${invoiceData.water} บาท`}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <strong>ค่าเช่าห้อง (บาท)</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={`${invoiceData.rent} บาท`}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    <strong>รวมทั้งหมด (บาท)</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control text-danger fw-bold"
                    value={`${invoiceData.total} บาท`}
                    readOnly
                  />
                </div>

                {/* รูปภาพ */}
                <div className="text-center mt-4">
                  <div>
                    <label className="form-label">
                      <strong>แนบหลักฐานการโอน</strong>
                    </label>
                    <input
                      type="file"
                      className="mb-3 form-control"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    <img
                      src={invoiceData.image}
                      alt={`Room ${invoiceData.roomNumber}`}
                      className="img-fluid rounded shadow mb-3"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>

                {/* ปุ่มยืนยัน */}
                <div className="text-center mt-4">
                  <button
                    type="button"
                    className="btn btn-success px-5"
                    onClick={handleConfirm}
                  >
                    ยืนยัน
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Pop-up แจ้งเตือน */}
      {showPopup && (
        <div
          className="alert alert-success text-center position-fixed top-50 start-50 translate-middle"
          style={{ zIndex: 1050, width: "300px" }}
        >
          <strong>ทำรายการสำเร็จ!</strong>
        </div>
      )}
    </div>
  );
};

export default InvoiceForm;

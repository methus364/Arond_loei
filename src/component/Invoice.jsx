

const InvoiceForm = () => {
  // ข้อมูลใบแจ้งหนี้
  const invoiceData = {
    roomNumber: "101",
    electricity: 1200,
    water: 300,
    rent: 5000,
    total: 6500,
    date: "2025-02-25",
    image: 'https://www.scb.co.th/getmedia/2f609c0d-4ec2-4682-a194-137f66371bad/qr-code-generated-7.jpg', // ใส่ URL ของรูปจริงได้
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
              </form>

              {/* รูปภาพ */}
              <div className="text-center mt-4">
                <img
                  src={invoiceData.image}
                  alt={`Room ${invoiceData.roomNumber}`}
                  className="img-fluid rounded shadow"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;

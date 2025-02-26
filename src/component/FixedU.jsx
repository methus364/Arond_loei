import  { useState } from "react";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    roomNumber: "",
    description: "",
    date: "",
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });

    // แสดงตัวอย่างภาพ
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ข้อมูลที่ส่ง:", formData);

    alert("ส่งข้อมูลสำเร็จ!");
    setFormData({
      roomNumber: "",
      description: "",
      date: "",
      images: [],
    });
    setImagePreviews([]);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">แบบฟอร์มแจ้งปัญหา</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="roomNumber" className="form-label">
            เลขห้อง
          </label>
          <input
            type="text"
            id="roomNumber"
            name="roomNumber"
            className="form-control"
            placeholder="กรอกเลขห้อง"
            value={formData.roomNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            คำอธิบาย
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            rows="4"
            placeholder="กรอกคำอธิบายปัญหา"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            วันที่
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUpload" className="form-label">
            รูปภาพ
          </label>
          <input
            type="file"
            id="imageUpload"
            name="imageUpload"
            className="form-control"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
          <div className="d-flex flex-wrap mt-3">
            {imagePreviews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Uploaded Preview ${index + 1}`}
                className="me-2 mb-2"
                style={{ maxWidth: "150px", maxHeight: "150px", borderRadius: "8px" }}
              />
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          ส่งข้อมูล
        </button>
      </form>
    </div>
  );
};

export default ReportForm;

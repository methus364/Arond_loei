import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("รหัสผ่านไม่ตรงกัน!");
            return;
        }
        console.log("ข้อมูลที่ส่ง:", formData);
        alert("ลงทะเบียนสำเร็จ!");
        // ส่งข้อมูลไปยัง API หรือจัดการข้อมูลที่นี่
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">สมัครสมาชิก</h1>
            <form className="p-4 shadow rounded" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        ชื่อ:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        อีเมล:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        เบอร์โทรศัพท์:
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        รหัสผ่าน:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                        ยืนยันรหัสผ่าน:
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-control"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <NavLink to={'/login'}>
                    <button type="submit" className="btn btn-primary w-100">
                        สมัครสมาชิก
                    </button>
                </NavLink>
            </form>
        </div>
    );
};

export default Register;

import  { useState } from "react";
import {Expenses as initialExpenses} from "../../room"

const ExpenseForm = () => {
    const [expenses, setExpenses] = useState(initialExpenses);
    const [formData, setFormData] = useState({
        roomNumber: "",
        electricityUnits: "",
        waterUnits: "",
        roomRate: "",
        date: "",
    });

    // ฟังก์ชันจัดการการเปลี่ยนแปลงในฟอร์ม
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ฟังก์ชันเพิ่มข้อมูล
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            formData.roomNumber &&
            formData.electricityUnits &&
            formData.waterUnits &&
            formData.roomRate &&
            formData.date
        ) {
            const newExpense = {
                roomNumber: formData.roomNumber,
                electricityUnits: parseInt(formData.electricityUnits, 10),
                waterUnits: parseInt(formData.waterUnits, 10),
                roomRate: parseInt(formData.roomRate, 10),
                date: formData.date,
            };
            setExpenses([...expenses, newExpense]);
            setFormData({
                roomNumber: "",
                electricityUnits: "",
                waterUnits: "",
                roomRate: "",
                date: "",
            });
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">บันทึกค่าใช้จ่ายรายเดือน</h1>
            {/* ฟอร์มกรอกข้อมูล */}
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                    <label htmlFor="roomNumber" className="form-label">
                        หมายเลขห้อง
                    </label>
                    <input
                        type="text"
                        id="roomNumber"
                        name="roomNumber"
                        value={formData.roomNumber}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="electricityUnits" className="form-label">
                        หน่วยไฟฟ้า
                    </label>
                    <input
                        type="number"
                        id="electricityUnits"
                        name="electricityUnits"
                        value={formData.electricityUnits}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="waterUnits" className="form-label">
                        หน่วยน้ำ
                    </label>
                    <input
                        type="number"
                        id="waterUnits"
                        name="waterUnits"
                        value={formData.waterUnits}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="roomRate" className="form-label">
                        ค่าเช่าห้อง
                    </label>
                    <input
                        type="number"
                        id="roomRate"
                        name="roomRate"
                        value={formData.roomRate}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                        วันที่
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    เพิ่มข้อมูล
                </button>
            </form>

           
        </div>
    );
};

export default ExpenseForm;

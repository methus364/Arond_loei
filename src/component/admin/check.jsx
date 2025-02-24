import { useState } from "react";
import { Expenses as initialExpenses } from "../../room";

const ExpenseTable = () => {
    const [expenses] = useState(initialExpenses);
    const [startDate, setStartDate] = useState("");


    const electricityRate = 5; // บาทต่อหน่วย
    const waterRate = 20; // บาทต่อหน่วย

    // ฟังก์ชันกรองข้อมูลตามช่วงวันที่
    const filteredExpenses = expenses.filter((expense) => {
        const expenseDate = new Date(expense.date);
        const start = startDate ? new Date(startDate) : null;

        return (
            (!start || expenseDate >= start)
        );
    });

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">ค่าใช้จ่ายรายเดือน</h1>

            {/* ฟิลเตอร์วันที่ */}
            <div className="mb-4 d-flex justify-content-center">
                <div className="me-2">
                    <label htmlFor="startDate" className="form-label">
                            เลือกเดือน
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="form-control"
                    />
                </div>
            </div>

            {/* ตารางแสดงข้อมูล */}
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>หมายเลขห้อง</th>
                        <th>ค่าไฟฟ้า (บาท)</th>
                        <th>ค่าน้ำประปา (บาท)</th>
                        <th>ค่าเช่าห้อง (บาท)</th>
                        <th>รวม (บาท)</th>
                        <th>วันที่</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredExpenses.map((expense, index) => {
                        const electricityCost =
                            expense.electricityUnits * electricityRate;
                        const waterCost = expense.waterUnits * waterRate;
                        const total =
                            electricityCost + waterCost + expense.roomRate;

                        return (
                            <tr key={index}>
                                <td>{expense.roomNumber}</td>
                                <td>{electricityCost.toLocaleString()}</td>
                                <td>{waterCost.toLocaleString()}</td>
                                <td>{expense.roomRate.toLocaleString()}</td>
                                <td>{total.toLocaleString()}</td>
                                <td>{expense.date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseTable;

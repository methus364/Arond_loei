import  { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { bookings as initialBookings } from "../../room"; // นำเข้าข้อมูลจากไฟล์ข้อมูล

const ReportPage = () => {
    const [startDate, setStartDate] = useState("2025-02-01"); // วันที่เริ่มต้นเริ่มต้น
    const [endDate, setEndDate] = useState("2025-02-28"); // วันที่สิ้นสุดเริ่มต้น

    // ฟังก์ชันกรองข้อมูลตามช่วงวันที่
    const filteredData = initialBookings.filter(
        (booking) => booking.date >= startDate && booking.date <= endDate
    );

    // คำนวณจำนวนผู้เข้าพักทั้งหมด
    const totalGuests = filteredData.reduce((total, booking) => total + booking.guests, 0);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">รายงานจำนวนผู้เข้าพัก</h1>

            {/* ตัวเลือกช่วงวันที่ */}
            <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="me-3">
                    <label htmlFor="start-date" className="form-label">
                        วันที่เริ่มต้น:
                    </label>
                    <input
                        type="date"
                        id="start-date"
                        className="form-control"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="end-date" className="form-label">
                        วันที่สิ้นสุด:
                    </label>
                    <input
                        type="date"
                        id="end-date"
                        className="form-control"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>

            {/* แสดงข้อความเมื่อไม่มีข้อมูล */}
            {filteredData.length === 0 ? (
                <p className="text-center text-danger">ไม่มีข้อมูลในช่วงวันที่ที่เลือก</p>
            ) : (
                <>
                    {/* กราฟแสดงข้อมูล */}
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="date"
                                label={{ value: "วันที่", position: "insideBottom", dy: 10 }}
                                tick={{ fontSize: 12 }}
                            />
                            <YAxis
                                label={{ value: "จำนวนผู้เข้าพัก", angle: -90, position: "insideLeft", dx: -10 }}
                                tick={{ fontSize: 12 }}
                            />
                            <Tooltip />
                            <Bar dataKey="guests" fill="#4CAF50" name="จำนวนผู้เข้าพัก" />
                        </BarChart>
                    </ResponsiveContainer>

                    {/* สรุปจำนวนผู้เข้าพักทั้งหมด */}
                    <div className="text-center mt-4">
                        <h4>
                            จำนวนผู้เข้าพักทั้งหมดในช่วงวันที่ {startDate} ถึง {endDate}:{" "}
                            <span className="text-success">{totalGuests}</span> คน
                        </h4>
                    </div>
                </>
            )}
        </div>
    );
};

export default ReportPage;

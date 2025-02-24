import { NavLink } from "react-router-dom"

const heroImage = "https://cdn.pixabay.com/photo/2015/11/02/06/46/hotel-1018039_1280.jpg"

const Hero = () => {
    return (
        <>
            <div
                className="container-fluid  d-flex flex-column  align-items-center justify-content-center"
                style={{
                    height: "100vh",
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
                <div>
                    <div
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{
                            height: "65vh",
                            width: "55vh",
                            backgroundColor: "rgba(0, 0, 0, 0.4)", // พื้นหลังสีดำโปร่งใส
                            backdropFilter: "blur(0.7px)", // เอฟเฟกต์เบลอ
                            WebkitBackdropFilter: "blur(10px)", // รองรับ Safari
                            borderRadius: "20px", // มุมโค้งมน
                            padding: "20px", // ระยะห่างภายใน
                            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)", // เงา
                        }}
                    >
                        <div className="">
                            <p className="d-block fs-1 h1 text-white">ห้องพัก</p>
                            <span className="d-block h1 text-white">ราคาดี ใกล้มหาลัย</span>
                            <NavLink to={"/booking"}>
                                <button className="btn btn-primary" type="submit">
                                    จองเลย
                                </button>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero

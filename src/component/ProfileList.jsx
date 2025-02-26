import React, { useState } from "react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
    address: "123 Main Street, Cityville",
    dob: "January 1, 1990",
    gender: "Male",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header text-center bg-primary text-white">
              <h2>Profile</h2>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/26/06/29/people-2442898_1280.jpg"
                  alt="Profile"
                  className="rounded-circle border border-3 border-primary"
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
              {isEditing ? (
                <div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Phone:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Address:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={profile.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Date of Birth:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="dob"
                      value={profile.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Gender:</label>
                    <select
                      className="form-select"
                      name="gender"
                      value={profile.gender}
                      onChange={handleChange}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-center mb-4">
                    <h4 className="fw-bold">{profile.name}</h4>
                    <p className="text-muted">{profile.email}</p>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <p className="fw-bold">Phone:</p>
                      <p className="text-muted">{profile.phone}</p>
                    </div>
                    <div className="col-md-6">
                      <p className="fw-bold">Address:</p>
                      <p className="text-muted">{profile.address}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="fw-bold">Date of Birth:</p>
                      <p className="text-muted">{profile.dob}</p>
                    </div>
                    <div className="col-md-6">
                      <p className="fw-bold">Gender:</p>
                      <p className="text-muted">{profile.gender}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="card-footer text-center">
              {isEditing ? (
                <button className="btn btn-success mx-2" onClick={handleSave}>
                  Save
                </button>
              ) : (
                <button
                  className="btn btn-primary mx-2"
                  onClick={handleEditToggle}
                >
                  Edit Profile
                </button>
              )}
              <button className="btn btn-secondary mx-2">Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

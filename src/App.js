import "./App.css";
import Form from "./components/Form";
import UserList from "./components/UserList";
import React, { useState } from 'react';
import EmbeddedDashboard from './components/EmbeddedDashboard';
import { FaBars } from "react-icons/fa";
import { PiChartLineUp } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import avatar from "./assets/avatar.jpg";
import { GiSpeedometer } from "react-icons/gi";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('form'); // Để xác định trang hiện tại
  const [isCloseButtonVisible, setIsCloseButtonVisible] = useState(false); // Thêm biến state mới
  const [isMenuIconVisible, setIsMenuIconVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCloseButtonVisible(!isCloseButtonVisible); // Khi mở hoặc đóng menu, hiển thị hoặc ẩn nút đóng
    setIsMenuIconVisible(!isMenuIconVisible);
  };

  const handleMenuClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Đóng menu khi chọn một trang
    setIsCloseButtonVisible(false); // Ẩn nút đóng khi chọn một trang
    setIsMenuIconVisible(true);
  };

  const closeSidebar = () => { // Định nghĩa hàm closeSidebar
    setIsMenuOpen(false);
    setIsCloseButtonVisible(false);
    setIsMenuIconVisible(true);
  };

  return (
    <div className={`App ${isMenuOpen ? 'menu-open' : ''}`}>
      <header>
        <div className={`menu-icon ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
          <FaBars />
        </div>
        <div className="logo"></div>
        <h1 className="app-title">CYLINDER SOLENOID ENGINE</h1>
      </header>
      <div className={`form-container ${currentPage === 'form' ? 'visible' : 'hidden'}`}>
          <Form />
          <UserList />
      </div>
      <div className={`chartmongo-container ${currentPage === 'userList2' ? 'visible' : 'hidden'}`}>
          <EmbeddedDashboard />
      </div>
      <aside className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={closeSidebar}>
          <IoCloseOutline />
        </div>
        <ul>
          <li className={currentPage === 'form' ? 'active' : ''} onClick={() => handleMenuClick('form')}><GiSpeedometer size={20} /> ENGINE SPEED CONTROL</li>
          
          <li className={currentPage === 'userList2' ? 'active' : ''} onClick={() => handleMenuClick('userList2')}><PiChartLineUp size={20} /> OBSERVATION CHART</li>
        </ul>
        <div className="profile">
          <img src={avatar} alt="Avatar" className="avatar" />
          <div className="profile-info">
            <p className="name">Nguyễn Quang Trường Hùng</p>
            <p className="email">417H0190@student.tdtu.edu.vn</p>
            <p className="major">Control and Automation Engineering</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;

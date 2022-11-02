import React from "react";
import logo from "../../assets/img/logo.png";
import avatar from "../../assets/img/profile-photo.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <a href="/" className="logo-link">
          <img src={logo} alt="Учёт преподавателей" className="logo" />
          <div className="logo-titles">
            <div className="logo-title">Учёт преподавателей</div>
            <div className="logo-title--small">сибупк</div>
          </div>
        </a>
        <div className="finder">
          <button className="find-btn">
            <AiOutlineSearch />
          </button>
          <input type="text" className="find-input" placeholder="Я ищу" />
        </div>
        <div className="profile">
          <img src={avatar} alt="Avatar" className="avatar" />
          <div className="profile-info">
            <div className="name">Бакайтис Валентина</div>
            <div className="userid">user01</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

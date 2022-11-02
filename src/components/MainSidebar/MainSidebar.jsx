import React from "react";
import "./MainSidebar.scss";
import {
  AiOutlineFieldTime,
  AiOutlineFileExcel,
  AiOutlineTeam,
} from "react-icons/ai";

const MainSidebar = () => {
  return (
    <aside className="main-sidebar">
      <div className="column">
        <a href="/docs" className="row">
          <AiOutlineFieldTime />
          Документы скоро закончатся
          <span className="lot neutral">6</span>
        </a>
        <a href="/docs" className="row">
          <AiOutlineFileExcel />
          Документы требующие обновления
          <span className="lot negative">8</span>
        </a>
      </div>
      <div className="column">
        <h2 className="facs-title">Сортировка</h2>
        <div className="facs-list">
          <a className="row">
            <AiOutlineTeam />
            Факультет Торгово- технологический
          </a>
          <a className="row">
            <AiOutlineTeam />
            Факультет Дополнительного образования
          </a>
          <a className="row">
            <AiOutlineTeam />
            Факультет Экономики и управления
            <span className="lot negative">8</span>
          </a>
          <a className="row">
            <AiOutlineTeam />
            Юридический Факультет
          </a>
        </div>
      </div>
    </aside>
  );
};

export default MainSidebar;

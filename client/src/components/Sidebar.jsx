import React from "react";
import { Link } from "react-router-dom";
import { RiCloseLargeFill, RiHomeLine } from "react-icons/ri";
import { CiBoxList } from "react-icons/ci";
import { MdAssignmentAdd, MdPrivacyTip } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

function Sidebar({ toggleSidebar }) {
  return (
    <div className="sideBar">
      <span className="menu-btn" onClick={toggleSidebar}>
        <RiCloseLargeFill />
      </span>

      <div className="sideBarTitle">
        <img
          src="./images/dashboard.png"
          alt="dashboardAvatar"
          className="dashboardAvatar"
        />
        Livraria online
      </div>

        <div className="sideBarMeanLinks">
        <nav>
        <ul>
          <li>
            <Link to="/">
              <RiHomeLine className="icon" />
              Lista de livros
            </Link>
          </li>
          <li>
            <Link to="/create-book">
              <MdAssignmentAdd className="icon" />
              Adicionar novo livro
            </Link>
          </li>
          <li>
            <Link to="/">
              <CiBoxList className="icon" />
              Link 1
            </Link>
          </li>
          <li>
            <Link to="/">
              <CiBoxList className="icon" />
              Link 2
            </Link>
          </li>
          <li>
            <Link to="/">
              <CiBoxList className="icon" />
              Link 3
            </Link>
          </li>
          <li>
            <Link to="/">
              <CiBoxList className="icon" />
              Link 4
            </Link>
          </li>
        </ul>
      </nav>
      </div>

      <div className="sideBarHelp">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <IoMdSettings className="icon" />
                Ajustes
              </Link>
            </li>
            <li>
              <Link to="/create-book">
                <MdAssignmentAdd className="icon" />
                Suporte
              </Link>
            </li>
            <li>
              <Link to="/">
                <MdPrivacyTip className="icon" />
                Segurança
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;

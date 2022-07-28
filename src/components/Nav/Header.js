import { useState } from "react";
import {
  ShopOutlined,
  HomeOutlined,
  UserOutlined,
  UserAddOutlined,
  SettingOutlined,
  HolderOutlined,
} from "@ant-design/icons";
// import { Menu } from "antd";

// const items = [
//   {
//     label: (
//       <a href="/home" rel="noopener noreferrer">
//         Home
//       </a>
//     ),
//     key: "home",
//     icon: <HomeOutlined />,
//     href: "/",
//   },
//   {
//     label: (
//       <a href="/shop" rel="noopener noreferrer">
//         Shop
//       </a>
//     ),
//     key: "shop",
//     icon: <ShopOutlined />,
//     href: "/shop",
//   },
//   {
//     label: "Categories",
//     key: "categories",
//     icon: <HolderOutlined />,
//     children: [
//       {
//         type: "group",
//         label: "Item 1",
//         children: [
//           {
//             label: "Option 1",
//             key: "setting:1",
//           },
//           {
//             label: "Option 2",
//             key: "setting:2",
//           },
//         ],
//       },
//       {
//         type: "group",
//         label: "Item 2",
//         children: [
//           {
//             label: "Option 3",
//             key: "setting:3",
//           },
//           {
//             label: "Option 4",
//             key: "setting:4",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: (
//       <a href="/register" rel="noopener noreferrer">
//         Register
//       </a>
//     ),
//     key: "register",
//     icon: <UserAddOutlined />,
//   },
//   {
//     label: (
//       <a href="/login" rel="noopener noreferrer">
//         Login
//       </a>
//     ),
//     key: "login",
//     icon: <UserOutlined />,
//     href: "/login",
//   },
//   {
//     label: (
//       <a href="/cart"  rel="noopener noreferrer">
//         Cart
//       </a>
//     ),
//     key: "cart",
//     icon: <
//   },
// ];
import { Link } from "react-router-dom";

const Header = () => {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand h1" href="index.html">
          <span className="text-white h4">En</span>
          <span className="text-danger h4">Ascuas</span>
          <span className="text-white h4">Forja</span>
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler-success"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="
          align-self-center
          collapse
          navbar-collapse
          flex-fill
          d-lg-flex
          justify-content-lg-between
        "
          id="navbar-toggler-success"
        >
          <div className="flex-fill mx-xl-5 mb-2">
            <ul
              className="
              nav
              navbar-nav
              d-flex
              justify-content-between
              mx-xl-5
              text-center text-dark
            "
            >
              <li
                className="nav-item"
                key="home"
                onClick={onClick}
                setCurrent={[current]}
                icon={<HomeOutlined />}
              >
                <a
                  className="nav-link btn-outline-danger rounded-pill px-3"
                  href="/"
                >
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn-outline-danger rounded-pill px-3"
                  href="/categories"
                  onClick={onClick}
                  setCurrent={[current]}
                >
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn-outline-danger rounded-pill px-3"
                  href="!#"
                >
                  <Link to="/shop">Shop Now</Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn-outline-danger rounded-pill px-3"
                  href="!#"
                >
                  <Link to="/login">Sign In</Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn-outline-danger rounded-pill px-3"
                  href="!#"
                >
                  <Link to="/register">Sign Up</Link>
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar align-self-center d-flex">
            <a className="nav-link" href="!#">
              <i className="fab fa-facebook text-danger"></i>
            </a>
            <a className="nav-link" href="!#">
              <i className="fab fa-instagram text-danger"></i>
            </a>
            <a className="nav-link" href="!#">
              <i className="fab fa-youtube text-danger"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

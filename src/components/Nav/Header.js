import { useState } from "react";
import {
  ShopOutlined,
  HomeOutlined,
  UserOutlined,
  UserAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    console.log(e.key);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      className="d-flex flex-row"
    >
      <Item key="home" icon={<HomeOutlined />}>
        <Link to="/"> Home</Link>
      </Item>
      <Item key="shop" icon={<ShopOutlined />}>
        <Link to="/shop"> Shop</Link>
      </Item>

      <Item key="register" icon={<UserAddOutlined />}>
        <Link to="/register"> Register</Link>
      </Item>
      <Item key="login" icon={<UserOutlined />}>
        <Link to="/login"> Login</Link>
      </Item>
      {/* <SubMenu icon={<SettingOutlined />} title="Dashboard">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
      </SubMenu> */}
    </Menu>
  );
};

export default Header;

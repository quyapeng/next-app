import React, { useRef, useState } from "react";
import { Dropdown, DropdownRef } from "antd-mobile";
// import styles from "./index.less";
import Image from "next/image";

import { NAVLIST } from "./navlist";

export default function Nav() {
  // const [activeKey, setActiveKey] = useState<string>('');
  const logo = "/logo.png";
  const icon = "/icon.png";
  const ref = useRef<DropdownRef>(null);
  const number = "/number.png";
  const [navShow, setNav] = useState(NAVLIST);
  const Number = () => {
    return (
      <a className={"btn"} href="tel:15950506885">
        <Image
          src={number}
          alt=""
          width={16}
          height={16}
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            marginRight: "8px",
          }}
        />
        电话咨询
      </a>
    );
  };
  const onChangeNav = (key: string, type?: string) => {
    console.log("kay", navShow);
    if (type) {
      // 有两级
      let tem = [];
      tem = navShow.map((i) => {
        i.active = i.key == type;
        if (i.key != type) {
          i.active = i.key == type;
        }
        return i;
      });
      setNav(tem);
    } else {
      ref.current?.close();
      window.location.href = `/${key}`;
    }
  };
  const NavItem = () => {
    return (
      <ul className={"nav-bar"}>
        {navShow.map(({ title, key, active, children }) => {
          return (
            <li
              onClick={() =>
                onChangeNav(key, children && children.length > 0 ? key : "")
              }
              className={active ? "active" : ""}
              key={key}
            >
              <a>{title}</a>
              {children && children.length > 0 ? (
                <ul>
                  {children &&
                    children.map((i) => {
                      return (
                        <li onClick={() => onChangeNav(i.key)} key={i.key}>
                          {i.title}
                        </li>
                      );
                    })}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <div className={"nav-warp"}>
        <Image
          src={logo}
          className={"nav-logo"}
          alt=""
          width={123}
          height={32}
          priority
        />
        <div className={"nav-icon"}>
          <Image src={icon} alt="" width={18} height={16} />
          <Dropdown
            ref={ref}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "30px",
              backgroundColor: "transparent",
            }}
          >
            <Dropdown.Item
              key="sorter"
              title={null}
              style={{ paddingTop: "20px", opacity: 0 }}
            >
              <NavItem />
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <Number />
    </>
  );
}

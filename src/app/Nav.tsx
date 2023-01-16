"use client";
import Dropdown from "antd-mobile/es/components/dropdown";

export default function Nav() {
  return (
    <>
      <Dropdown>
        <Dropdown.Item key="sorter" title="排序">
          <div style={{ padding: 12 }}>123</div>
        </Dropdown.Item>
      </Dropdown>
    </>
  );
}

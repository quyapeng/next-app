import Image from "next/image";
import styles from "@/styles/Home.module.css";
import info from "@/styles/Info.module.css";

export default function Tools() {
  return (
    <>
      <div className={info.info}>
        <Image
          src="/info/banner.png"
          width={"375"}
          height={"177"}
          alt=""
          style={{ margin: "0 auto", display: "block" }}
          priority
        />
        123
      </div>
    </>
  );
}

import type { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import about from "@/styles/About.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.item}>
      <h2 className={about.about_title}></h2>
      <i className={"title"}></i>
      <h6>CONTACT US</h6>
      <div style={{ margin: "0 8px", overflow: "hidden" }}>
        <Image
          src="/about/qrcode_1.png"
          width={"178"}
          height={"191"}
          alt=""
          style={{ float: "left" }}
          priority
        />
        <Image
          src="/about/qrcode_2.png"
          width={"178"}
          height={"191"}
          alt=""
          style={{ float: "right" }}
          priority
        />
      </div>
      <Image
        src="/about/logo.png"
        width={"114"}
        height={"83"}
        alt=""
        style={{ display: "block", margin: "40px auto 2px auto" }}
        priority
      />
      <Image
        src="/about/text.png"
        width={"342"}
        height={"370"}
        alt=""
        style={{ display: "block", margin: "0 auto" }}
        priority
      />
    </div>
  );
};

export default About;

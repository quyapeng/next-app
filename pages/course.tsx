import Image from "next/image";
import styles from "@/styles/Home.module.css";
import young from "@/styles/Young.module.css";

export default function Course() {
  return (
    <>
      <Image
        src="/young/banner.png"
        width={"375"}
        height={"177"}
        alt=""
        style={{ margin: "0 auto", display: "block" }}
        priority
      />
    </>
  );
}

import styles from "@/styles/Home.module.css";
import { Swiper } from "antd-mobile";
import Image from "next/image";

export default function Home() {
  const items = [
    "/index/banner_index_01.jpg",
    "/index/banner_index_02.jpg",
    "/index/banner_index_03.jpg",
  ];
  const items2 = ["/index/ban1.jpg", "/index/ban2.jpg", "/index/ban3.jpg"];
  return (
    <>
      <div className={styles.banner}>
        <Swiper autoplay style={{ height: "100%" }}>
          {items.map((item) => {
            return (
              <Swiper.Item key={item} style={{ textAlign: "center" }}>
                <Image
                  src={item}
                  alt=""
                  width={"375"}
                  height={"177"}
                  priority
                />
              </Swiper.Item>
            );
          })}
        </Swiper>
      </div>
      <div className={styles.item}>
        <h2 className={styles.title1}></h2>
        <i className={"title"}></i>
        <h3>互联网+智慧托育全新时代开启</h3>
        <p>
          专注于0-3岁孩子提供高质量育儿服务
          <br />
          多元化主题课程，丰富的游戏教具，促进孩子全脑开发
        </p>
      </div>
      <div className={styles.label_icon}>
        <div className={styles.icon1}>
          <i></i>
          <h3>托育课程</h3>
        </div>
        <div className={styles.icon2}>
          <i></i>
          <h3>成长记录</h3>
        </div>
        <div className={styles.icon3}>
          <i></i>
          <h3>数字化托育</h3>
        </div>
        <div className={styles.icon4}>
          <i></i>
          <h3>托育装备</h3>
        </div>
      </div>
      <div className={styles.item}>
        <h2 className={styles.title2}></h2>
        <i className={"title"}></i>
        <h3>帮助孩子学习兴趣的提升和良好学习习惯的培养</h3>
        <p>
          3-6岁数字化幼小衔接
          <br />
          国内首款唯一基于国家标准，全数字化搭建的智能幼小衔接平台
          <br />
          科技赋能教育，孩子爱上学习、轻松掌握技巧、家长安心放心
        </p>
      </div>
      <Image
        src="/index/book.png"
        width={"350"}
        height={"209"}
        alt=""
        style={{ margin: "0 auto", display: "block" }}
      />
      <div className={styles.item}>
        <h2 className={styles.title3}></h2>
        <i className={"title"}></i>
        <h3>丰富的游戏教具和运动器械，让孩子玩中学</h3>
      </div>
      <div className={styles.banner} style={{ margin: "26px 12px 0 12px" }}>
        <Swiper autoplay style={{ height: "100%" }}>
          {items2.map((item) => {
            return (
              <Swiper.Item key={item}>
                <Image src={item} alt="" layout={"fill"} />
              </Swiper.Item>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

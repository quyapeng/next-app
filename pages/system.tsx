import Head from "next/head";
import Image from "next/image";
import systems from "@/styles/Systems.module.css";
import styles from "@/styles/Home.module.css";

export default function System() {
  return (
    <>
      <div className={systems.systems}>
        <Image
          src="/system/banner.png"
          width={"375"}
          height={"177"}
          alt=""
          style={{ margin: "0 auto", display: "block" }}
          priority
        />
        <div className={styles.item}>
          <h2 className={styles.system_title1}></h2>
          <i className={"title"}></i>
          <h4>COURSE INTRODUCTION</h4>
          <h5 className={systems.system_title}>
            <span>
              <span className={systems.biger}>6</span>大步骤
            </span>
            完成高质量闭环服务
          </h5>
          <Image
            src="/system/system1.png"
            width={"360"}
            height={"177"}
            alt=""
            style={{ margin: "26px auto 35px auto", display: "block" }}
            priority
          />
        </div>
        <div className={systems.sub}>
          <div className={styles.item}>
            <h2 className={styles.system_title2}></h2>
            <i className={"title"}></i>
            <h4>4R CURRICULUM IDEA</h4>
            <Image
              src="/system/system2.png"
              width={"360"}
              height={"231"}
              alt=""
              style={{
                margin: "26px auto 30px auto",
                display: "block",
              }}
              priority
            />
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={styles.system_title3}></h2>
          <i className={"title"}></i>
          <h4>CURRICULUM SYSTEM</h4>
          <h5 className={systems.system_title}>
            <span style={{ display: "block" }}>课程体系源自国内外知名团队</span>
            如瑞吉欧、英国EYFS、上海早教、幼托实践体系等
          </h5>
          <Image
            src="/system/system3.png"
            width={"360"}
            height={"231"}
            alt=""
            style={{
              margin: "26px auto 30px auto",
              display: "block",
            }}
            priority
          />
        </div>
        <div className={systems.sub}>
          <div className={styles.item}>
            <h2 className={styles.system_title4}></h2>
            <i className={"title"}></i>
            <h4>OVERVIEW OF CURRICULUM CONTENT</h4>
            <h5 className={systems.system_title}>
              课程以<span>“保教融合，寓教于养”</span>为宗旨
            </h5>
            <Image
              src="/system/system4_1.png"
              width={"365"}
              height={"48"}
              alt=""
              style={{
                margin: "26px auto 30px auto",
                display: "block",
              }}
              priority
            />
            <Image
              src="/system/system4_2.png"
              width={"296"}
              height={"296"}
              alt=""
              style={{
                margin: "26px auto 30px auto",
                display: "block",
              }}
              priority
            />
            <table className={systems.system_table} cellSpacing={"0"}>
              <tr>
                <td>&lt;家长课堂&gt;视频</td>
                <td>50节课</td>
              </tr>
              <tr>
                <td>主题活动方案</td>
                <td>12节课（一年）</td>
              </tr>
              <tr>
                <td>测评</td>
                <td>0～48个月龄</td>
              </tr>
              <tr>
                <td>亲子早教课程</td>
                <td>156节课</td>
              </tr>
              <tr>
                <td>学习活动教案本</td>
                <td>托大班：260节课</td>
              </tr>
              <tr>
                <td>学习活动教案本</td>
                <td>托小班：260节课</td>
              </tr>
              <tr>
                <td>保育照护教案本</td>
                <td>保育照护技能：20节课</td>
              </tr>
              <tr>
                <td>保育照护教案本</td>
                <td>生活（托大）：12节课</td>
              </tr>
              <tr>
                <td>保育照护教案本</td>
                <td>生活（托小）：12节课</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

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
          <h6>COURSE INTRODUCTION</h6>
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
        <div className={"sub"}>
          <div className={styles.item}>
            <h2 className={styles.system_title2}></h2>
            <i className={"title"}></i>
            <h6>4R CURRICULUM IDEA</h6>
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
          <h6>CURRICULUM SYSTEM</h6>
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
        <div className={"sub"}>
          <div className={styles.item}>
            <h2 className={styles.system_title4}></h2>
            <i className={"title"}></i>
            <h6>OVERVIEW OF CURRICULUM CONTENT</h6>
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
            <div style={{ margin: "0 8px 30px 8px" }}>
              <table className={systems.system_table} cellSpacing={"0"}>
                <tbody>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={styles.system_title5}></h2>
          <i className={"title"}></i>
          <h6>DAYCARE CURRICULUM FORM</h6>
          <h5 className={systems.system_title}>
            一日活动的形式组织实施托班课程
            <br />
            将托班课程分为
            <br />
            <span>生活活动、运动活动、学习活动、游戏活动</span>
            4种活动形式
          </h5>
          <div style={{ backgroundColor: "#FFFCEE", padding: "22px 8px" }}>
            <Image
              src="/system/system5.png"
              width={"361"}
              height={"164"}
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
          <h2 className={styles.system_title6}></h2>
          <i className={"title"}></i>
          <h6>SIX FIELDS OF PARENT-CHILD EARLY EDUCATION</h6>
          <Image
            src="/system/system6_1.png"
            width={"358"}
            height={"189"}
            alt=""
            style={{
              margin: "35px auto 25px auto",
              display: "block",
            }}
            priority
          />
          <Image
            src="/system/system6_2.png"
            width={"333"}
            height={"218"}
            alt=""
            style={{
              margin: "0 auto 18px auto",
              display: "block",
            }}
            priority
          />
        </div>
        <div className={"sub"}>
          <div className={styles.item}>
            <h2 className={styles.system_title7}></h2>
            <i className={"title"}></i>
            <h6>EARLY EDUCATION CURRICULUM</h6>
            <div className={systems.system_label}>
              <div className={systems.system_item}>
                <i className={systems.icon1}></i>
                <h5>双目标，双发展</h5>
                <span></span>
                <p className={systems.text}>
                  · 既能帮助幼儿在不同领域上能力的提升
                  <br />· 也能给家庭教育提供更适合幼儿个性化特征的育儿指导
                </p>
              </div>
              <div className={systems.system_item}>
                <i className={systems.icon2}></i>
                <h5>多元智能平衡</h5>
                <span></span>
                <p className={systems.text}>
                  · 对不同月龄段课程内容设置进行合理规划
                  <br />· 注重平衡不同智能活动在每阶段指导课程中的比重
                </p>
              </div>
              <div className={systems.system_item}>
                <i className={systems.icon3}></i>
                <h5>线上评估+线下指导</h5>
                <span></span>
                <p className={systems.text}>
                  · 强调“线上生长发育监测评估＋线下指导”结合的形式
                </p>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <h2 className={styles.system_title8}></h2>
            <i className={"title"}></i>
            <h6>EARLY EDUCATION CURRICULUM ARRANGEMENT</h6>
            <div className={systems.half}>
              <div className={systems.left}>
                <h5>1. 班级说明</h5>
                <Image
                  src="/system/system8_1.png"
                  width={"182"}
                  height={"169"}
                  alt=""
                  style={{
                    margin: "0 auto 18px auto",
                    display: "block",
                  }}
                  priority
                />
              </div>
              <div className={systems.left}>
                <h5>2. 活动类型</h5>
                <Image
                  src="/system/system8_2.png"
                  width={"181"}
                  height={"150"}
                  alt=""
                  style={{
                    margin: "0 auto 18px auto",
                    display: "block",
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

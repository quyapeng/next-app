import Image from "next/image";
import styles from "@/styles/Home.module.css";
import model from "@/styles/Model.module.css";
import { Swiper } from "antd-mobile";

export default function Model() {
  const banner = [];
  for (let i = 1; i < 6; i++) {
    banner.push(i);
  }
  return (
    <>
      <div className={model.model}>
        <Image
          src="/model/banner.png"
          width={"375"}
          height={"177"}
          alt=""
          style={{ margin: "0 auto", display: "block" }}
          priority
        />
        <div className={styles.item}>
          <h2 className={model.model_title1}></h2>
          <i className={"title"}></i>
          <h6>ADVANTAGES OF COOPERATION</h6>
          <Image
            src="/model/model1.png"
            width={"354"}
            height={"172"}
            alt=""
            style={{ margin: "0 auto 30px auto", display: "block" }}
            priority
          />
        </div>
        <div className={"sub"}>
          <div className={styles.item}>
            <h2 className={model.model_title2}></h2>
            <i className={"title"}></i>
            <h6>SERVICE MODE</h6>
            <div className={"flex_content"} style={{ margin: "0 10px" }}>
              <div className={"flex"} style={{ margin: "0 10px" }}>
                <Image
                  src="/model/icon1.png"
                  width={"62"}
                  height={"62"}
                  alt=""
                  style={{ margin: "0 auto 12px auto", display: "block" }}
                  priority
                />
                <h3>
                  无授权费
                  <br />
                  与加盟费
                </h3>
                <p>除采购设备外 无需任何前期 费用投入 从收益中分享</p>
              </div>
              <div className={"flex"} style={{ margin: "0 10px" }}>
                <Image
                  src="/model/icon2.png"
                  width={"62"}
                  height={"62"}
                  alt=""
                  style={{ margin: "0 auto 12px auto", display: "block" }}
                  priority
                />
                <h3>
                  课程、培训
                  <br />
                  支持
                </h3>
                <p>除采购设备外 无需任何前期 费用投入 从收益中分享</p>
              </div>
              <div className={"flex"} style={{ margin: "0 10px" }}>
                <Image
                  src="/model/icon3.png"
                  width={"62"}
                  height={"62"}
                  alt=""
                  style={{ margin: "0 auto 12px auto", display: "block" }}
                  priority
                />
                <h3>
                  设备教玩具
                  <br />
                  采购
                </h3>
                <p>开业必备设备 采购支持 配套教玩具专 人采购</p>
              </div>
              <div className={"flex"} style={{ margin: "0 10px" }}>
                <Image
                  src="/model/icon4.png"
                  width={"62"}
                  height={"62"}
                  alt=""
                  style={{ margin: "0 auto 12px auto", display: "block" }}
                  priority
                />
                <h3>
                  各类系统
                  <br />
                  免费支持
                </h3>
                <p>园所管理系统 家园共育软件 免费支持</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={model.model_title3}></h2>
          <i className={"title"}></i>
          <h6>NAtional DISTRIBUTION</h6>
          <h5 className={"sub_h5"}>
            2019-2022累计近<span>500所</span>幼儿园
            <br />
            学员<span>50,000人</span>
          </h5>
          <Image
            src="/model/model3.png"
            width={"360"}
            height={"303"}
            alt=""
            style={{ margin: "0 auto 30px auto", display: "block" }}
            priority
          />
          <div style={{ margin: "0 10px" }}>
            <table className={model.model_table} cellSpacing="0">
              <tbody>
                <tr>
                  <td>
                    <span>1</span>
                  </td>
                  <td>安徽</td>
                  <td>200所</td>
                  <td>
                    <span>4</span>
                  </td>
                  <td>湖南</td>
                  <td>50所</td>
                </tr>
                <tr>
                  <td>
                    <span>2</span>
                  </td>
                  <td>四川</td>
                  <td>60所</td>
                  <td>
                    <span>5</span>
                  </td>
                  <td>广东</td>
                  <td>50所</td>
                </tr>
                <tr>
                  <td>
                    <span>3</span>
                  </td>
                  <td>重庆</td>
                  <td>50所</td>
                  <td>
                    <span>6</span>
                  </td>
                  <td>福建</td>
                  <td>30所</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={model.model_title4}></h2>
          <i className={"title"}></i>
          <h6>GARDEN SITUATION</h6>
          <div style={{ margin: "0 35px" }}>
            <Swiper autoplay style={{ height: "100%" }}>
              {banner.map((item) => {
                return (
                  <Swiper.Item key={item}>
                    <Image
                      src={`/model/ban${item}.jpg`}
                      alt=""
                      width={"305"}
                      height={"229"}
                      priority
                    />
                  </Swiper.Item>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

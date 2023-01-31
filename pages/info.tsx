import Image from "next/image";
import styles from "@/styles/Home.module.css";
import info from "@/styles/Info.module.css";

export default function Info() {
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
        <div className={styles.item}>
          <h2 className={styles.title_info}></h2>
          <i className={"title"}></i>
          <h3>绘锐教育：学龄前教育与个性化教育</h3>
        </div>
        <div className={info.content}>
          <h3>上海绘锐教育科技</h3>
          <p className={info.small}>
            Shanghai Huirui Education Technology co., ltd
          </p>
          <p>
            由围绕学龄前教育与个性化教育的业务板块组合而成，主营学龄前3-6
            岁生活习惯培养系列课程，0-3岁托育系列课程与个性化教育业务，公司前身为国内少数成功在美国上市的教育公司；
          </p>
          <p>
            累积了十余年0-6岁的课程研发与教学经验，成功开展了包含机构与幼儿园所的网点达数百家，为国内首创幼小衔接的机构；绘学锐教育主要为园所提供“托幼一体化”的整体解决方案，包含“托育、早教”课程、保育指导、家园共育等个性化系统赋能（提供家庭、教师、园所联动）、与儿保专家共同开发的专业测评系统等。团队由一群从事托育、学前教育相关的专业人士组织而成，不仅参与了国家相关课程标准的制定，而且有全国上百家园所、机构、公建民营的实施落地经验。
          </p>
        </div>
        <Image
          src="/info/info.png"
          width={"303"}
          height={"240"}
          alt=""
          style={{ margin: "30px auto 22px auto", display: "block" }}
        />
      </div>
    </>
  );
}

import type { NextPage } from "next";
import Head from "next/head";
import { Button, Card, Steps, Avatar, List, Space } from "antd-mobile";

const { Step } = Steps;
const About: NextPage = () => {
  return (
    <div className="main-content">
      <Head>
        <title>关于我们</title>
        <meta name="description" content="关于我们" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="about">
        <h3>haha哈哈</h3>
      </div>
    </div>
  );
};

export default About;

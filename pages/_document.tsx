import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zh_CN">
      <>
        <title>绘学0-6、学前好习惯课堂、Q狮育儿</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        /> */}

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="viewport-fit=cover"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Cache-Control" content="no-siteapp" />
        <meta name="renderer" content="webkit" />
        <meta name="title" content="绘学0-6 、学前好习惯课堂 、Q狮育儿" />
        <meta
          name="keywords"
          content="托育、幼小衔接、学前好习惯课堂、Q狮慧育儿"
        />
        <meta
          name="description"
          content="绘学教育一站式为幼儿园提供0-3托育解决方案以及3-6科学幼小衔接课程"
        />
        <link rel="icon" href="/favicon.ico" />
        <link href="/favicon.ico" rel="shortcut icon" />
      </>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

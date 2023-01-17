"use client";
import "./globals.css";
import "antd-mobile/es/global";
import Nav from "./Nav";
import { useEffect } from "react";
// import "lib-flexible";
// import dynamic from 'next/dynamic';

// const DynamicPage = dynamic(import('./home'), { ssr: false });

// export default App () {
//   return <HomePage />
// }
// const setRem = async () => {
//   await require("lib-flexible");
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // setRem();
    // window.addEventListener("resize", setRem);
  });
  return (
    <html lang="zh_CN">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}

import Nav from './nav'
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={'main-content'}>{children}</main>
      <Image
          src="/connect.png"
          width={"375"}
          height={"108"}
          alt=""
          style={{ margin: "20px auto 80px auto", display: "block" }}
        />
    </>
  )
}
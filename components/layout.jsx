import Nav from './nav'
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={'main-content'}>{children}</main>
    </>
  )
}
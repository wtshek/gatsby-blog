import * as React from "react"
import { Link, PageProps } from "gatsby"
import Header from "./header"

type LayoutProps = {
  location: {
    pathname: string
  }
  title: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ location, children, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      <Header />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, All Right Reserved WTS.</footer>
      </div>
    </>
  )
}

export default Layout

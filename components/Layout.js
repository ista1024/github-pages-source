import Head from "next/head";

function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div>
        <header>
          <div>My Blog</div>
          <nav>Blog</nav>
        </header>
        <main>{children}</main>
        <footer>All content © Me</footer>
      </div>
    </>
  );
}

export default Layout;

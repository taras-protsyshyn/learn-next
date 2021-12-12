import Link from "next/link";

export const MainLayout = ({ children }) => {
  return (
    <>
      <nav>
        <ul className="container">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="container">{children}</main>

      <style jsx>{`
        nav {
          background: darkblue;
          color: white;
          padding: 20px 0;
        }
        ul {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fill, 100px);
        }
        a {
          color: white;
          font-size: 20px;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        main {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 5%;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 5%;
        }
      `}</style>
      <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
};

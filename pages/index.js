import Link from "next/link";

export default function Index() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <h1>Hello next js</h1>;
    </main>
  );
}

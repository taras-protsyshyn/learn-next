import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <h1>404 page not found</h1>
      <Link href="/">
        <a>Go Home</a>
      </Link>
    </>
  );
}

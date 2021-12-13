import Link from "next/link";

import { PostCard } from "../components/PostCard";

export default function Posts({ posts }) {
  return (
    <>
      <h1>Posts next js</h1>
      <div className="posts">
        {posts?.map(({ id, title, body }) => (
          <PostCard key={id} title={title} body={body} />
        ))}
      </div>
      <style jsx>{`
        .posts {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-gap: 16px;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}

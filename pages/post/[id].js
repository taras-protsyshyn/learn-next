import { useRouter } from "next/router";

function Post({ post }) {
  const router = useRouter();

  return (
    <>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.API_URL}/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

export default Post;

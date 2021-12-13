import Link from "next/link";

export const PostCard = ({ id, title, body }) => {
  return (
    <>
      <div key={id}>
        <h3>{title}</h3>
        <p>{body}</p>
        <Link href={`post/${id}`}>
          <a>Read more...</a>
        </Link>
      </div>
      <style jsx>{`
        div {
          border: 1px solid gray;
          padding: 16px;
          transition: all 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
        }
        div:hover {
          transform: scale(1.05);
          background-color: rgba(21, 18, 9, 0.05);
        }
        h3 {
          margin-top: 0;
        }
        p {
          margin-top: 0px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        a {
          margin-top: auto;
        }
      `}</style>
    </>
  );
};

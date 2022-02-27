import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/dist/client/router";
import { route } from "next/dist/server/router";
import React from "react";

interface Props {
  post: any;
  query: any;
}

const CreatePostPage = ({ post, query }: Props) => {
  const route = useRouter();
  return (
    <div>
      <h1>Create List Page</h1>
      <p>Query: {JSON.stringify(route.query)}</p>
      <ul>
        <li>{post.title}</li>
        <li>{post.author}</li>
      </ul>
    </div>
  );
};
export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader("Cache-Control", "s-maxage=5");
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const postId = context.query.postId;
  if (!postId) return { props: { query: context.query } };
  const res = await axios.get(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  return {
    props: {
      query: context.query,
      post: res.data,
    },
  };
}

export default CreatePostPage;

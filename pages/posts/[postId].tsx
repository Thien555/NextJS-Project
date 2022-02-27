import axios from "axios";
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";

interface PostDetailPageProps {
  post: any;
}

const PostDetailPage = ({ post }: PostDetailPageProps) => {
  const route = useRouter();
  return (
    <div>
      <h1>Post detail page</h1>
      <div>{post.title}</div>
      <div>{post.author}</div>
      <div>{post.description}</div>
    </div>
  );
};

export default PostDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("getStaticPath");
  const res = await axios.get(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );

  return {
    paths: res.data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postId = context.params?.postId;
  console.log("getStaticProp", postId);
  if (!postId) return { notFound: true };
  const res = await axios.get(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  // const data = await res.json();
  console.log(res.data);
  return {
    props: {
      post: res.data,
    },
    revalidate: 5,
  };
};

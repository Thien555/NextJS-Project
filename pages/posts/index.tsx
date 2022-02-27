import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import axios from "axios";
import Link from "next/link";
interface PropPostListPage {
  posts: any[];
}

const PostListPage = ({ posts }: PropPostListPage) => {
  return (
    <div>
      <h1>Post List Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
            ,
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;

export const getStaticProps: GetStaticProps<PropPostListPage> = async (
  context: GetStaticPropsContext
) => {
  const res = await axios.get(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  // const data = await res.json();
  return {
    props: {
      posts: res.data.data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};

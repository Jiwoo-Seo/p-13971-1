"use client";

import { apiFetch } from "@/lib/backend/clients";
import type { PostDto } from "@/type/post";
import Link from "next/link";
import { useEffect, useState } from "react";

const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Page() {

    const [posts, setPosts] = useState<PostDto[] | null>(null);

    useEffect(() => {
      apiFetch(`/api/v1/posts`).then(setPosts);
    }, []);

    if (posts == null) return <div>로딩중...</div>;

  return (
    <>
      <h1>글 목록</h1>

      {posts.length == 0 && <div>글이 없습니다.</div>}

      {posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                {post.id} : {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div>
        <Link href="/posts/write">글쓰기</Link>
      </div>
    </>
  );
}
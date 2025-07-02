"use client";

import { use } from "react";

export default function Page({ params }: { params: Promise<{ id: number }> }) {
    const { id } = use(params);
    return <div>{id}번 글 수정페이지</div>;
}
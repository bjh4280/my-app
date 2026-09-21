"use client";

import { useState, useTransition } from "react";
import { likeProductAction } from "@/lib/actions";

export function LikeButton({ id, initialLikes }: { id: string; initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes);
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          const newLikes = await likeProductAction(id);
          setLikes(newLikes);
        });
      }}
      className="w-full rounded-md bg-white px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-slate-200 disabled:opacity-50"
    >
      {isPending ? "저장 중..." : `♥ 좋아요 ${likes}`}
    </button>
  );
}
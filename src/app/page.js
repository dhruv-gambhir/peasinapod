import AudioPost from "@/components/AudioPost";

export default function Home() {
  const posts = Array.from({ length: 10 }, (_, i) => ({ id: i + 1 }));
  return (
    <div className="flex flex-col items-center gap-8 p-8 h-full scroll">
      {posts.map((p) => (
        <AudioPost key={p.id} />
      ))}
    </div>
  );
}

import AudioPost from "@/components/AudioPost";

export default function Home() {
    const posts = [
        {id:1, username: "User1", link: "https://voca.ro/1aJM1I6lG7wK"},
        {id:2, username: "User2", link: "https://voca.ro/1aJM1I6lG7wK"},
        {id:3, username: "User3", link: "https://voca.ro/1aJM1I6lG7wK"},
        {id:4, username: "User4", link: "https://voca.ro/1aJM1I6lG7wK"},
        {id:5, username: "User5", link: "https://voca.ro/1aJM1I6lG7wK"},
];
    return (
        <div className="flex flex-col items-center gap-8 p-8 h-full scroll">
            {posts.map((post) => (
                <AudioPost key={post.id} username={post.username} link={post.link} />
            ))}
        </div>
    );
}

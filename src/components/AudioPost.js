import LikeButton from "./LikeButton";

export default function AudioPost(props) {
    return (
        <div className="w-4/6 h-[200px] bg-[#FFFFFF] rounded-[10px] my-[10px] border-1 border-black flex items-center justify-center">
            <div className="w-full h-full flex flex-col">
                <p>{props.username}</p>
                <audio controls className="w-full h-full">
                    <source src={`${props.link}`} type="audio/mpeg" />
                </audio>
                <LikeButton />
            </div>
        </div>
    );
}

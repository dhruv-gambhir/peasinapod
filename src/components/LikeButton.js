"use client";

import { useState } from "react";
import Image from "next/image";

export default function LikeButton() {
    const [heart, setHeart] = useState("/heart.png");

    const handleHeartClick = () => {
        if (heart === "/heart.png") {
            setHeart("/heart_fill.png");
        } else {
            setHeart("/heart.png");
        }
    };

    return (
        <div className="items-center justify-center ml-4">
            <button onClick={handleHeartClick} className="border-none outline-none bg-transparent">
                <Image src={heart} height="15" width="15" alt="heart" />
            </button>
        </div>
    );
}


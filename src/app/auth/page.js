export default function Auth() {
    return (
        <main className="flex items-center justify-center h-screen">
            <div className="w-3/6 h-3/6 bg-[#2E8B57] rounded-[10px] p-[10px]">
                <h1 className="text-2xl font-bold mb-[10x]">Login</h1>
                <form className="flex flex-col gap-[4px] items-center">
                    <input
                        type="text"
                        placeholder="Username"
                        className="border bg-white rounded-[5px] h-[24px] w-full"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border bg-white rounded-[5px] h-[24px] w-full"
                    />
                    <button
                        type="submit"
                        className="bg-[#F0F0F0] hover:bg-[#FFFFFF] w-4/6 h-[36px] mt-[24px] rounded-[10px]"
                    >
                        Login
                    </button>
                </form>
            </div>
        </main>
    );
}

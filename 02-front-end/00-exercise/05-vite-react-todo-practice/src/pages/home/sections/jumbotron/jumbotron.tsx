export default function JumbotronSection() {
  return (
    <div className="flex flex-row gap-[32px] items-center justify-between">
      <div className="flex flex-col max-w-[538px]">
        <h1 className="text-[44px] font-bold text-white">Your Name Here</h1>
        <p className="text-[14px] text-[#9C9C9C]">
          Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-[#3F8E00] text-white">Lets get started</button>
      </div>
      <img
        className="w-[350px] h-[350px] rounded-full"
        src="/avatar.png"
        alt="avatar"
      />
    </div>
  );
}

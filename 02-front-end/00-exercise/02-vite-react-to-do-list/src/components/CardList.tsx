function CardList(props: { msg: string; color: string }) {
  return (
    <div
      className={`text-[${props.color}] w-full h-16  bg-[#25273D] border border-[#393A4B] flex items-center cursor-pointer justify-between hover:font-bold group`}
    >
      <div className="flex items-center">
        <div className="w-6 h-6 border border-[#393A4B] active:bg-white rounded-xl m-5"></div>
        {props.msg}
      </div>
      <span className="text-4xl hidden group-hover:block mr-6 font-thin text-[#4D5067]">
        x
      </span>
    </div>
  );
}

export default CardList;

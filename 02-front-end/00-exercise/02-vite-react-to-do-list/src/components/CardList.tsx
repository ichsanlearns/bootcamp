function CardList(props: { msg: string; color: string }) {
  return (
    <div
      className={`text-[${props.color}] w-135 h-16  bg-[#25273D] border border-[#393A4B] flex items-center cursor-pointer hover:font-bold`}
    >
      <div className="w-6 h-6 border border-[#393A4B] active:bg-white rounded-xl m-5"></div>
      {props.msg}
    </div>
  );
}

export default CardList;

import CardList from "../components/CardList";

function Home() {
  return (
    <div className="bg-[#171823] min-h-full text-white">
      <img
        className="w-screen h-[50vh] object-cover"
        src="background.jpg"
        alt=""
      />
      <div className="relative inset-0 mt-[-220.5px] mx-auto max-w-135 mb-13 z-0 font-josefin-sans flex flex-col gap-10">
        <div className="flex flex-row justify-between">
          <div className="w-41.75 h-10 font-bold text-[40px] tracking-[15px] text-white my-auto">
            TODO
          </div>
          <img
            className="w-6.5 h-6.5 mt-auto cursor-pointer"
            src="sun.png"
            alt=""
          />
        </div>
        <CardList msg="Create a new todo..." color="#4D5067" />
        <div className="text-[#C8CBE7]">
          <div className="text-[#4D5067] line-through w-135 h-16 rounded-t-[5px] bg-[#25273D] flex items-center cursor-pointer">
            <div>
              <img className="m-5" src="check.png" alt="" />
            </div>
            <div>Complete online JavaScript course</div>
          </div>
          <CardList msg="Jog around the park 3x" color="#C8CBE7" />
          <CardList msg="10 minutes meditation" color="#C8CBE7" />
          <CardList msg="Read for 1 hour" color="#C8CBE7" />
          <CardList msg="Pick up groceries" color="#C8CBE7" />
          <CardList
            msg="Complete Todo App on Frontend Mentor"
            color="#C8CBE7"
          />
          <div className="w-135 h-16 rounded-b-[5px] bg-[#25273D] flex items-center justify-between p-[24px]">
            <div className="w-17.25 h-3.5 font-normal text-[14px] tracking-[-0.19px] text-[#5B5E7E]">
              5 items left
            </div>
            <div className="flex items-center h-3.5 text-[14px] gap-[18px]">
              <div className="text-[#3A7CFD] cursor-pointer hover:font-bold">
                All
              </div>
              <div className="cursor-pointer hover:font-bold">Active</div>
              <div className="cursor-pointer hover:font-bold">Completed</div>
            </div>
            <div className="my-auto cursor-pointer hover:font-bold">
              Clear Completed
            </div>
          </div>
        </div>
        <div className="text-[#5B5E7E] m-auto">
          Drag and drop to reorder list
        </div>
      </div>
    </div>
  );
}

export default Home;

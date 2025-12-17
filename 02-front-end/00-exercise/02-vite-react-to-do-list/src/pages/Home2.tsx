import CardList from "../components/CardList";

function Home() {
  return (
    <div className="bg-[#171823] min-h-screen text-white">
      <img
        className="w-screen h-[50vh] object-cover"
        src="background.jpg"
        alt=""
      />
      <div className="absolute inset-0 mt-17.5 mx-auto max-w-135 mb-13 z-0 font-josefin-sans flex flex-col gap-10">
        <div className="flex flex-row justify-between">
          <div className="w-41.75 h-10 font-bold text-[40px] tracking-[15px] text-white my-auto">
            TODO
          </div>
          <img className="w-6.5 h-6.5 mt-auto" src="sun.png" alt="" />
        </div>
        <CardList />
        <div className="text-[#C8CBE7]">
          <div className="text-[#4D5067] w-135 h-16 rounded-[5px] bg-[#25273D] flex items-center">
            <div>
              <img className="m-5" src="check.png" alt="" />
            </div>
            <div>Complete online JavaScript course</div>
          </div>
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <div className="flex justify-between">
            <div>5 items left</div>
            <div className="flex justify-between">
              <div>All</div>
              <div>Active</div>
              <div>Completed</div>
            </div>
            <div>Clear Completed</div>
          </div>
        </div>
        <div className="text-[#5B5E7E]">Drag and drop to reorder list</div>
      </div>
    </div>
  );
}

export default Home;

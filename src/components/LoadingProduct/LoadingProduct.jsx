const LoadingProduct = () => {
  return (
    <div className="animate-pulse flex justify-between w-full p-4 pt-16 shadow-lg rounded-3xl">
      <div className="flex gap-7 items-center rounded-2xl w-[536px]">
        <div className="flex justify-between h-[444px] flex-col">
          <div className="bg-slate-200 h-[100px] w-[100px] rounded-2xl"></div>
          <div className="bg-slate-200 h-[100px] w-[100px] rounded-2xl"></div>
          <div className="bg-slate-200 h-[100px] w-[100px] rounded-2xl"></div>
          <div className="bg-slate-200 h-[100px] w-[100px] rounded-2xl"></div>
        </div>
        <div className="bg-slate-200 h-[444px]  w-[444px] rounded-2xl"></div>
      </div>
      <div className="flex flex-col gap-3.5 h-[444px] w-[550px]">
        <div className="bg-slate-200 h-[26px] w-[260px] rounded-2xl"></div>
        <div className="flex justify-between w-full">
          <div className="bg-slate-200 h-[20px] w-[120px] rounded-2xl"></div>{" "}
          <div className="bg-slate-200 h-[20px] w-[200px] rounded-2xl"> </div>
        </div>
        <div className="bg-slate-200 h-[20px] w-[260px] rounded-2xl"></div>
        <div className="bg-slate-200 h-[60px] w-full rounded-2xl"></div>
        <div className="bg-slate-200 h-[20px] w-24 rounded-2xl"></div>
        <div className="flex gap-3">
          <div className="bg-slate-200 h-[30px] w-[30px] rounded-2xl"></div>
          <div className="bg-slate-200 h-[30px] w-[30px] rounded-2xl"></div>
          <div className="bg-slate-200 h-[30px] w-[30px] rounded-2xl"></div>
          <div className="bg-slate-200 h-[30px] w-[30px] rounded-2xl"></div>
        </div>
        <div className="flex gap-4">
          <div className="bg-slate-200 h-[50px] w-[30px] rounded-2xl"></div>
          <div className="bg-slate-200 h-[50px] w-[50px] rounded-2xl"></div>
          <div className="bg-slate-200 h-[50px] w-[30px] rounded-2xl"></div>
          <div className="bg-slate-200 h-[50px] w-[120px] rounded-2xl"></div>
          <div className="bg-slate-200 h-[50px] w-[120px] rounded-2xl"></div>
        </div>
        <div className="bg-slate-200 h-[20px] w-[260px] rounded-2xl"></div>
        <div className="bg-slate-200 h-[20px] w-[240px] rounded-2xl"></div>
        <div className="bg-slate-200 h-[20px] w-[220px] rounded-2xl"></div>
        <div className="flex gap-3">
          <div className="bg-slate-200 h-[30px] w-[130px] rounded-2xl"></div>
          <div className="bg-slate-200 h-[30px] w-[30px] rounded-2xl"></div>
          <div className="bg-slate-200 h-[30px] w-[30px] rounded-2xl"></div>
          <div className="bg-slate-200 h-[30px] w-[30px] rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProduct;

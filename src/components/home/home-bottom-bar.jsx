const Homebar = () => {
  return (
    <div class="bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
      <div class="flex justify-between items-center gap-7 max-w-[90%] lg:max-w-[60%] mx-auto mb-15 flex-col lg:flex-row">

        <div class="relative p-15 ">
          <div class="absolute right-0 top-1/2 h-[40%] lg:w-0.5 bg-base-200 transform -translate-y-1/2"></div>
          <h1 class="text-[50px] font-bold text-white">
            <span>50</span>K+
          </h1>
          <p class="text-white">Active Users</p>
        </div>

        <div class="relative p-15">
          <div class="absolute right-0 top-1/2 h-[40%] lg:w-0.5 bg-base-200 transform -translate-y-1/2"></div>
          <h1 class="text-[50px] font-bold text-white">
            <span>200</span>+
          </h1>
          <p class="text-white">Premium Tools</p>
        </div>

        <div class="space-y-1 py-3">
          <h1 class="text-[50px] font-bold text-white">
            <span>4.9</span>
          </h1>
          <p class="text-white">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Homebar;

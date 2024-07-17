import { useState } from "react";

const ProductAbout = () => {
  const [about, setAbout] = useState(true);
  return (
    <div className="mt-20 max-w-[1200px] w-full mb-28">
      <div className="flex items-center border-b py-4 gap-8 relative">
        <h1
          onClick={() => setAbout(true)}
          className={`text-lg cursor-pointer ${
            about && "primary-text font-rbold"
          }`}
        >
          Product Description
        </h1>
        <h1
          onClick={() => setAbout(false)}
          className={`text-lg cursor-pointer ${
            !about && "primary-text font-rbold"
          }`}
        >
          Reviews (19)
        </h1>
        <div
          className={`absolute bottom-0 h-1 primary-bg transition-all ${
            about ? "left-o w-[170px]" : "left-[198px] w-28"
          }`}
        ></div>
      </div>

      <p className='text-sm leading-6 font text-slate-700 my-5'>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
        tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare
        lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
        cursus eu, suscipit id nulla. <br />
        <br />
        Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
        sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce
        ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate,
        sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et
        placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis
        mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam
        gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic
        cylinder planters come with a wooden stand to help elevate your plants
        off the ground.{" "}
      </p>

      <h4 className="font-rbold text-sm leading-6">Living Room:</h4>
      <p className="text-sm leading-6 text-slate-700 mb-5">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h4 className="font-rbold text-sm leading-6">Dining Room:</h4>
      <p className="text-sm leading-6 text-slate-700 mb-5">The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>
      <h4 className="font-rbold text-sm leading-6">Office:</h4>
      <p className="text-sm leading-6 text-slate-700">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default ProductAbout;


// eslint-disable-next-line react/prop-types
const FloatinDiv = ({ img, text1, text2 }) => {
  return (
    <div className="flex justify-around bg-white shadow-md rounded-[17px] items-center p-0 pl-7 h-[4.5rem]">
      <img src={img} alt="" className="transform scale-40" />
      <span className="font-sans text-[16px] text-black">
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;

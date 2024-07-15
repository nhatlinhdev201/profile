/* eslint-disable react/prop-types */
const BreakLine = ({ title }) => {
  return (
    <div className="w-full flex justify-center">
      <h4>----</h4>
      <h4 className="mx-5 text-center text-lg font-normal uppercase text-slate-400">{title}</h4>
      <h4>----</h4>
    </div>
  )
}

export default BreakLine;
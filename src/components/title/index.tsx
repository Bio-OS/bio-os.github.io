const Title = ({ title, desc = ''}) => {
  return (
    <div className="flex flex-col items-center mt-[70px] mb-[80px]">
      <div className="text-[36px] font-medium">{title}</div>
      <div style={{ color: '#86909C', fontSize: 20 }}>{desc}</div>
    </div>
  );
};
export default Title;
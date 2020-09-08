const Skill = ({link, className, src, alt})=>{
  return (
    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
      <a href={link}>
        <img
          className={className}
          src={src}
          alt={alt}
        />
      </a>
    </div>
  );
}

export default Skill;

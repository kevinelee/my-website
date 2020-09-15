const Skill = ({link, className, src, alt})=>{
  return (
    <div className="rounded-lg col-span-1 flex justify-center py-8 px-8 bg-gray-100">
      {link 
      ? <a href={link}>
        <img
          className={className}
          src={src}
          alt={alt}
        />
      </a>
      :   <img
      className={className}
      src={src}
      alt={alt}
    />
      }
    </div>
  );
}

export default Skill;

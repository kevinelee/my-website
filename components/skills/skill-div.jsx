const Skill = ({link, className, src, alt, languageName})=>{
  return (
    <div className="rounded-lg col-span-1 flex justify-center items-center py-8 px-8 bg-gray-100 flex-col">
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
      {languageName==="React" ? <p className="font-bold">{languageName}</p> : <p className="font-bold mt-3">{languageName}</p>}
    </div>
    
  );
}

export default Skill;

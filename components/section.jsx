const Section = ({ number = "", className = "", children }) => {
  return (
    <div id={`section${number}`} className={className}>
      {children}
    </div>
  );
};

export default Section

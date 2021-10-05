const ApplicationCard = ({
  imgLink,
  applicationLink,
  type,
  title,
  description,
  languages,
  githubLink,
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={imgLink} alt={title} />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm leading-5 font-medium text-indigo-600">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={applicationLink}
              className="hover:underline"
            >
              {type}
            </a>{" "}
            |
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={githubLink}
              className="hover:underline"
            >
              &nbsp;GitHub
            </a>
          </p>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={applicationLink}
            className="block"
          >
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 hover:text-indigo-600">
              {title}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">
              {description}
            </p>
            <p className="mt-4 font-medium">{languages}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;

interface ICardProjectProps {
  title: string,
  description: string,
  tags: string[],
  imageSrc: string,
  projectType: string
}
export default function CardProject({
  className = "",
  ...cardProjectProps
}: ICardProjectProps & { className?: string }) {

  return (
    <div
      className={`
        ${cardProjectProps.projectType}
        card-project-item flex flex-col gap-3 pb-3 group
        bg-gray-800 dark:bg-[#1a2034] rounded-xl overflow-hidden
        shadow-md dark:shadow-xl dark:shadow-black/20
        transition-all duration-300
        ${className}
      `}
    >
      <img src={cardProjectProps.imageSrc} alt="Imagem de projeto teste" />
      <div className="p-4 flex flex-col gap-2">
        <p className="text-white dark:text-white text-lg font-bold leading-normal">{cardProjectProps.title}</p>
        <p className="text-gray-200 dark:text-[#92a0c9] text-sm font-normal leading-normal">{cardProjectProps.description}</p>
        <p className="text-gray-400 dark:text-[#7a86ad] text-xs font-normal leading-normal pt-1">
          Tags: {cardProjectProps.tags.join(", ")}
        </p>
      </div>
    </div>
  );
}

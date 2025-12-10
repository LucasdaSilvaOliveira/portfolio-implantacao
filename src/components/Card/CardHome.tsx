interface ICardHomeProps {
    title: string,
    description: string,
    tags: string[],
    imageSrc: string
}

export default function CardHome(cardHomeProps: ICardHomeProps) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800">
            <img className="w-full" src={cardHomeProps.imageSrc} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{cardHomeProps.title}</div>
                <p className="text-white text-base">
                    {cardHomeProps.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {cardHomeProps.tags.map((tag) => (
                    <span
                        key={tag}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                        #{tag}
                    </span>
                ))}</div>
        </div>
    );
}
const Feature = ({ title, description, image } : { title: string; description: string; image: string; }) => {
	return (
		<div className="border p-4 rounded-lg space-y-4 bg-white flex items-center space-x-4">
			<div className="size-12 bg-green-500 flex items-center justify-center rounded-lg">
        <img
				src={image}
				alt={title}
				className="size-8"
			  />
      </div>
			<div className="flex-1 space-y-2">
				<h3 className="font-semibold text-xl">{title}</h3>
				<p className="text-gray-600">{description}</p>
			</div>
		</div>
	);
};

export default Feature;

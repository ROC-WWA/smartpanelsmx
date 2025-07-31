const Sector = ({
	index,
	title,
	description,
	image,
}: {
	index: number;
	title: string;
	description: string;
	image: string;
}) => (
	<div className="max-w-6xl mx-auto mt-10">
		<div className="border p-6 rounded-lg space-y-4 group hover:bg-green-500 transition-all duration-300 grid grid-cols-1 md:grid-cols-2 gap-4">
			<div className="md:flex md:space-x-4 items-center">
				<div className="font-bold text-5xl group-hover:text-white">{index}</div>
				<div>
					<div className="font-semibold text-2xl group-hover:text-white">
						{title}
					</div>
					<div className="group-hover:text-white">{description}</div>
				</div>
			</div>
			<div>
				<img
					src={image}
					alt={`${title} sector`}
					className="w-full h-auto rounded-md shadow-lg"
				/>
			</div>
		</div>
	</div>
);
export default Sector;
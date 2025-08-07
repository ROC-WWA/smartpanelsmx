import { CldImage } from "next-cloudinary";

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
			<div className="md:flex md:space-x-4 items-center group-hover:text-neutral-800">
				<div className="font-bold text-5xl">{index}</div>
				<div>
					<div className="font-semibold text-2xl ">
						{title}
					</div>
					<div className="">{description}</div>
				</div>
			</div>
			<div>
				<CldImage
						className="mx-auto rounded"
						src={image}
						width="543"
						alt={`Smart Panel Sector ${title}`}
						height="298"
						crop={{
							type: "auto",
							source: true,
						}}
				/>
			</div>
		</div>
	</div>
);
export default Sector;
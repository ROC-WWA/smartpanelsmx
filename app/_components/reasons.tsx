import { CldImage } from "next-cloudinary";

const Reason = ({classname, title, description, image} : {classname: string, title: string, description: string, image: string}) => {
	return (
		<div className={`flex items-center justify-center mb-4 ${classname}`}>
			<div className="text-right flex-1">
				<h3 className="font-semibold text-2xl">{title}</h3>
				<p>
					{description}
				</p>
			</div>
			<div className="p-4 w-28">
				<CldImage
						className="mx-auto"
						src={image}
						width="400"
						alt={`Smart Panel Razon ${title}`}
						height="400"
						crop={{
							type: "auto",
							source: true,
						}}
				/>
			</div>
		</div>
	);
};

export default Reason;

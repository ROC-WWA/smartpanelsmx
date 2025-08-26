import { cn } from "@/lib/utils";
import { CldImage } from "next-cloudinary";

const Reason = ({classname, title, description, image , textContainerClassName, iconContainerClassName } : {classname: string, title: string, description: string, image: string, textContainerClassName?: string, iconContainerClassName?: string}) => {
	return (
		<div className={`flex flex-wrap items-center justify-center mb-4 ${classname}`}>
			<div className={cn('text-right flex-1', textContainerClassName)}>
				<h3 className="font-semibold text-2xl">{title}</h3>
				<p>
					{description}
				</p>
			</div>
			<div className={cn('p-4 w-28', iconContainerClassName)}>
				<CldImage
						className="mx-auto w-14 md:w-32"
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

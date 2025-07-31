const Subtitle = ({ text }: { text: string }) => {
	return (
		<div className="flex  items-center space-x-4 mb-4">
			<div className="space-y-2">
				<div className="h-0.5 w-4 bg-green-500" />
				<div className="h-0.5 w-6 bg-green-500" />
			</div>
			<p className="uppercase text-green-500 font-semibold">{text}</p>
		</div>
	);
};

export default Subtitle;

const Title = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-green-500 text-white p-4 md:p-6 md:py-14 w-full mb-8">
			<div className="max-w-6xl mx-auto text-left px-6">
				<h1 className="text-4xl font-bold">{children}</h1>
			</div>
		</div>
	);
};
export default Title;

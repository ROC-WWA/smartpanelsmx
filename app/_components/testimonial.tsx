import { StarIcon } from "lucide-react";
import Subtitle from "./subtitle";

const featuredTestimonial = {
	body: "Recomiendo a Smart Panel por su buen trato, servicio y sobre todo por sus buenos productos.",
	author: {
		name: "Brenna Goyette",
		handle: "brennagoyette",
		imageUrl:
			"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
		logoUrl:
			"https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg",
	},
};
const testimonials = [
	[
		[
			{
				body: "Muy buena calidad y servicio al cliente.",
				author: {
					name: "Francisco O.",
					handle: "Gran Compromiso",
					rating: 5,
				},
			},
			{
				body: "Muy buena calidad y servicio al cliente.",
				author: {
					name: "Alejandro R",
					handle: "Calidad",
					rating: 4,
				},
			},
			{
				body: "Los recomiendo por su excelente trabajo y calidad.",
				author: {
					name: "Julio Chávez:",
					handle: "Excelencia",
					rating: 5,
				},
			},
		],
		[
			{
				body: "Los recomiendo por el trato y sus buenos precios.",
				author: {
					name: "Benjamín Hernández",
					handle: "Buenos Precios",
					rating: 5,
				},
			},
			{
				body: "Tienen rapidez y calidad en su servicio.",
				author: {
					name: "Joaquín G.",
					handle: "Rapidez",
					rating: 4,
				},
			},
		],
	],
	[
		[
			{
				body: "Buen trabajo y excelente calidad",
				author: {
					name: "Fernanda Urea:",
					handle: "Calidad",
					rating: 5,
				},
			},
			{
				body: "Trato excelente y rápido.",
				author: {
					name: "Andrés Fidencio",
					handle: "Calidad Humana",
					rating: 4,
				},
			},
		],
		[
			{
				body: "Tiempo, servicio y calidad de atención.",
				author: {
					name: "Bazael T.",
					handle: "Eficiencia",
					rating: 5,
				},
			},
			{
				body: "Tienen buen servicio.",
				author: {
					name: "F. Ingeniería:",
					handle: "Buen Servicio",
					rating: 4,
				},
			},
			{
				body: "Los recomiendo porque son muy profesionales y muy buen trato.",
				author: {
					name: "Marco Gzlz",
					handle: "Profesionales",
					rating: 5,
				},
			},
		],
	],
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Testimonial() {
	return (
		<div className="relative isolate pt-24 pb-32 sm:pt-32">
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
			>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
				/>
			</div>
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
			>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className="ml-[-22rem] aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
				/>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<div className="flex items-center justify-center">
						<Subtitle text="Smart Panel" />
					</div>
					<p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-100 sm:text-5xl">
						La voz de nuestros clientes nos respalda:
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
					<figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
						<blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
							<p>{`“${featuredTestimonial.body}”`}</p>
						</blockquote>
						<figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
							<div>
								<div className="font-semibold text-gray-900">
									{featuredTestimonial.author.name}
								</div>
							</div>
							<div className="flex-auto"></div>
							<div className="flex gap-x-1 text-green-500">
								<StarIcon
									aria-hidden="true"
									className="size-5 flex-none fill-green-500"
								/>
								<StarIcon
									aria-hidden="true"
									className="size-5 flex-none fill-green-500"
								/>
								<StarIcon
									aria-hidden="true"
									className="size-5 flex-none fill-green-500"
								/>
								<StarIcon
									aria-hidden="true"
									className="size-5 flex-none fill-green-500"
								/>
								<StarIcon
									aria-hidden="true"
									className="size-5 flex-none fill-green-500"
								/>
							</div>
						</figcaption>
					</figure>
					{testimonials.map((columnGroup, columnGroupIdx) => (
						<div
							key={columnGroupIdx}
							className="space-y-8 xl:contents xl:space-y-0"
						>
							{columnGroup.map((column, columnIdx) => (
								<div
									key={columnIdx}
									className={classNames(
										(columnGroupIdx === 0 && columnIdx === 0) ||
											(columnGroupIdx === testimonials.length - 1 &&
												columnIdx === columnGroup.length - 1)
											? "xl:row-span-2"
											: "xl:row-start-1",
										"space-y-8"
									)}
								>
									{column.map((testimonial) => (
										<figure
											key={testimonial.author.handle}
											className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
										>
                      <blockquote className="text-gray-900 font-semibold text-lg">
                        <p>{testimonial.author.handle}</p>
                      </blockquote>
											<blockquote className="text-gray-900">
												<p>{`“${testimonial.body}”`}</p>
											</blockquote>
											<figcaption className="mt-6 gap-x-4">
												<div>
													<div className="font-semibold text-gray-900">
														{testimonial.author.name}
													</div>
												</div>
												<div className="flex gap-x-1 text-green-500 justify-center">
													{ Array.from({ length: testimonial.author.rating }, (_, i) => (
                            <StarIcon key={i} aria-hidden="true" className="size-5 flex-none fill-green-500" />
                          )) }
                          {testimonial.author.rating < 5 && (
                            Array.from({ length: 5 - testimonial.author.rating }, (_, i) => (
                              <StarIcon key={i} aria-hidden="true" className="size-5 flex-none fill-white" />
                            ))
                          )}
                          </div>
											</figcaption>
										</figure>
									))}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
	ChevronDownIcon,
	Bars3Icon,
	XMarkIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from "@headlessui/react";
import {
	ChartPieIcon,
	CursorArrowRaysIcon,
	PlayCircleIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";
import SocialNetworks from "./social";
import { CldImage } from "next-cloudinary";
import { usePathname } from "next/navigation";

const products = [
	{
		name: "Panel MURO",
		description: "Panel de muro prefabricado",
		href: "/panel-muro",
		icon: ChartPieIcon,
	},
	{
		name: "Panel TECHO",
		description: "Panel de techo prefabricado",
		href: "/panel-techo",
		icon: CursorArrowRaysIcon,
	},
];

const applications = [
	{
		name: "Naves Industriales",
		href: "/aplicaciones/naves-industriales",
		icon: PlayCircleIcon,
	},
	{
		name: "Residenciales Habitacionales",
		href: "/aplicaciones/residenciales-habitacionales",
		icon: PhoneIcon,
	},
	{ name: "Oficinas", href: "/aplicaciones/oficinas", icon: PlayCircleIcon },
	{ name: "Aulas", href: "/aplicaciones/aulas-prefabricadas", icon: PhoneIcon },
	{
		name: "Bodegas/Almacenes",
		href: "/aplicaciones/bodegas-almacenes",
		icon: PlayCircleIcon,
	},
	{ name: "Cámaras", href: "/aplicaciones/camaras", icon: PhoneIcon },
	{ name: "Techos", href: "/aplicaciones/techos", icon: PlayCircleIcon },
	{ name: "Hospitales", href: "/aplicaciones/hospitales", icon: PhoneIcon },
];

export const menu = [
	{
		name: "Home",
		href: "/",
		children: [],
	},
	{
		name: "Nosotros",
		href: "/nosotros",
	},
	{
		name: "Productos",
		href: "#",
		children: products,
	},
	{
		name: "Aplicaciones",
		href: "#",
		children: applications,
	},
	{
		name: "Galería",
		href: "/galeria",
	},
	{
		name: "Contacto",
		href: "/contacto",
	},
];

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleDropdown = (name: string) => {
		setOpenDropdown(openDropdown === name ? null : name);
	};

	return (
		<nav
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
				isScrolled ? "bg-white backdrop-blur-sm shadow-md" : "bg-white"
			)}
		>
			<div
				className={cn(
					"bg-neutral-700 text-white text-sm flex flex-wrap justify-between items-center px-6 py-2",
					isScrolled ? "hidden" : ""
				)}
			>
				<div className="flex items-center">
					<Link href="tel:+525610197622">
						<PhoneIcon className="size-5 inline-block mr-2" />
						<span>56 1019 7622</span>
					</Link>
				</div>
				<div className="flex items-center">
					<Link
						href="mailto:atencionaclientes1@smartpanel.mx"
						rel="noopener noreferrer"
					>
						<EnvelopeIcon className="size-5 inline-block mr-2" />
						<span>atencionaclientes1@smartpanel.mx</span>
					</Link>
				</div>
				<div className="hidden lg:block">
					<SocialNetworks className="text-white" />
				</div>
			</div>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">SmartPanel</span>
							<CldImage
								alt="Smart Panel Logo"
								src="smart-panel-logo_ukokze"
								width={200}
								height={50}
								className="h-16 w-auto"
							/>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							{menu.map((item) => (
								<div key={item.name} className="relative">
									{item.children && item.children.length > 0 ? (
										<div className="relative">
											<button
												onClick={() => toggleDropdown(item.name)}
												className="flex items-center text-gray-700 hover:text-green-500 px-3 py-2 text-sm font-semibold transition-colors duration-200 uppercase"
											>
												{item.name}
												<ChevronDownIcon
													className={cn(
														"ml-1 h-4 w-4 transition-transform duration-200",
														openDropdown === item.name ? "rotate-180" : ""
													)}
												/>
											</button>

											{/* Dropdown Menu */}
											{openDropdown === item.name && (
												<div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
													{item.children.map((child) => (
														<Link
															key={child.name}
															href={child.href}
															className="flex items-center px-4 py-4 text-sm text-gray-700 hover:bg-neutral-50 hover:text-green-500 transition-colors duration-200"
															onClick={() => setOpenDropdown(null)}
														>
															<div>
																<div className="font-semibold">
																	{child.name}
																</div>
															</div>
														</Link>
													))}
												</div>
											)}
										</div>
									) : (
										<Link
											href={item.href}
											className="text-gray-700 hover:text-green-500 px-3 py-2 text-sm font-semibold transition-colors duration-200 uppercase"
										>
											{item.name}
										</Link>
									)}
								</div>
							))}
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							type="button"
							onClick={() => setMobileMenuOpen(true)}
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon aria-hidden="true" className="size-6" />
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="md:hidden border-t border-gray-200">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{menu.map((item) => (
								<div key={item.name}>
									{item.children && item.children.length > 0 ? (
										<div>
											<button
												onClick={() => toggleDropdown(item.name)}
												className="flex items-center justify-between w-full text-left text-gray-700 hover:text-green-500 px-3 py-2 text-base font-medium"
											>
												{item.name}
												<ChevronDownIcon
													className={cn(
														"h-4 w-4 transition-transform duration-200",
														openDropdown === item.name ? "rotate-180" : ""
													)}
												/>
											</button>
											{openDropdown === item.name && (
												<div className="pl-4 space-y-1">
													{item.children.map((child) => (
														<Link
															key={child.name}
															href={child.href}
															className="flex items-center text-gray-600 hover:text-green-500 px-3 py-2 text-sm transition-colors duration-200"
															onClick={() => {
																setIsMobileMenuOpen(false);
																setOpenDropdown(null);
															}}
														>
															{child.icon && (
																<child.icon className="mr-2 h-4 w-4" />
															)}
															{child.name}
														</Link>
													))}
												</div>
											)}
										</div>
									) : (
										<Link
											href={item.href}
											className="block text-gray-700 hover:text-green-500 px-3 py-2 text-base font-medium transition-colors duration-200"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{item.name}
										</Link>
									)}
								</div>
							))}
						</div>
					</div>
				)}
			</div>

			{/* Overlay for closing dropdowns */}
			{openDropdown && (
				<div
					className="fixed inset-0 z-40"
					onClick={() => setOpenDropdown(null)}
				/>
			)}
<Dialog
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
					className="lg:hidden"
				>
					<div className="fixed inset-0 z-50" />
					<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<Link href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Smart Panel</span>
								<img
									alt=""
									src="/smart-panel-logo.jpg"
									className="h-16 w-auto"
								/>
							</Link>
							<button
								type="button"
								onClick={() => setMobileMenuOpen(false)}
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon aria-hidden="true" className="size-6" />
							</button>
						</div>
						<div className="mt-6 flow-root divide-y">
							
							<div className="-my-6 ">
								<div className="space-y-2 py-6 divide-y divide-gray-300">
									<Link
										href="/"
										className="-mx-3 block  px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
									>
										Inicio
									</Link>
									<Link
										href="/nosotros"
										className="-mx-3 block  px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
									>
										Nosotros
									</Link>
									<Disclosure as="div" className="-mx-3">
										<DisclosureButton className="group flex w-full items-center justify-between  py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
											Productos
											<ChevronDownIcon
												aria-hidden="true"
												className="size-5 flex-none group-data-open:rotate-180"
											/>
										</DisclosureButton>
										<DisclosurePanel className="mt-2 space-y-2">
											{[...products].map((item) => (
												<DisclosureButton
													key={item.name}
													as="a"
													href={item.href}
													className="block  py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
												>
													{item.name}
												</DisclosureButton>
											))}
										</DisclosurePanel>
									</Disclosure>
									<Disclosure as="div" className="-mx-3">
										<DisclosureButton className="group flex w-full items-center justify-between  py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
											Aplicaciones
											<ChevronDownIcon
												aria-hidden="true"
												className="size-5 flex-none group-data-open:rotate-180"
											/>
										</DisclosureButton>
										<DisclosurePanel className="mt-2 space-y-2">
											{[...applications].map((item) => (
												<DisclosureButton
													key={item.name}
													as="a"
													href={item.href}
													className="block  py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
												>
													{item.name}
												</DisclosureButton>
											))}
										</DisclosurePanel>
									</Disclosure>
									<Link
										href="/galeria"
										className="-mx-3 block  px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
									>
										Galería
									</Link>
									<Link
										href="/contacto"
										className="-mx-3 block  px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
									>
										Contacto
									</Link>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog>
      
		</nav>
	);
}

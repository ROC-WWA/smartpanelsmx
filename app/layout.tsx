import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Nav from "./_components/nav";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import Footer from "./_components/footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Navigation } from "./_components/navigation";


export const metadata: Metadata = {
	title: "Panel Prefabricados para Naves Industriales | Smart Panel",
	description:
		"Smart Panel México fabrica paneles térmicos tipo sándwich con núcleo de EPS y lámina metálica, para construcción modular rápida, eficiente y sustentable. Soluciones adaptables para naves industriales, bodegas, casetas, aulas, oficinas y más en todo México. Certificación ISO-9001 (ECMX-1369/19).",
	openGraph: {
		title: "Panel Prefabricados para Naves Industriales | Smart Panel",
		description:
			"Paneles tipo sándwich con núcleo EPS para construir oficinas prefabricadas funcionales, térmicas y modulares. Instalación rápida",
		url: "https://smartpanel.mx/",
		siteName: "Smart Panel",
		type: "website",
		images: [
			{
				url: "https://smartpanel.mx/smartpanel-og.png",
				width: 1200,
				height: 630,
				alt: "Smart Panel - Paneles Térmicos Tipo Sándwich",
			},
		],
	},
	keywords: [
		"paneles prefabricados",
		"naves industriales",
		"paneles térmicos",
		"construcción modular",
		"paneles sándwich",
		"Smart Panel México",
		"paneles EPS",
		"soluciones de construcción",
	],
	twitter: {
		card: "summary_large_image",
		title: "Panel Prefabricados para Naves Industriales | Smart Panel",
		description:
			"Smart Panel México fabrica paneles térmicos tipo sándwich con núcleo de EPS y lámina metálica, para construcción modular rápida, eficiente y sustentable. Soluciones adaptables para naves industriales, bodegas, casetas, aulas, oficinas y más en todo México. Certificación ISO-9001 (ECMX-1369/19).",
		images: [
			{
				url: "https://smartpanel.mx/smartpanel-og.png",
				width: 1200,
				height: 630,
				alt: "Smart Panel - Paneles Térmicos Tipo Sándwich",
			},
		],
	},
};

const quicksand = Quicksand({
  subsets: ['latin'],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={quicksand.className} >
			<GoogleTagManager gtmId="GTM-54GRLXR" />
			<Head>
				<title>Title</title>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
				/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="robots"
					content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
				/>
				<link rel="canonical" href="https://smartpanel.mx/" />
				<meta
					property="og:description"
					content="Paneles tipo sándwich con núcleo EPS para construir oficinas prefabricadas funcionales, térmicas y modulares. Instalación rápida"
				/>

				<link rel="dns-prefetch" href="//code.jivosite.com" />
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-54GRLXR"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>
			</Head>

			<body className="pt-32"
			>
				
				<Navigation />
				{children}
				{/* Footer */}
				<Script src="//code.jivosite.com/widget/4mwghIbKQO" async />
				<GoogleAnalytics gaId="G-M10QM7MYG5" />
				<Footer />
			</body>
		</html>
	);
}

import { Container } from "@chakra-ui/react";
import { Selecter } from "@/components/club/selecter";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Container centerContent spaceY="4" py="8">
			<Selecter />
			{children}
		</Container>
	);
}

import { Selecter } from "@/components/club/selecter";
import { Container } from "@chakra-ui/react";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Container maxW="8xl" as="main" centerContent>
			<Selecter />
			{children}
		</Container>
	);
}

import { Box, Container, Text } from "@chakra-ui/react";
import { Header } from "./_components/navigation/header";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Box
				bg="bg.inverted"
				borderBottomWidth="1px"
				borderColor="border.inverted"
				py="2"
			>
				<Container centerContent>
					<Text color="fg.inverted">
						このページの内容は架空であり、実際とは異なります。
					</Text>
				</Container>
			</Box>
			<Header />
			{children}
		</>
	);
}

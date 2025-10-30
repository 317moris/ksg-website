import { Box, Image, Link } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

export function HomeLink({ hideText }: { hideText?: boolean }) {
	return (
		<Link asChild fontWeight="bold">
			<NextLink href="/">
				<Image asChild aspectRatio="square" boxSize="9" minW="9" rounded="full">
					<NextImage
						src="/icon/kosho.png"
						alt="校章"
						width={600}
						height={600}
					/>
				</Image>
				{!hideText && <Box hideBelow="lg">埼玉県立越谷総合技術高等学校</Box>}
			</NextLink>
		</Link>
	);
}

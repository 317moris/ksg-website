import { Aria } from "@/components/aria";
import { KoshisoLifePictures } from "@/components/koshiso_life";
import { Box, Card, Container, Flex, Image, VStack } from "@chakra-ui/react";

export default function Home() {
	return (
		<Box as="main">
			<KoshisoLifePictures />
			<VStack mt={2} w="100%">
				<Aria heading="ニュース テスト配置">
					<Card.Root>
						<Card.Body>
							<Card.Title>
								情報技術科News【資格情報】が更新されました。
							</Card.Title>
						</Card.Body>
					</Card.Root>
				</Aria>
			</VStack>
		</Box>
	);
}

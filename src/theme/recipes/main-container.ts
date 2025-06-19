import { defineRecipe, type RecipeVariantProps } from "@chakra-ui/react";

export const mainContainerRecipe = defineRecipe({
	className: "chakra-main-container",
	base: {
		position: "relative",
		maxWidth: "8xl",
		w: "100%",
		mx: "auto",
		px: { base: "4", md: "6", lg: "8" },
		py: "8",
		spaceY: "8",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		animation: "ease-out",
		animationName: "fade-in",
		animationDuration: "slow",
	},
	variants: {
		fluid: {
			true: {
				maxWidth: "full",
			},
		},
	},
});

export interface MainContainerProps
	extends React.PropsWithChildren<
		RecipeVariantProps<typeof mainContainerRecipe>
	> {}

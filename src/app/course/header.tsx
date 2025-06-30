import { courses } from "@/const/course";
import { CourseProps } from "@/interfaces/pages";

export function getProps(title: string) {
	return { ...courses.find((course) => course.name === title) } as CourseProps;
}

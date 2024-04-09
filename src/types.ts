export type Course = {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
};

export interface CoursesProps {
	courses: Course[];
}

export interface CourseInfoProps {
	course?: Course;
	onBackClick?(): void | React.MouseEventHandler<HTMLButtonElement>;
}

export interface CourseCardProps {
	course: Course;
	onShowCourseClick?(
		id?: string
	): void | React.MouseEventHandler<HTMLButtonElement>;
}

export interface SearchBarProps {
	setCourses: (courses?: Course[] | object) => void;
}

export type Courses = Course[];

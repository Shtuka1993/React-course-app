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
	setCourses: (courses: Course[]) => void;
}

export interface ButtonProps {
	text: string;
	onClick?(
		data?: string | React.MouseEvent
	): void | React.MouseEventHandler<HTMLButtonElement>; //MouseEvent<HTMLButtonElement>;
}

export interface InputProps {
	placeholder: string;
	value: string;
	name?: string;
	label?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CourseInfoProps {
	course?: Course;
	onBackClick?(): void | React.MouseEventHandler<HTMLButtonElement>; //MouseEvent<HTMLButtonElement>; //(): void | React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

export interface CourseCardProps {
	course: Course;
	onShowCourseClick?(
		id?: string
	): void | React.MouseEventHandler<HTMLButtonElement>; //MouseEvent<HTMLButtonElement>;
}

export interface SearchBarProps {
	setCourses: (courses?: Course[] | object) => void;
}

export type Courses = Course[];

export type CreateCourseProps = {
	id?: string;
};

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
	onClick?(): void | React.MouseEvent<HTMLButtonElement>;
}

export interface InputProps {
	placeholder: string;
	value: string;
	name?: string;
	label?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CourseInfoProps {
	course: Course;
	setShowInfo?: (state: boolean) => void;
	//setCourses?: (courses: Course[]) => void;
}

export interface CourseCardProps {
	course: Course;
	setShowInfo?: (state: boolean) => void;
	setCourseId?: (id: string) => void;
}

export interface SearchBarProps {
	setCourses: (courses?: Course[] | object) => void;
}

export type Courses = Course[];

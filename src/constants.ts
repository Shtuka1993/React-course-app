import * as types from 'src/types';

export const mockedCoursesList: types.Courses = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
		creationDate: '08/03/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

/*export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];*/

export const EMPTY_LIST_TITLE = 'Your List is Empty';
export const EMPTY_LIST_DESCRIPTION =
	"Please use 'Add New Course' button to add your first course";
export const ADD_COURSE_BTN = 'Add new course';
export const LOGOUT = 'Logout';
export const DESCRIPTION = 'Description';
export const ID = 'ID';
export const DURATION = 'Duration';
export const CREATED = 'Created';
export const AUTHORS = 'Authors';
export const BACK = 'Back';
export const SHOW_COURSE = 'Show course';
export const COURSE = 'Course';
export const SEARCH = 'Search';
export const LOGO = 'Logo';
export const TITLE = 'Title';
export const AUTHOR_NAME = 'Author Name';
export const MAIN = 'Main Info';
export const CREATE_EDIT_COURSE = 'Course Edit/Create Page';
export const PASSWORD = 'Password';
export const LOGIN = 'Login';
export const LOGIN_REGISTRATION_HINT = "If you don't have an account you may";
export const EMAIL = 'Email';
export const REGISTRATION = 'Registration';
export const NAME = 'Name';
export const CANCEL = 'Cancel';
export const CREATE = 'Create course';

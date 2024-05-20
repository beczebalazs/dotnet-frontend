interface LoginPayload {
	email: string;
	password: string;
}

interface SignUpPayload {
	email: string;
	password: string;
	username: string;
	firstName: string;
	lastName: string;
}

export type { LoginPayload, SignUpPayload };


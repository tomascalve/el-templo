

export const RegisterValidate = (values) => {

	const errors = {};
	if (!values.img) {
		errors.img = {};
	}
	if (!values.firstName.trim()) {
		errors.firstName = {};
	}
	if (!values.lastName.trim()) {
		errors.lastName = {};
	}

	if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = {};
	}
	if (values.password.length < 6) {
		errors.password = {};
	}
	if (values.password2 !== values.password) {
		errors.password2 = {};
	}

	if (!values.country) {
		errors.country = {};
	}
	if (!values.dateOfBirth) {
		errors.dateOfBirth ={};
	}

	return errors;
};

export const HasErrors = (values) => {

	if (!values.firstName.trim()) {
		return true;
	}
	if (!values.lastName.trim()) {
		return true;
	}

	if (!values.email) {
		return true;
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		return true;
	}
	if (!values.password) {
		return true;
	} else if (values.password.length < 6) {
		return true;
	}
	if (!values.password2) {
		return true;
	} else if (values.password2 !== values.password) {
		return true;
	}

	if (!values.country) {
		return true;
	}
	if (!values.img) {
		return true;
	}
	if (!values.dateOfBirth) {
		return true;
	}
	return false;
};

import {privateGet} from '../axios/privateInstance';

const baseURL = '/public';

export const getBodyParts = async () => {
	try {
		const {data} = await privateGet({url: `${baseURL}/body-parts`});
		return data.data.getBodyParts;
	} catch (error) {
		return error;
	}
};

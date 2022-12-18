export const queryParams = ({ offset, search, limit }) => {
    let query = offset || search || limit ? '?' : '';
	let added = false;
	if (query) {
		if (offset) {
			query += 'offset=' + offset;
			added = true;
		}
		if (search) {
			if (added) {
				query += '&';
			}
			query += 'search=' + search;
		}
		if (limit) {
			if (added) {
				query += '&';
			}
			query += 'limit=' + limit;
		}
	}
    return query;
}
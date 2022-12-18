const PaginatorStyles = ({ offset, totalPages }) => {
    return {
        prevPage: `${offset === 0 ? '' : 'page-item cursorPointer'}`,
        pageItem: 'page-item',
        nextPage: `${offset + 1 === totalPages ? '' : 'page-item cursorPointer'}`,
        noCursor: 'page-item no-cursor'
    }
}

export default PaginatorStyles

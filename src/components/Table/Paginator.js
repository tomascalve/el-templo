import PaginatorStyles from "./PaginatorStyles";
import './Paginator.scss';

const Paginator = ({ offset, onSetPage, total, limit = 20 }) => {

    const totalPages = Math.ceil(total / limit);

    const styles = PaginatorStyles({offset, totalPages});

    const onClickPage = (num) => {
        if(num >= 0 && num <= (totalPages - 1)) {
            if(num !== offset) {
                onSetPage(num);
            }
        }
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className={styles.prevPage}>
                    <span className="page-link" onClick={() => onClickPage(offset - 1)}>Previous</span>
                </li>
                <li className={styles.noCursor}><span className="page-link">{offset + 1} de {totalPages}</span></li>
                <li className={styles.nextPage}>
                    <span className="page-link"  onClick={() => onClickPage(offset + 1)}>Next</span>
                </li>
            </ul>
        </nav>
    )
}

export default Paginator;

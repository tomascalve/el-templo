import React from 'react'
import { randomHexadecimal } from '../../utils/mathUtils';
import Paginator from './Paginator';
import Search from './Search';

// columns [ { title, field } ]
const Table = ({ columns = [], data = [], paginator, onSetPage, offset, total, search, showSearch, setSearch, onPressSearch, extraSearch }) => {


    return (
        <div>
            {(showSearch || extraSearch) && <Search extraSearch={extraSearch} value={search} onChange={setSearch} onPressSearch={onPressSearch}/>}
            <div  style={{ overflowX: 'scroll' }}>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            {columns.map((header, i) => (<th key={randomHexadecimal()}>
                                {header?.title}
                            </th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(d => <tr key={randomHexadecimal()}>
                            {columns.map(h => <td  style={{minWidth: '80px'}} key={randomHexadecimal()}>
                                {d[h.field]}
                            </td>)}
                        </tr>)}
                    </tbody>
                </table>
            </div>
            {paginator && <Paginator onSetPage={onSetPage} offset={offset} total={total} />}
        </div>
    )
}

export default Table;
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import Input from '../../components/Input/Input'
import Button from '../Button/Button'
const Search = ({ search, onChange, onPressSearch, extraSearch }) => {
    const { t } = useTranslation();
    return (
        <div className="d-flex align-items-center col-12 justify-content-between">
            <div className="d-flex align-items-center col-4">
                {extraSearch}
            </div>
            {onPressSearch && <div className="d-flex align-items-center col-8 justify-content-end">
                <div className='col-sm-9 col-md-4'>
                    <Input value={search} onChange={(e) => onChange(e.target.value)} />
                </div>
                <div className='col-sm-3 col-md-4'>
                    <Button text={t('global.search')} onClick={onPressSearch} />
                </div>
            </div>}
        </div>
    )
}

export default Search

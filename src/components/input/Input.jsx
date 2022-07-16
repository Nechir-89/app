import SearchIcon from '@mui/icons-material/Search';
import './style.css'
// input
export default function Input({ inputState, handlechange, filterType }) {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        className={filterType === 'deepFilter' && 'deep-filter-input'}
        value={inputState}
        onChange={handlechange}
        name="serachInput" />
      <SearchIcon
        className="search-icon"
        fontSize="large" />
    </div>
  );
}

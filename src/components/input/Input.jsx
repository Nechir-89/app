import SearchIcon from '@mui/icons-material/Search';
import './style.css'
// input
export default function Input({ inputState, handlechange }) {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={inputState}
        onChange={handlechange}
        name="serachInput" />
      <SearchIcon
        className="search-icon"
        fontSize="large" />
    </div>
  );
}

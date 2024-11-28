import { useState } from "react"; 
import { useAppDispatch } from "../main";
import { setFilter } from "../redux/slices";
import styles from "./filter.module.css"; 

const FilterComponent = () => { 
  const [title, setTitle] = useState(""); 
  const [priceFrom, setPriceFrom] = useState(0); 
  const [priceTo, setPriceTo] = useState(0); 
  const dispatch = useAppDispatch();

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceFrom(Number(e.target.value));
  };

  const handleChangeTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceTo(Number(e.target.value));
  };

  const handleClick = () => {
    dispatch(
      setFilter({
        title,
        priceFrom, 
        priceTo,   
      })
    );
  };

  return (
    <div className={styles.filter}> 
      <label className={`${styles.filterLabel} text-body`}>
        <b>Title:</b>
      </label>
      <input
        className={`${styles.filterTitle} text-body input`}
        name="title"
        type="text"
        value={title}
        onChange={handleChangeTitle} 
      />
      <span className="text-body-bold">Price:</span>
      <input
        className={`${styles.filterFrom} input`}
        name="from"
        type="number"
        value={priceFrom}
        onChange={handleChangeFrom} 
      />
      <label className={styles.filterLabel}>
        <b>-</b>
      </label>
      <input
        className={`${styles.filterTo} input`}
        name="to" 
        type="number"
        value={priceTo}
        min="0"
        onChange={handleChangeTo} 
      />
      <button className="btn-search" type="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default FilterComponent; 
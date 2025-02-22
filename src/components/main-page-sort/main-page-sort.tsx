import { FilterList, PLACES_SORTING_CAPTION } from '../../consts';

type MainPageSort = {
  openHandleSort: () => void;
  changeFilterNow: (filter: FilterList) => void;
  filterNow: FilterList;
  isOpenSort: boolean;
};

const MainPageSort = ({
  openHandleSort,
  changeFilterNow,
  filterNow,
  isOpenSort,
}: MainPageSort) => (
  <form className="places__sorting">
    <span className="places__sorting-caption">{PLACES_SORTING_CAPTION}</span>
    <span
      className="places__sorting-type"
      tabIndex={0}
      onClick={openHandleSort}
    >
      {filterNow}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul
      className={`places__options places__options--custom ${
        isOpenSort && 'places__options--opened'
      }`}
    >
      {Object.values(FilterList).map((filter) => (
        <li
          className={`places__option ${
            filterNow === filter ? 'places__option--active' : ''
          }`}
          tabIndex={0}
          key={filter}
          onClick={() => changeFilterNow(filter)}
        >
          {filter}
        </li>
      ))}
    </ul>
  </form>
);

export default MainPageSort;

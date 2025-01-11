import { FilterList } from '../../consts';

type MainPageSort = {
  openHandleSort: () => void;
  changeFilterNow: (filter: string) => void;
  filterNow: string;
  isOpenSort: boolean;
};

const MainPageSort = ({
  openHandleSort,
  changeFilterNow,
  filterNow,
  isOpenSort,
}: MainPageSort) => (
  <form className="places__sorting">
    <span className="places__sorting-caption">Sort by </span>
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
      {FilterList &&
        FilterList.map((filter) => (
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

import React from 'react';
import classNames from 'classnames';
import { CursorParameter, SortType, sortType } from '../../../../const';

type SortOptionsListProps = {
  isOpen: boolean,
  activeSortType: SortType,
  onActiveSortType: (sortType: SortType) => void
}

const SortOptionsList: React.FC<SortOptionsListProps> = (props) => {
  const { isOpen, activeSortType, onActiveSortType } = props;
  const placesOptionsClass = classNames('places__options places__options--custom', {'places__options--opened': isOpen});

  return (
    <ul className={placesOptionsClass}>
      {sortType.map((type) => {
        const isActive = type === activeSortType;
        const placesParameter = isActive ? CursorParameter.Disabled : CursorParameter.Active;
        const placesOption = classNames('places__option', {'places__option--active': isActive});

        return (
          <li key={type} style={{cursor: placesParameter}} className={placesOption} tabIndex={0} onClick={() => onActiveSortType(type)}>
            {type}
          </li>
        );
      }
      )}
    </ul>
  );
};

export default SortOptionsList;

import { AutoComplete, Button, Select } from 'antd';
import { SHOP } from 'common/defines';
import { getProductsByCategory } from 'common/utils';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { setGlobalCategory, setSubCategory } from 'redux/actions';

const { Option } = Select;

function SearchBar({ fillData, placeholder }) {
  const [search, setSearch] = useState('');
  const [showDropdownOptions, setShowDropdownOptions] = useState(false);

  const globalState = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const history = useHistory();

  const location = useLocation();
  console.log(location);

  const renderAutoFillItem = () => {
    let product = getProductsByCategory(fillData, globalState.category);
    return product.map((item) => ({
      value: item.name
    }));
  };

  const onSelectCategory = (value) => {
    dispatch(setGlobalCategory(value));
    dispatch(setSubCategory(""));
  };
  const openDropdownOption = (value) => {
    setShowDropdownOptions(true);
    setSearch(value);
  };
  const closeDropdownOption = () => {
    setShowDropdownOptions(false);
  };
  const onSelectOption = (value, option) => {
    setSearch(value);
    closeDropdownOption();
  };

  const onSearch = () => {
    if (!search || search === '') {
      history.push('/');
    } else {
      history.push({
        pathname: '/',
        search: `${search}`
      });
    } //
  };

  return (
    <div className="menu-search">
      <div className="menu-search__form">
        <Select
          className="menu-search__form-select"
          defaultValue={globalState.category}
          style={{ width: 150 }}
          onChange={onSelectCategory}
          value={globalState.category}>
          {SHOP.category.map((item, index) => (
            <Option key={index} value={item.name}>
              {item.name}
            </Option>
          ))}
        </Select>
        <div className="menu-search__form-input">
          <AutoComplete
            style={{ width: 150 }}
            allowClear
            backfill={true}
            open={showDropdownOptions}
            onSearch={openDropdownOption}
            onBlur={closeDropdownOption}
            onSelect={onSelectOption}
            options={renderAutoFillItem()}
            placeholder={placeholder}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
          <Button onClick={onSearch}>
            Search <i className="icon_search" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

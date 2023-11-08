import { useState } from "react";
import "./styles/filters.css";
import MultiRangeSlider from "multi-range-slider-react";

const Filters = () => {
  const [include, setInclude] = useState(false);
  const [exclude, setExclude] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  const handleInputValue = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.id === "minInput") {
      setMinValue(value);
      setMaxValue(Math.max(value, maxValue));
    } else {
      setMaxValue(value);
      setMinValue(Math.min(value, minValue));
    }
  };

  const handleIncludeChange = (event) => {
    if (event.target.checked) {
      setInclude(true);
      setExclude(false);
    } else {
      setInclude(false);
    }
  };

  const handleExcludeChange = (event) => {
    if (event.target.checked) {
      setExclude(true);
      setInclude(false);
    } else {
      setExclude(false);
    }
  };

  return (
    <div className={"filters"}>
      <h3 onClick={toggleDropdown}>Filters</h3>
      <div className={`dropdown-content ${isDropdownVisible ? "open" : ""}`}>
        <div className="price">
          <label>Price</label>
          <MultiRangeSlider
            min={0}
            max={10000}
            onChange={handleInput}
            onInput={handleInput}
            label={false}
            ruler={false}
            style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
            barLeftColor="#047BD5"
            barInnerColor="#047BD5"
            barRightColor="#047BD5"
            thumbLeftColor="#00d0ff"
            thumbRightColor="#00d0ff"
          />
          <div className="price-range">
            <div className="group">
              <label>Min</label>
              <input
                type="number"
                id="minInput"
                value={minValue}
                onChange={handleInputValue}
              />
            </div>
            <div className="group">
              <label>Max</label>
              <input
                type="number"
                id="maxInput"
                value={maxValue}
                onChange={handleInputValue}
              />
            </div>
          </div>
        </div>

        <div className="rating">
          <label>Customer Ratings</label>
          <div className="group">
            <input type="checkbox" id="rating4" />
            <label htmlFor="rating">4★ & above</label>
          </div>
          <div className="group">
            <input type="checkbox" id="rating3" />
            <label htmlFor="rating">3★ & above</label>
          </div>
          <div className="group">
            <input type="checkbox" id="rating2" />
            <label htmlFor="rating">2★ & above</label>
          </div>
          <div className="group">
            <input type="checkbox" id="rating1" />
            <label htmlFor="rating">1★ & above</label>
          </div>
        </div>

        <div className="discount">
          <label>Discount</label>
          <div className="group">
            <input type="checkbox" id="discount6" />
            <label htmlFor="discount">60% or more</label>
          </div>
          <div className="group">
            <input type="checkbox" id="discount5" />
            <label htmlFor="discount">50% or more</label>
          </div>
          <div className="group">
            <input type="checkbox" id="discount4" />
            <label htmlFor="discount">40% or more</label>
          </div>
          <div className="group">
            <input type="checkbox" id="discount3" />
            <label htmlFor="discount">30% or more</label>
          </div>
          <div className="group">
            <input type="checkbox" id="discount2" />
            <label htmlFor="discount">20% or more</label>
          </div>
          <div className="group">
            <input type="checkbox" id="discount1" />
            <label htmlFor="discount">10% or more</label>
          </div>
        </div>

        <div className="availability">
          <label>Availability</label>
          <div className="group">
            <input
              type="checkbox"
              id="include"
              checked={include}
              onChange={handleIncludeChange}
            />
            <label htmlFor="availability">Include Out of Stock</label>
          </div>
          <div className="group">
            <input
              type="checkbox"
              id="exclude"
              checked={exclude}
              onChange={handleExcludeChange}
            />
            <label htmlFor="availability">Exclude Out of Stock</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;

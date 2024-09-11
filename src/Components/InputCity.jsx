function InputCity(props) {
  return (
    <div className="city-search-container">
      <label htmlFor="city-input">City: </label>
      <input
        type="text"
        id="city-input"
        className="city-input"
        onChange={props.handleChange}
        value={props.cityInput}
        onKeyDown={props.handleKeyDown}
      />
      <button className="submit-btn" type="submit" onClick={props.handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default InputCity;

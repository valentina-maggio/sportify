// eslint-disable-next-line react/prop-types
function Dropdown({ label, value, options, onChange }) {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
         {/* eslint-disable-next-line react/prop-types */}
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;

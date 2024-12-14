
const ReactSelect = ({ options, value, onChange, placeholder }:any) => {
  return (
    <div className="mb-4">
      <select
        className="block w-[300px] border border-textPrimary rounded-md shadow-sm  sm:text-sm p-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option:any) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ReactSelect;

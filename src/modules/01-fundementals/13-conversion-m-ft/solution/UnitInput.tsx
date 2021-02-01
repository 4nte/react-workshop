import React, {ChangeEvent} from 'react';

type Props = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
  unit: "m" | "ft",
  value: number
}
const UnitInput: React.FC<Props> = ({ handleChange, unit, value }) => {
  return (
    <div>
      <label htmlFor={unit}>{unit === 'm' ? 'Enter value in meters:' : 'Enter value in feet:'}</label>
      <input id={unit} type="number" onChange={handleChange}  value={value} />
    </div>
  );
};

export default UnitInput;

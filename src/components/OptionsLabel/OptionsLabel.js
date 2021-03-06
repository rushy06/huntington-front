import React from 'react';
import { FiCalendar } from 'react-icons/fi';

import { Container } from './styles';

function OptionsLabel({
 label, data, value, onSelect,
}) {
  const select = (e, item) => {
    e.preventDefault();
    onSelect(item);
  };

  return (
    <Container>
      <span>{label}</span>
      <div className="options-container">
        {data.map((item) => (
          <button onClick={(e) => select(e, item)} className={value === item ? 'selected' : ''}>{item}</button>
        ))}
      </div>
    </Container>
  );
}

export default OptionsLabel;

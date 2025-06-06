import React from 'react';

/**
 * A reusable button component.
 *
 * @param {object} props - The component's props.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {string} props.label - The text to display on the button.
 * @returns {JSX.Element} The rendered button element.
 */
const Button = ({ onClick, label }) => {
  const styles = {
    padding: '8px 15px',
    border: '1px solid #ccc',
    backgroundColor: '#e0e0e0',
    cursor: 'pointer',
  };

  return (
    <button onClick={onClick} style={styles}>
      {label}
    </button>
  );
};

export default Button;
interface Props {
  buttonLabels: string[]; 
  onBtn: () => void; 
}

const Button = ({ buttonLabels, onBtn }: Props) => {
  return (
    <div className="button-group">
      {buttonLabels.map((label, index) => (
        <button
          key={index}
          type="button"
          className={`btn btn-${label.toLowerCase()}`}
          onClick={onBtn} 
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Button;

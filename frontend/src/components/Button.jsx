const Button = ({ styles, text, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`py-4 w-full redHat 
      font-medium text-[18px] text-primary 
      bg-form-gradient rounded-[10px] text-white
      outline-none ${styles}`}
  >
    {text}
  </button>
);

export default Button;

const Button = ({ styles,text, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={`py-4 w-full redHat 
      font-medium text-[18px] text-primary 
      bg-blue-gradient rounded-[10px] 
      outline-none ${styles}`}
    >
      {text}
    </button>
  );
  
  export default Button;
  
const NavigationIconButton = ({ onClick, title, children, className = '' }) => (
    <button onClick={onClick} className={`btn-icon ${className}`} title={title}>
        {children}
    </button>
);

export default NavigationIconButton;

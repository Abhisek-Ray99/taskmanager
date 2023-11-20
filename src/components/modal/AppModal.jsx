import './style.css'

const AppModal = ({ show, onClose, header, children, footer }) => {
    return (
        show && (
        <>
            <div className="modal-backdrop" onClick={onClose}></div>
            <div className={`modal-wrapper ${show ? "active" : ""} rounded-lg`}>
                {header}
                <div className="modal-body">{children}</div>
                <div>
                    {footer}
                </div>
            </div>
        </>
        )
    );
};

export default AppModal
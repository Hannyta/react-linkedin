import Raect from "react";

const ComponenteB = ({ textoBtn, onClick}) => {

    return (
        <button onClick={onClick}>{ textoBtn} </button>
    );
};

export default ComponenteB;
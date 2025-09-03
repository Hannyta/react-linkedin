import Raect from "react";

const ComponenteB = ({ textoBtn}) => {

    const manejarClick = () => {
        alert("click");
    }

    return (
        <button onClick={manejarClick}>{ textoBtn} </button>
    );
};

export default ComponenteB;
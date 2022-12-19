import UsuarioEntrada from "./UsuarioEntrada";

const {Component} = require("react");

const UsuarioSaida=(props) => {
    return (
        <div>
            <h1>{props.name}.</h1>
            <h2> Digite seu texto</h2>
        </div>
    );
}
export default UsuarioSaida;
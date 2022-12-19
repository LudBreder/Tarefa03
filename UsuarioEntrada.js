//import  React, {Component} from "react";
import UsuarioSaida from "./UsuarioSaida";
import { useState } from "react";

//const {Component} = require("react");

function UsuarioEntrada(props){

    const[texto, settexto]= useState("");

        function alteratexto(frase){
            console.log(frase)
            settexto(texto)
        }
    return (
        <div>
        <input type="text" name="nome" onChange={e=>{criatexto(e.target.value)}}></input>
            <UsuarioSaida name={texto}/>
            </div>
    );
}
export default UsuarioEntrada;
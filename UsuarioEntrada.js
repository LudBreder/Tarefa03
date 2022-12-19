//import  React, {Component} from "react";
import UsuarioSaida from "./UsuarioSaida";
import { useState } from "react";

//const {Component} = require("react");

function UsuarioEntrada(props){

    const[texto, settexto]= useState("");

        function alteratexto(frase){
            console.log(frase)
            settexto(frase)
        }
    return (
        <div>
        <input type="text" name="nome" onChange={e=>{alteratexto(e.target.value)}}></input>
            <UsuarioSaida name={texto}/>
            </div>
    );
}
export default UsuarioEntrada;
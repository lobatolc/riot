import React, {useState} from "react";
import "./styles.css";
import logo from "../images/logo.png";
import searchIMG from "../images/search.png";
// import { Container } from './styles';

function Header() {

  const [search, setSearch] = useState({
    campo01: "", 
    campo02: "",
    campo03: ""
  });

  function handleOnChange(node){
    const {name, value} = node.target 
    // atribui o valor digitado na variavel name, armazenando
    // ...search 'e o resto que desejamos manter, mesmo que n~ao seja alterado
    // ...resto, [campo a ser alterado]: valor a ser guardado
    setSearch({...search, [name]: value}) //  se colocar entre [], tu substitui o name pelo campo01, por ex
    console.log(search)
  }

  return (
    <div className="cabecalho">
        
      <div className="esquerda">
        <div className="logoContainer">
          <img className="logo" src={logo}></img>
        </div>
        <div className="abasContainer">
          <div className="abas">Quem somos</div>
          <div className="abas">Trabalhe conosco</div>
          <div className="abas">Notícias</div>
        </div>
      </div>

      <div className="direita">
        <div className="pesquisa">
          <input type="text" placeholder="Buscar" name="campo01" className="campoPesquisa" value={search.campo01} onChange={handleOnChange.bind(this)}/>
          <input type="text" placeholder="Buscar" name="campo02" className="campoPesquisa" value={search.campo02} onChange={handleOnChange.bind(this)}/>
          <input type="text" placeholder="Buscar" name="campo03" className="campoPesquisa" value={search.campo03} onChange={handleOnChange.bind(this)}/>
          <img className="search" src={searchIMG}></img>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React, {useState} from "react";
import "./styles.css"
function Form(){
    const [formu, setFormu] = useState({
        nome:"", //  POE IGUAL AO DE LA PELO AMOR 
        email:"",
        password:"",
        pswConfirm:""

    });

    function handleOnChange(node){
        const {name, value} = node.target
        setFormu({...formu, [name]: value})
        console.log(formu)
    }

    function verificaDados(node){
        var aux = formu.nome.length;
        if((formu.password==formu.pswConfirm)&&(formu.nome.length>2)){
        alert('Tudo certo')
        }

        node.preventDefault(); 
    }

    function msgSucesso(node){
        alert('Nome: ' + formu.nome + '\n' +
                'email: ' + formu.email + '\n' +
                'senha: ' + formu.password + '\n'
        )
        //window.location.href = 'https://youtube.com' 
        node.preventDefault(); 
    }
    return(
        <div className="formContainer">
            <form className="formulario" onSubmit={verificaDados.bind(this)}>
                <div className="todosCampos">
                    <div>
                        <label for="nome"></label>
                        <input type="text" name="nome" required placeholder="nome" className="campo" value={formu.nome} onChange={handleOnChange.bind(this)}/>
                    </div>
                    <div>
                        <label for="email"></label>
                        <input type="email" name="email" required placeholder="email" className="campo" value={formu.email} onChange={handleOnChange.bind(this)}/>
                    </div>
                    <div>
                        <label for="password"></label>
                        <input type="password" name="password" required placeholder="senha" className="campo" value={formu.psw} onChange={handleOnChange.bind(this)}/>
                    </div>
                    <div>
                        <label for="password"></label>
                        <input type="password" name="pswConfirm" required placeholder="Confirme sua senha" className="campo" value={formu.pswConfirm} onChange={handleOnChange.bind(this)}/>
                    </div>
                    <div> 
                        <button type="submit" className="btnInsc"  >/ Inscreva-se</button>
                    </div>
                </div>
            </form>
        </div>

    )
        
}

export default Form;
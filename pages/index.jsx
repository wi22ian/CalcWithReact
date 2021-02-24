import styles from '../styles/styles.module.css'

export default function page()  {
    return (
        <Calculadora></Calculadora>   
    )
}

function Calculadora() {
    return (
        <div className="Calculadora">
            <Botao value="1" className="valorInferior"></Botao>
            <Botao value="2" className="valorInferior"></Botao>
            <Botao value="3" className="valorInferior"></Botao>
            <Botao value="4" className="valorMeio"></Botao>
            <Botao value="5" className="valorMeio"></Botao>
            <Botao value="6" className="valorMeio"></Botao>
            <Botao value="7" className="valorSuperior"></Botao>
            <Botao value="8" className="valorSuperior"></Botao>
            <Botao value="9" className="valorSuperior"></Botao>
            <Botao value="=" className="operadorIgual"></Botao>
            <Botao value="-" className="operador"></Botao>
            <Botao value="+" className="operador"></Botao>
            <Botao value="/" className="operador"></Botao>
            <Botao value="*"></Botao>
            <div></div>
        </div>
    )
}

function Botao(props) {
    if(props.value <= 3) {
        return <button className={styles.test2}>{props.value}</button>
    }
    return(
        <button className={styles.test}>{props.value}</button>    
    )
}   
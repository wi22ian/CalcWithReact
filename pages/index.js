export default function page()  {
    
    return (
        <>
        <h1>Calculadora</h1>
        <div className="calculator">
            <div className="operatorsTop">
                <button id="more">+</button>
                <button id="less">-</button>
                <button id="divide">/</button>
                <button id="multiple">*</button>
            </div>
            <div className="numbersTop">
                <button>7</button>
                <button>8</button>
                <button>9</button>               
            </div>
            <div className="numbersMiddle">
                <button>4</button>
                <button>5</button>
                <button>6</button>               
            </div>
            <div className="numbersBottom">
                {this.criaBotoes(1)}
                <button>2</button>
                <button>3</button>               
            </div>
        </div>
        </>
    ) 
}

criaBotoes(i) { return <button value={i}></button> }

function adicionaFuncButton() {
    const botoes = document.querySelectorAll('button');
    array.forEach(botoes => {
        this.addEventListener('click', pegaOValor);
    });
}
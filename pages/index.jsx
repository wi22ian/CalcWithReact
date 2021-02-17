export default function page()  {
    
    return (
        <>
        <h1>Calculadora</h1>
        <div className="calculator">
            <div className="operatorsTop">
                
                
                
                <button id="multiple">s*</button>
            </div>
            <div className="numbersTop">
                <button>7</button>
                <button>8</button>
                <button>9</button> 
                <button id="more">+</button>              
            </div>
            <div className="numbersMiddle">
                <button>4</button>
                <button>5</button>
                <button>6</button>     
                <button id="less">-</button>          
            </div>
            <div className="numbersBottom">
                <button>1</button>
                <button>2</button>
                <button>3</button>    
                <button id="equals">=</button>        
            </div>
        </div>
        </>
    ) 
}

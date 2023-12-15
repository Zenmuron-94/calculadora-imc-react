import { useState } from "react"
import styles from './Calculadora.module.css'

const Calculadora = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setIMC] = useState(null);
    const [classificacao, setClassificacao] = useState('');


    const formatarAltura = (valor) => {
        const digits = valor.replace(/\D/g, '');
        const alturaFormatada = digits.length > 2 ? `${digits.slice(0, -2)}.${digits.slice(-2)}` : digits;

        setAltura(alturaFormatada);
    };


    const calcularIMC = (altura, peso) => {
        const calculoIMC = peso / (altura * altura);
        setIMC(calculoIMC);

        if (calculoIMC <= 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (calculoIMC <= 24.9) {
            setClassificacao('Peso Adequado');
        } else if (calculoIMC <= 29.9) {
            setClassificacao('Sobrepeso');
        } else if (calculoIMC <= 34.9) {
            setClassificacao('Obesidade Grau 1');
        } else if (calculoIMC <= 39.9) {
            setClassificacao('Obesidade Grau 2');
        } else {
            setClassificacao('Obesidade Grau 3');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const pesoDecimal = parseFloat(peso.replace(',', '.'));
        calcularIMC(parseFloat(altura), pesoDecimal);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="altura">Altura:</label>
                <input  id="altura" className={styles.form} type="text" placeholder="Digite sua altura" onChange={(e) => formatarAltura(e.target.value)} value={altura} />
                <label className={styles.label} htmlFor="peso">Peso:</label>
                <input id="peso" className={styles.form} type="number" step="0.1" placeholder="Digite seu peso" onChange={(e) => setPeso(e.target.value)} /> <br />
                <button className={styles.btn} type="submit">Calcular IMC</button>
            </form>

            {imc !== null && (
                <div className={styles.resultado}>
                    <p>IMC: {imc.toFixed(2)}</p>
                    <p>Classificação: {classificacao}</p>
                </div>
            )}
        </div>
    );
};


export default Calculadora;
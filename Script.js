function Calcu()
{
    let alt = Number(window.document.getElementById('altura_val').value);
    let pes = Number(window.document.getElementById('peso_val').value);

    let imc = pes/(alt*alt);
    let name = window.document.getElementById('nome_val').value;
    let IMC = window.document.getElementById('resposta');
    IMC.innerHTML = 
    `IMC: ${name} seu Índice de Massa Corporal(IMC) é ${imc}!`;
}
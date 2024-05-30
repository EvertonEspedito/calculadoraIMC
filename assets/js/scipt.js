const form = document.getElementById('formImc');

form.addEventListener('submit', function (event) { 
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight/(height * height)).toFixed(2);

    const value = document.getElementById('value');
    let descrition = "";

    value.classList.add('attetion');

    document.getElementById('info').classList.remove('hidden');

    if (bmi <18.5) {
        descrition = "Cuidao você esta abaixo do peso";
    } else if (bmi >= 18.5 && bmi <25) {
        descrition = "Você está no peso normal";
        
        value.classList.remove('attetion');
        value.classList.add('normal');
    }else if (bmi >= 25 && bmi <=30) {
        descrition = "Você está acima do peso";
    }else if (bmi >30) {
        descrition = "Você está obeso";
    }

    value.textContent = bmi.replace('.',',');
    document.getElementById('descri').textContent = descrition
});
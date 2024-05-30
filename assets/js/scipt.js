const form = document.getElementById('formImc');

form.addEventListener('submit', function (event) { 
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const socialIcon = document.getElementById('icon-social');
    const bmi = (weight/(height * height)).toFixed(2);
    const screenW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const value = document.getElementById('value');
    let descrition = "";

    value.classList.add('attetion');
    
    socialIcon.classList.add('fa-lg');

    document.getElementById('info').classList.remove('hidden');

    /**IMC */
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
    /**tamanho da tela */
    if (screenW < 1080) {
        socialIcon.classList.remove('fa-lg');
        socialIcon.classList.add('fa-xl');
    }
    
    value.textContent = bmi.replace('.',',');
    document.getElementById('descri').textContent = descrition
});

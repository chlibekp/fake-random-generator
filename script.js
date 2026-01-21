document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const resultContainer = document.getElementById('result-container');
    const resultDiv = document.getElementById('result');
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const loader = document.querySelector('.loader');
    const btnText = document.querySelector('.btn-text');
    const timestampSpan = document.getElementById('timestamp');

    generateBtn.addEventListener('click', () => {
        const min = parseInt(minInput.value);
        const max = parseInt(maxInput.value);

        // Validation
        if (isNaN(min) || isNaN(max)) {
            alert('Prosím zadejte platná čísla.');
            return;
        }

        if (min > max) {
            alert('Minimální hodnota nemůže být větší než maximální.');
            return;
        }

        // UI Loading State
        generateBtn.disabled = true;
        btnText.style.display = 'none';
        loader.style.display = 'block';
        resultContainer.classList.add('hidden');

        // Simulate complex calculation
        setTimeout(() => {
            const now = new Date();
            
            // Show Result (Always 3)
            resultDiv.textContent = '3';
            timestampSpan.textContent = `Čas vygenerování: ${now.toLocaleString('cs-CZ')}`;
            
            // UI Reset
            resultContainer.classList.remove('hidden');
            generateBtn.disabled = false;
            btnText.style.display = 'block';
            loader.style.display = 'none';
        }, 1500); // 1.5s delay for "realism"
    });
});

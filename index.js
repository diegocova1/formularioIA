function validateForm() {
    // Validación básica del formulario, puedes personalizarla según tus necesidades
    const form = document.getElementById('iaForm');
    if (!form.checkValidity()) {
        // Si el formulario no es válido, se muestra un mensaje de error (puedes personalizar este comportamiento)
        alert('Por favor, responde todas las preguntas.');
        return false;
    }

    // Obtener respuestas seleccionadas por el usuario
    const answers = {
        pregunta1: document.getElementById('pregunta1').value,
        pregunta2: document.getElementById('pregunta2').value,
        pregunta3: document.getElementById('pregunta3').value,
        pregunta4: document.getElementById('pregunta4').value,
        pregunta5: document.getElementById('pregunta5').value
    };

    // Respuestas correctas
    const correctAnswers = {
        pregunta1: 'a',
        pregunta2: 'b',
        pregunta3: 'a',
        pregunta4: 'a',
        pregunta5: 'a'
    };

    // Verificar respuestas y almacenar resultados
    const results = [];
    let score = 0;

    for (const question in answers) {
        const userAnswer = answers[question];
        const correctAnswer = correctAnswers[question];
        const correct = (userAnswer === correctAnswer);
        results.push({
            question: question,
            userAnswer: userAnswer,
            correctAnswer: correctAnswer,
            correct: correct
        });
        if (correct) {
            score++;
        }
    }

    // Almacenar resultados en sessionStorage
    sessionStorage.setItem('results', JSON.stringify(results));
    sessionStorage.setItem('score', score);

    // Aplicar estilos a las respuestas en el formulario
    for (const question in answers) {
        const selectElement = document.getElementById(question);
        const userAnswer = answers[question];
        const correctAnswer = correctAnswers[question];
        if (userAnswer === correctAnswer) {
            selectElement.classList.add('correct');
        } else {
            selectElement.classList.add('incorrect');
        }
    }

    // Devolver false para evitar el envío real del formulario
    return false;
}

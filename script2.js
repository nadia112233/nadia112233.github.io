document.addEventListener('DOMContentLoaded', function() {
    const checkboxGroups = document.querySelectorAll('.checkbox-group');
  
    checkboxGroups.forEach(group => {
      const checkbox = group.querySelector('input[type="checkbox"]');
      const label = group.querySelector('label');
      const explanation = group.querySelector('.explanation');
      const resultIcon = group.querySelector('.result-icon');
      const correct = group.getAttribute('data-correct') === 'true';
  
      // Add debug log to check if event listener is added
      console.log('Event listener added to checkbox:', checkbox.id);
  
      // Add the event listener directly on the checkbox change
      checkbox.addEventListener('change', function() {
        console.log('Checkbox changed:', checkbox.id, checkbox.checked); // Debugging
  
        if (checkbox.checked) {
          if (correct) {
            label.classList.add('correct');
            label.classList.remove('incorrect');
            resultIcon.textContent = '✔'; // Show tick for correct
            console.log('Correct answer selected');
          } else {
            label.classList.add('incorrect');
            label.classList.remove('correct');
            resultIcon.textContent = '✖'; // Show cross for incorrect
            explanation.classList.remove('hidden'); // Show explanation for incorrect answer
            console.log('Incorrect answer selected, explanation shown');
          }
        } else {
          // Reset everything when unchecked
          label.classList.remove('correct', 'incorrect');
          resultIcon.textContent = ''; // Reset icon
          explanation.classList.add('hidden'); // Hide explanation
          console.log('Checkbox unchecked, resetting state');
        }
      });
    });
  });
  
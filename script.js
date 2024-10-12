// Modals
const studentsModal = document.getElementById('studentsModal');
const teachersModal = document.getElementById('teachersModal');

// Boxes
const studentsBox = document.getElementById('studentsBox');
const teachersBox = document.getElementById('teachersBox');

// Close Buttons
const closeStudents = document.getElementById('closeStudents');
const closeTeachers = document.getElementById('closeTeachers');

// Open Modals
studentsBox.addEventListener('click', () => {
  studentsModal.classList.add('show');
});

teachersBox.addEventListener('click', () => {
  teachersModal.classList.add('show');
});

// Close Modals
closeStudents.addEventListener('click', () => {
  studentsModal.classList.remove('show');
});

closeTeachers.addEventListener('click', () => {
  teachersModal.classList.remove('show');
});

// Close Modal on Outside Click
window.addEventListener('click', (event) => {
  if (event.target == studentsModal) {
    studentsModal.classList.remove('show');
  }
  if (event.target == teachersModal) {
    teachersModal.classList.remove('show');
  }
});

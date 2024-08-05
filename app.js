const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".ba");
hiddenElements.forEach((el) => observer.observe(el));



const modal = document.querySelector('.modal');
const buttons = document.querySelectorAll('.toggleButton');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.toggle('open');
    });
});

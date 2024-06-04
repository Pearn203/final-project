document.addEventListener('DOMContentLoaded', () => {
  const reviewCards = document.querySelectorAll('.review_card');

  reviewCards.forEach(card => {
    card.addEventListener('click', (event) => {
      // Prevent the click event from propagating to other elements
      event.stopPropagation();

      const body = document.querySelector('body');

      if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        body.classList.remove('blurred');
      } else {
        reviewCards.forEach(c => c.classList.remove('expanded'));
        card.classList.add('expanded');
        body.classList.add('blurred');
      }
    });
  });

  // Remove the expanded class when clicking outside any review card
  document.addEventListener('click', () => {
    reviewCards.forEach(card => card.classList.remove('expanded'));
    document.querySelector('body').classList.remove('blurred');
  });
});
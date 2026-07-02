function toggleDetails(button) {
  const details = button.nextElementSibling;
  details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

function addToWishlist(button) {
  const card = button.parentElement;
  const title = card.querySelector('h3').innerText;
  const price = card.querySelector('.price').innerText;

  const wishlist = document.getElementById('wishlistItems');
  const li = document.createElement('li');
  li.textContent = `${title} - ${price}`;
  wishlist.appendChild(li);

  alert(`${title} has been added to your wishlist!`);
}

function buyArt(button) {
  const card = button.parentElement;
  const title = card.querySelector('h3').innerText;
  const price = card.querySelector('.price').innerText;

  alert(`You bought "${title}" for ${price}!`);
}

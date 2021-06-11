const d = document;

export default function header() {
  const header = d.createElement('header');
  header.classList.add('flex', 'secondary');

  const h1 = d.createElement('h1');
  h1.textContent = 'Mortal';
  header.appendChild(h1);

  return header;
}

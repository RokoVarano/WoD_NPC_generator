const d = document;

export default function navbar() {
  const navbar = d.createElement('nav');
  navbar.classList.add('flex', 'primary');

  const h1 = d.createElement('h1');
  h1.textContent = 'oWoD NPC Generator';
  navbar.appendChild(h1);

  return navbar;
}

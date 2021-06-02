const d = document;

export default function main() {
  const main = d.createElement('main');
  const form = d.createElement('form');

  const generalInfo = section('');
  const leftInfo = article('', infoContent('Name', 'Player', 'Chronicle'));
  const midInfo = article('', infoContent('Nature', 'Demeanor', 'Concept'));
  const rightInfo = article('', infoContent('Age', 'Sex', 'Residence'));


  generalInfo.appendChild(leftInfo);
  generalInfo.appendChild(midInfo);
  generalInfo.appendChild(rightInfo);

  form.appendChild(generalInfo);
  main.appendChild(form);

  return main;
}

const section = (title) => {
  const section = d.createElement('section');
  if (title !== '') {
    section.id = title;
    const h3 = d.createElement('h3');
    h3.textContent = title;
    section.appendChild(h3);
  }

  return section;
};

const article = (title, content) => {
  const article = d.createElement('article');
  if (title !== '') {
    article.id = title;
    const p = d.createElement('p');
    p.textContent = title;
    article.appendChild(p);
  }

  article.appendChild(content);

  return article;
};

// set Each article here

const infoContent = (first, second, third) => {
  const ul = d.createElement('ul');

  ul.appendChild(nameWidget(first));
  ul.appendChild(nameWidget(second));
  ul.appendChild(nameWidget(third));

  return ul;
};


const nameWidget = (title) => {
  const li = d.createElement('li');

  const label = d.createElement('label');
  label.for = title;
  label.textContent = title;

  const inputText = d.createElement('input');
  inputText.type = 'text';
  inputText.id = title;
  inputText.name = title;

  li.appendChild(label);
  li.appendChild(inputText);

  return li;
};

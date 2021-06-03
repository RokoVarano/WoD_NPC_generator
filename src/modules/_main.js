/* eslint-disable max-len */
const d = document;

export default function main() {
  const main = d.createElement('main');
  const form = d.createElement('form');

  const leftInfo = article('', infoContent(['Name', 'Player', 'Chronicle']));
  const midInfo = article('', infoContent(['Nature', 'Demeanor', 'Concept']));
  const rightInfo = article('', infoContent(['Age', 'Sex', 'Residence']));
  const generalInfo = section('General Info', [leftInfo, midInfo, rightInfo]);

  const leftAttr = article('Physical', attributesContent(['Strength', 'Dexterity', 'Stamina']));
  const midAttr = article('Social', attributesContent(['Charisma', 'Manipulation', 'Appearence']));
  const rightAttr = article('Mental', attributesContent(['Perception', 'Intelligence', 'Wits']));
  const attrInfo = section('Attributes', [leftAttr, midAttr, rightAttr]);

  // const attributes = section('attributes');

  main.appendChild(form);
  form.appendChild(generalInfo);
  form.appendChild(attrInfo);

  // form.appendChild(attributes);

  return main;
}

const section = (title, articles) => {
  const section = d.createElement('section');
  if (title !== '') {
    section.id = title;
    const h3 = d.createElement('h3');
    h3.textContent = title;
    section.appendChild(h3);
  }

  const articleContainer = d.createElement('div');
  articleContainer.classList.add('article-container');
  section.appendChild(articleContainer);

  articles.map( (article) => {
    articleContainer.appendChild(article);
  });

  return section;
};

const article = (title, content) => {
  const article = d.createElement('article');
  article.classList.add('secondary');
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

const infoContent = (infos) => {
  const ul = d.createElement('ul');

  infos.map((info) => ul.appendChild(nameWidget(info)));

  return ul;
};

const attributesContent = (infos) => {
  const ul = d.createElement('ul');

  infos.map((info) => ul.appendChild(attrWidget(info)));

  return ul;
};

// small Widgets


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

const attrWidget = (title) => {
  const li = d.createElement('li');

  const label = d.createElement('label');
  label.for = title;
  label.textContent = title;
  li.appendChild(label);

  const radioContainer = d.createElement('div');
  radioContainer.classList.add('radio-container');

  radioContainer.appendChild(widgetDot(title, 1));
  radioContainer.appendChild(widgetDot(title, 2));
  radioContainer.appendChild(widgetDot(title, 3));
  radioContainer.appendChild(widgetDot(title, 4));
  radioContainer.appendChild(widgetDot(title, 5));

  li.appendChild(radioContainer);

  return li;
};

const widgetDot = (title, value) => {
  const dot = d.createElement('i');
  dot.classList.add('far', 'fa-circle');
  dot.name = title;
  dot.value = value;

  dot.addEventListener('click', () => {
    const children = [...dot.parentNode.children];

    children.map(
        (child) => changeDotColor(child, dot.value),
    );
  });

  return dot;
};

const changeDotColor = (child, value) => {
  if (child.value <= value) {
    child.classList.remove('far');
    child.classList.add('fas');
  } else {
    child.classList.remove('fas');
    child.classList.add('far');
  }
};

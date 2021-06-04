/* eslint-disable max-len */
const d = document;

export default function main() {
  const main = d.createElement('main');
  const form = d.createElement('form');
  const leftSide = d.createElement('div');
  leftSide.classList.add('side');
  const rightSide = d.createElement('div');
  rightSide.classList.add('side');
  form.appendChild(leftSide);
  form.appendChild(rightSide);

  const leftInfo = article('', infoContent(['Name', 'Player', 'Chronicle']));
  const midInfo = article('', infoContent(['Nature', 'Demeanor', 'Concept']));
  const rightInfo = article('', infoContent(['Age', 'Sex', 'Residence']));
  const generalInfo = section('General Info', [leftInfo, midInfo, rightInfo]);

  const leftAttr = article('Physical', attributesContent(['Strength', 'Dexterity', 'Stamina']));
  const midAttr = article('Social', attributesContent(['Charisma', 'Manipulation', 'Appearence']));
  const rightAttr = article('Mental', attributesContent(['Perception', 'Intelligence', 'Wits']));
  const attrInfo = section('Attributes', [leftAttr, midAttr, rightAttr]);

  const leftAbb = article('Talents',
      attributesContent([
        'Alertness', 'Athletics', 'Brawl',
        'Dodge', 'Empathy', 'Expression',
        'Intimidation', 'Leadership', 'Streetwise',
        'Subterfuge',
      ],
      ),
  );
  const midAbb = article('Skills',
      attributesContent([
        'Animal Ken', 'Crafts', 'Drive',
        'Etiquette', 'Firearms', 'Melee',
        'Performance', 'Security', 'Stealth',
        'Survival',
      ],
      ),
  );
  const rightAbb = article('Knowledges',
      attributesContent([
        'Academics', 'Computer', 'Finance',
        'Investigation', 'Law', 'Linguistics',
        'Medicine', 'Occult', 'Politics',
        'Science',
      ],
      ),
  );

  const abbInfo = section('Abilities', [leftAbb, midAbb, rightAbb]);

  const bgArticle = article('Backgrounds',
      attributesContent([
        'Allies', 'Contacts', 'Fame',
        'Influence', 'Mentor', 'Resources',
        'Status', '', '',
      ],
      ),
  );

  const numinaArticle = article('Numina',
      numinaContent(),
  );

  const virtuesArticle = article('',
      virtuesContent([
        'Conscience', 'Self Control', 'Courage',
      ],
      ['Humanity', 'WillPower'],
      ),
  );

  const advantagesInfo = section('Advantages', [bgArticle, numinaArticle, virtuesArticle]);

  const meritsArticle = article('Merits/Flaws', meritsContent());

  const descriptionArticle = article('Description', descriptionContent());

  const quirksInfo = section('', [meritsArticle, descriptionArticle]);

  main.appendChild(form);
  form.appendChild(leftSide);
  form.appendChild(rightSide);
  leftSide.appendChild(generalInfo);
  leftSide.appendChild(attrInfo);
  leftSide.appendChild(abbInfo);
  rightSide.appendChild(advantagesInfo);
  rightSide.appendChild(quirksInfo);

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

const numinaContent = () => {
  const ul = d.createElement('ul');
  const label = d.createElement('label');
  label.value = 'numina-type';
  label.textContent = 'Type';

  ul.appendChild(selectWidget([
    'Sorcery', 'Psychic', 'Theurgy',
    'Blood Affinity', 'Disciplines',
    'Garou gifts', 'True Faith',
  ]));

  ul.appendChild(attrWidget(''));
  ul.appendChild(attrWidget(''));
  ul.appendChild(attrWidget(''));
  ul.appendChild(attrWidget(''));
  ul.appendChild(attrWidget(''));
  ul.appendChild(attrWidget(''));
  ul.appendChild(attrWidget(''));


  return ul;
};

const virtuesContent = (infos, souls) => {
  const ul = d.createElement('ul');
  const virtuesp = d.createElement('p');
  virtuesp.textContent = 'Virtues';
  ul.appendChild(virtuesp);

  infos.map((info) => ul.appendChild(attrWidget(info)));

  const soulp = d.createElement('p');
  soulp.textContent = 'Soul';
  soulp.id = 'soulp';
  soulp.style.borderTop = '';
  ul.appendChild(soulp);

  souls.map((soul) => ul.appendChild(soulWidget(soul)));

  return ul;
};

const meritsContent = () => {
  const ul = d.createElement('ul');
  ul.appendChild(meritsWidget());
  ul.appendChild(meritsWidget());
  ul.appendChild(meritsWidget());
  ul.appendChild(meritsWidget());
  ul.appendChild(meritsWidget());
  ul.appendChild(meritsWidget());
  ul.appendChild(meritsWidget());
  ul.appendChild(meritsWidget());
  return ul;
};

const descriptionContent = () => {
  const ul = d.createElement('ul');
  ul.style.display;

  ul.appendChild(descriptionWidget());

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

  if (title === '') {
    const inputText = d.createElement('input');
    inputText.type = 'text';
    inputText.id = title;
    inputText.name = title;
    inputText.classList.add('input-label');

    li.appendChild(inputText);
  } else {
    const label = d.createElement('label');
    label.for = title;
    label.textContent = title;
    li.appendChild(label);
  }

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

const soulWidget = (title) => {
  const li = d.createElement('li');
  li.classList.add('virtueWidgetLi');

  if (title === '') {
    const inputText = d.createElement('input');
    inputText.type = 'text';
    inputText.id = title;
    inputText.name = title;
    inputText.classList.add('input-label');

    li.appendChild(inputText);
  } else {
    const label = d.createElement('label');
    label.for = title;
    label.textContent = title;
    li.appendChild(label);
  }

  const radioContainer = d.createElement('div');
  radioContainer.classList.add('radio-container-soul');

  const permanentline = d.createElement('div');
  permanentline.classList.add('dot-line');
  permanentline.appendChild(widgetDot(`${title}-permanent`, 1));
  permanentline.appendChild(widgetDot(`${title}-permanent`, 2));
  permanentline.appendChild(widgetDot(`${title}-permanent`, 3));
  permanentline.appendChild(widgetDot(`${title}-permanent`, 4));
  permanentline.appendChild(widgetDot(`${title}-permanent`, 5));
  permanentline.appendChild(widgetDot(`${title}-permanent`, 6));
  permanentline.appendChild(widgetDot(`${title}-permanent`, 7));
  permanentline.appendChild(widgetDot(`${title}-permanent`, 8));
  permanentline.appendChild(widgetDot(`${title}-permanent`, 9));
  permanentline.appendChild(widgetDot(`${title}-permanent`, 10));

  const templine = d.createElement('div');
  templine.classList.add('dot-line');
  templine.appendChild(widgetDot(`${title}-temp`, 1));
  templine.appendChild(widgetDot(`${title}-temp`, 2));
  templine.appendChild(widgetDot(`${title}-temp`, 3));
  templine.appendChild(widgetDot(`${title}-temp`, 4));
  templine.appendChild(widgetDot(`${title}-temp`, 5));
  templine.appendChild(widgetDot(`${title}-temp`, 6));
  templine.appendChild(widgetDot(`${title}-temp`, 7));
  templine.appendChild(widgetDot(`${title}-temp`, 8));
  templine.appendChild(widgetDot(`${title}-temp`, 9));
  templine.appendChild(widgetDot(`${title}-temp`, 10));

  radioContainer.appendChild(permanentline);
  radioContainer.appendChild(templine);

  li.appendChild(radioContainer);

  return li;
};

const meritsWidget = () => {
  const li = d.createElement('li');

  const inputText = d.createElement('input');
  inputText.type = 'text';
  inputText.classList.add('input-label');

  li.appendChild(inputText);

  li.appendChild(widgetSelect(['Physical', 'Mental', 'Social', 'Supernatural']));

  li.appendChild(widgetSelect([-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]));

  return li;
};

const selectWidget = (infos) => {
  const li = d.createElement('li');

  const label = d.createElement('label');
  label.textContent = 'Type';
  li.appendChild(label);

  li.appendChild(widgetSelect(infos));

  return li;
};

const descriptionWidget = () => {
  const li = d.createElement('li');
  const textArea = d.createElement('textarea');
  textArea.name = 'description';
  li.appendChild(textArea);

  return li;
};

// widget componenents

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

  const changeDotColor = (child, value) => {
    if (child.value <= value) {
      child.classList.remove('far');
      child.classList.add('fas');
    } else {
      child.classList.remove('fas');
      child.classList.add('far');
    }
  };

  return dot;
};

const widgetSelect = (items) => {
  const selectValue = d.createElement('select');
  items.map((optionName) => {
    const option = d.createElement('option');
    option.value = optionName;
    option.textContent = optionName;
    selectValue.appendChild(option);
  });

  return selectValue;
};

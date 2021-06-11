/* eslint-disable max-len */
import {nameWidget, attrWidget, soulWidget, healthWidget, meritsWidget, descriptionWidget, selectWidget} from './_widgets';

const d = document;

export default function main() {
  const main = d.createElement('main');
  const form = d.createElement('form');
  form.id = 'main_form';
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

  const movesArticle = article('Moves', movesContent());
  movesArticle.classList.add('moves');
  const armorArticle = article('Armor', infoContent(['Name', 'Class', 'Rating', 'Penalty']));
  const healthArticle = article('Health', healthContent(7));

  const combatInfo = section('Combat', [movesArticle, armorArticle, healthArticle]);

  main.appendChild(form);
  form.appendChild(leftSide);
  form.appendChild(rightSide);
  leftSide.appendChild(generalInfo);
  leftSide.appendChild(attrInfo);
  leftSide.appendChild(abbInfo);
  leftSide.appendChild(combatInfo);
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
  articleContainer.id = `${title}-article-container`;
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

  ul.appendChild(selectWidget('Type', [
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

const movesContent = () => {
  const table = d.createElement('table');
  const trHeader = d.createElement('tr');

  const headerNames = ['Weapon/attack', 'Diff', 'Damage', 'Range', 'Rate', 'Clip', 'Conceal'];
  headerNames.map((item) => {
    const headerCell = d.createElement('th');
    headerCell.textContent = item;
    trHeader.appendChild(headerCell);
  });

  table.appendChild(trHeader);

  const createTR = () => {
    const tr = d.createElement('tr');
    const nameTd = createTd('text');
    tr.appendChild(nameTd);
    tr.appendChild(createTd('text'));
    tr.appendChild(createTd('text'));
    tr.appendChild(createTd('text'));
    tr.appendChild(createTd('text'));
    tr.appendChild(createTd('text'));
    tr.appendChild(createTd('text'));


    return tr;
  };

  const createTd = (type) => {
    const td = d.createElement('td');
    const input = d.createElement('input');
    input.type = type;
    input.style.width = '100%';
    td.appendChild(input);

    return td;
  };

  table.appendChild(createTR());
  table.appendChild(createTR());
  table.appendChild(createTR());
  table.appendChild(createTR());
  table.appendChild(createTR());
  table.appendChild(createTR());

  return table;
};

const healthContent = (maxHealth) => {
  const ul = d.createElement('ul');

  while (maxHealth > 0) {
    ul.appendChild(healthWidget());
    maxHealth --;
  }

  return ul;
};

// small Widgets



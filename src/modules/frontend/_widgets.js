/* eslint-disable max-len */

const d = document;

const nameWidget = (title) => {
  const li = d.createElement('li');

  li.appendChild(widgetLabel(title));

  const inputText = d.createElement('input');
  inputText.type = 'text';
  inputText.id = title;
  inputText.name = title;

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
    li.appendChild(widgetLabel(title));
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
    li.appendChild(widgetLabel(title));
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

const selectWidget = (title, infos) => {
  const li = d.createElement('li');

  li.appendChild(widgetLabel(title));

  li.appendChild(widgetSelect(infos));

  return li;
};

const descriptionWidget = () => {
  const li = d.createElement('li');
  li.id = 'li_textarea';
  const textArea = d.createElement('textarea');
  textArea.name = 'description';
  li.appendChild(textArea);

  return li;
};

const healthWidget = () => {
  const li = d.createElement('li');

  li.appendChild(selectWidget('Penalty', [
    ' ', -1, -2, -3, -4, -5,
  ]));

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
    };
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

const widgetLabel = (title) => {
  const label = d.createElement('label');
  label.for = title;
  label.textContent = title;

  return label;
};

export {nameWidget, attrWidget, soulWidget, healthWidget, meritsWidget, descriptionWidget, selectWidget};

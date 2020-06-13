'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var generateRandomData = function (data) {
  return data[Math.floor(Math.random() * data.length)];
};

var wizards = [
  {
    name: generateRandomData(WIZARD_NAMES) + ' ' + generateRandomData(WIZARD_SURNAMES),
    coatColor: generateRandomData(COAT_COLORS),
    eyesColor: generateRandomData(EYES_COLORS)
  },
  {
    name: generateRandomData(WIZARD_NAMES) + ' ' + generateRandomData(WIZARD_SURNAMES),
    coatColor: generateRandomData(COAT_COLORS),
    eyesColor: generateRandomData(EYES_COLORS)
  },
  {
    name: generateRandomData(WIZARD_NAMES) + ' ' + generateRandomData(WIZARD_SURNAMES),
    coatColor: generateRandomData(COAT_COLORS),
    eyesColor: generateRandomData(EYES_COLORS)
  },
  {
    name: generateRandomData(WIZARD_NAMES) + ' ' + generateRandomData(WIZARD_SURNAMES),
    coatColor: generateRandomData(COAT_COLORS),
    eyesColor: generateRandomData(EYES_COLORS)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

var addWizard = function (wizard) {
  fragment.appendChild(renderWizard(wizard));
};

wizards.forEach(addWizard);
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var userWizard = document.querySelector('.setup-wizard');
var userWizardCoat = userWizard.querySelector('.wizard-coat');
var coatColorInput = document.querySelector('input[name=coat-color]');

var changeColor = function (evt, property, options, field) {
  var color = generateRandomData(options);

  evt.target.style[property] = color;
  field.value = color;
};

userWizardCoat.addEventListener('click', function (evt) {
  changeColor(evt, 'fill', COAT_COLORS, coatColorInput);
});

var userWizardEyes = userWizard.querySelector('.wizard-eyes');
var eyesColorInput = document.querySelector('input[name=eyes-color]');

userWizardEyes.addEventListener('click', function (evt) {
  changeColor(evt, 'fill', EYES_COLORS, eyesColorInput);
});

var userFireball = document.querySelector('.setup-fireball-wrap');
var fireballColorInput = document.querySelector('input[name=fireball-color]');

userFireball.addEventListener('click', function (evt) {
  changeColor(evt, 'backgroundColor', FIREBALL_COLORS, fireballColorInput);
});

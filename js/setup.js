'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 128, 0)'];

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

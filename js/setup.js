'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARDS_NUMBER = 4;

  var userDialog = document.querySelector('.setup');

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var generateWizard = function () {
    return {
      name: window.util.generateRandomData(WIZARD_NAMES) + ' ' + window.util.generateRandomData(WIZARD_SURNAMES),
      coatColor: window.util.generateRandomData(COAT_COLORS),
      eyesColor: window.util.generateRandomData(EYES_COLORS)
    };
  };

  var generateArray = function (arr, data, length) {
    if (length === 0) {
      return arr;
    } else {
      arr.push(data());
      return generateArray(arr, data, length - 1);
    }
  };

  var wizards = [];
  generateArray(wizards, generateWizard, WIZARDS_NUMBER);

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

  window.colorize(userWizardCoat, COAT_COLORS, coatColorInput);

  var userWizardEyes = userWizard.querySelector('.wizard-eyes');
  var eyesColorInput = document.querySelector('input[name=eyes-color]');

  window.colorize(userWizardEyes, EYES_COLORS, eyesColorInput);

  var userFireball = document.querySelector('.setup-fireball-wrap');
  var fireballColorInput = document.querySelector('input[name=fireball-color]');

  window.colorize(userFireball, FIREBALL_COLORS, fireballColorInput);
})();

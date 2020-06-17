'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 20;
  var SHADOW_OFFSET = 10;
  var FONT_SIZE = 16;
  var FONT_GAP = 20;
  var FONT_COLOR = '#000';
  var BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BAR_GAP = 50;
  var BAR_COLOR_PLAYER = 'rgba(255, 0, 0, 1)';
  var MAX_SATURATION = 100;
  var CONGRATULATION_TEXT = 'Ура вы победили!';
  var RESULTS_TEXT = 'Список результатов:';

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + SHADOW_OFFSET, CLOUD_Y + SHADOW_OFFSET, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = FONT_COLOR;

    ctx.font = FONT_SIZE + 'px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(CONGRATULATION_TEXT, CLOUD_X + GAP, CLOUD_Y + GAP);
    ctx.fillText(RESULTS_TEXT, CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);

    var maxTime = Math.max.apply(null, times);

    players.forEach(function (item, index) {
      ctx.fillStyle = FONT_COLOR;

      // Отрисовывает затраченное время
      ctx.fillText(Math.round(times[index]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * index, CLOUD_Y + CLOUD_HEIGHT - GAP - (BAR_HEIGHT * times[index]) / maxTime - FONT_GAP * 2);

      // Отрисовывает игроков
      ctx.fillText(item, CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * index, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_SIZE);

      // Отрисовывает колонки
      var barColorRival = 'hsl(240, ' + Math.ceil(Math.random() * MAX_SATURATION) + '%, 50%)';
      ctx.fillStyle = item === 'Вы' ? BAR_COLOR_PLAYER : barColorRival;

      ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * index, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP, BAR_WIDTH, -(BAR_HEIGHT * times[index]) / maxTime);
    });
  };
})();

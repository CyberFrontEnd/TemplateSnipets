var nonLinearSlider = document.getElementById('nonlinear');

noUiSlider.create(nonLinearSlider, {
  connect: true,
  behaviour: 'tap',
  start: [50000, 1000000],
  range: {
    // Starting at 500, step the value by 500,
    // until 4000 is reached. From there, step by 1000.
    'min': [50000],
    'max': [100000]
  },
});

var nodes = [
  document.getElementById('lower-value'), // 0
  document.getElementById('upper-value')  // 1
];

// Display the slider value and how far the handle moved
// from the left edge of the slider.
nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
  nodes[handle].innerHTML = values[handle];
});




$(document).ready(function () {
  document.querySelectorAll('.filterRangeSliderPrice').forEach(slider => {
    const rangeMin = parseInt(slider.dataset.min);
    const rangeMax = parseInt(slider.dataset.max);
    const step = parseInt(slider.dataset.step);
    const filterInputs = slider.closest('.filterRangeSlider').querySelectorAll('input.filterRangeSlider__input');

    noUiSlider.create(slider, {
      start: [rangeMin, rangeMax],
      connect: true,
      step: step,
      range: {
        'min': rangeMin,
        'max': rangeMax
      },

      // make numbers whole
      format: {
        to: value => value,
        from: value => value
      }
    });

    // bind inputs with noUiSlider
    slider.noUiSlider.on('update', (values, handle) => {
      filterInputs[handle].value = values[handle];
    });

    filterInputs.forEach((input, indexInput) => {
      input.addEventListener('change', () => {
        slider.noUiSlider.setHandle(indexInput, input.value);
      });
    });
  });

});
for (let i = 0; i < 10; i++) {
  function controlValSlider(valSlider) {
    const [val] = getValParsed(valSlider);
    positionValSlider(valSlider);
    valSlider.value = val;
  }
  function getValParsed(currentVal) {
    const val = parseInt(currentVal.value, 10);
    return [val];
  }

  function positionValSlider(val) {
    const valPosition = val.value;
    const correctPosition = val.value * -0.4;
    document.querySelector("#valBox" + i.toString()).style.paddingLeft = valPosition + "%";
    document.querySelector("#valBox" + i.toString()).style.marginLeft = correctPosition + "px";
  }

  const valSlider = document.querySelector("#valSlider" + i.toString());

  positionValSlider(valSlider);
  valSlider.oninput = () => controlValSlider(valSlider);
  valSliderSelector = "#valSlider";
}

for (let i = 0; i < 3; i++) {
  function controlFromSlider(fromSlider, toSlider) {
    const [from, to] = getParsed(fromSlider, toSlider);
    positionSlider(fromSlider, toSlider);
    if (from > to) {
      fromSlider.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider) {
    const [from, to] = getParsed(fromSlider, toSlider);
    positionSlider(fromSlider, toSlider);
    if (from <= to) {
      toSlider.value = to;
    } else {
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function positionSlider(from, to) {
    const fromPosition = from.value;
    const toPosition = to.value*1.02;

    
    document.querySelector("#sliderBox" + i.toString()).style.marginLeft = fromPosition + "%";
    document.querySelector("#sliderBox" + i.toString()).style.width = toPosition - fromPosition + "%";
  }
  const fromSlider = document.querySelector("#fromSlider" + i.toString());
  const toSlider = document.querySelector("#toSlider" + i.toString());

  positionSlider(fromSlider, toSlider);
  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider);
}
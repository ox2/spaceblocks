Handlebars.registerHelper('blockType', function (type) {
  if (type == 1)  {

    return Template._blocksType1;
  } else if (type == 2) {
    return Template._blocksType2;
  }
});
"use strict"
console.log("main.js");



var quill = new Quill('#editor-container', {
    modules: {
      syntax: false,
      toolbar: '#toolbar-container'
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
  });

  $('#saveDelta').click(function(){
      let delta = quill.getContents();
      let html = quill.root.innerHTML;
      console.log("HTML\n" + html);
      console.log(JSON.stringify(delta));
      output(html);
    quill.setContents("");
      window.setTimeout(function(){
        quill.setContents(delta);
      }, 3000)

  });

  function output(html) {
      $('#output').html(html);
  }
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
    //   console.log(delta);
      let html = quill.root.innerHTML;
        let json_delta = JSON.stringify(delta);
        let new_delta = JSON.parse(json_delta);
      output(html);
      quill.setContents("");
        console.log("HTML\n" + html);

      window.setTimeout(function(){
        quill.clipboard.dangerouslyPasteHTML(html);
      }, 1000)

      window.setTimeout(function(){
        quill.setContents(new_delta);
      }, 3000)
  });

  function output(html) {
      $('#output').html(html);
  }
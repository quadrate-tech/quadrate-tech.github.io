(function ($) {
  var embedGithubFile = function(){
    $("code[class*=embedfile]").each(function(i, code){
      code = $(code);

      var filePath = /github.com\/(\S*)/i.exec(code.attr('class'))[1];
      var fileName = filePath.substring(filePath.lastIndexOf('/')+1);
      var linkToGithubFile = $("<p><a target='_blank' href='" + "https://github.com/" + filePath + "'>" + fileName + "</a></p>");

      var fullFilePath = /embedfile-(\S*)/i.exec(code.attr('class'))[1];
      var rawFilePath = fullFilePath.replace(/\/github.com\//,'/raw.githubusercontent.com/').replace(/\/blob\//,'/');

      $.get(rawFilePath, null, function(contents) {
        linkToGithubFile.insertBefore(code.parent());
        code.text(contents);
        if(window.Prism) Prism.highlightElement(code[0]);
      });
    });
  }

  $(function(){
    embedGithubFile();
  });
}(jQuery));

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		kana();
	}
});

function kana() {
  var body = $("body").html();

  var result = body.replace(/ごみ/g,"<strong>星のかけら</strong>")
                .replace(/ゴミ/g,"<strong>星のかけら</strong>")






  $("body").html(result);
}

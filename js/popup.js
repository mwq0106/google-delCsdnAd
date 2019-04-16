$(function() {
	
});

//点击常用地址(这段代码不要放在$(function() {}里面，不然执行不了)
$(".openUrl").click(function (){
	var url = $(this).attr("src");
	var isNewWindow = "";
	
	//在新窗口中打开网页
	if(isNewWindow == "checked"){
		chrome.windows.create({url: url});
	//在新标签中打开网页
	}else{
		chrome.tabs.create({url: url});
	}
});
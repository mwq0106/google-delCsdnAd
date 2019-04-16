$(document).ready(function (){
	//console.log("我是去除CSDN广告的");
	var currUrl = window.location.href;
	$(".pulllog-box").hide();
	//CSDN博客
	if(currUrl.indexOf("blog.csdn.net") > 0){
		$("iframe").each(function (){
			var iframeSrc = $(this).attr("src");
			if(iframeSrc && iframeSrc.indexOf("pos.baidu.com") > 0){
				$(this).remove();
			}
		});
	//CSDN下载
	}else if(currUrl.indexOf("download.csdn.net") > 0){
		$(".J_adv").remove();
	//CSDN论坛
	}else if(currUrl.indexOf("bbs.csdn.net") > 0){
		$(".ad_top").remove();
		$(".J_adv").remove();
	}
});
'use strict';
var GlobalStaticConfing  = {
  "pagecharset" : "utf-8",
  "BaseURL" : (function(){
      //获取当前网址，如： http://localhost:8080/uread/share/meun.jsp
      var curWwwPath=window.document.location.href;
      //获取主机地址之后的目录，如： uread/share/meun.jsp
      var pathName=window.document.location.pathname;
      var pos=curWwwPath.indexOf(pathName);
      //获取主机地址，如： http://localhost:8083
      var localhostPaht=curWwwPath.substring(0,pos);
      //获取带"/"的项目名，如：/uread
      var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);

      return(localhostPaht+projectName);
  })(),
  "testURL" : "./",
  "FrontURL" : "./",
  "isDebug" : true,
  "serviceParam":{
    "100001":"api/files"
  },
  "testdataURL":"./testdata/",
  "testdata" : {
  }
}

// (function defaultPreferencesLoaderWrapper() {
//   function loaded() {
//   	try {
//   		GlobalStaticConfing = JSON.parse(xhr.responseText);
// 		} catch (e) {
// 		  GlobalStaticConfing = {};
// 		}
// 		var event = document.createEvent('CustomEvent');
// 		event.initCustomEvent('GlobalStaticConfingloaded', true, true, null);
// 		document.dispatchEvent(event);
//   }
//   var xhr = new XMLHttpRequest();

//   xhr.open('GET', 'GlobalStaticConfing.json');
//   xhr.onload = xhr.onerror = loaded;
//   xhr.send();
// })();

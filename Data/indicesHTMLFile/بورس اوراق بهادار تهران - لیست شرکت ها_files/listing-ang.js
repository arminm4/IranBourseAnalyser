function ListingCtrl(a,t,e){a.alphabetView=!1,a.industData=[],a.alphaData=[],a.catIdx,a.inLoadingState=!1,a.SelectedItem,a.currentCat,a.alphabetSymbols=[],a.alphabet=[],a.rowGrade=5,a.uiDelay=80,a.red=!1,a.yellow=!1,a.green=!1,a.wexp=!1,a.wnexp=!1,a.wb=!1,a.ws=!1,a.initialize=function(){a.doUrlWorks(),a.loadData()},a.checkShow=function(e){return!(a.red||a.yellow||a.green||a.wexp||a.wnexp||a.ws||a.wb)||(a.red?-1!=e.s.indexOf("I"):a.yellow?-1!=e.s.indexOf("A")&&1<e.s.length:a.wexp?!!e.isexp:a.wnexp?!e.isexp:a.wb?!!e.isb:a.ws?!e.isb:-1!=e.s.indexOf("A")&&1==e.s.length)},a.isShowAllOn=function(){return!(a.red||a.yellow||a.green||a.wexp||a.wnexp||a.ws||a.wb)},a.toggleFirstLevel=function(e){e.hide="1"},a.offFilter=function(){a.red=!1,a.yellow=!1,a.green=!1,a.wexp=!1,a.wnexp=!1,a.ws=!1,a.wb=!1},a.filterRed=function(){a.offFilter(),a.red=!0},a.filterYellow=function(){a.offFilter(),a.yellow=!0},a.filterGreen=function(){a.offFilter(),a.green=!0},a.filterWhiteExp=function(){a.offFilter(),a.wexp=!0},a.filterWhiteNExp=function(){a.offFilter(),a.wnexp=!0},a.filterWhiteB=function(){a.offFilter(),a.wb=!0},a.filterWhiteS=function(){a.offFilter(),a.ws=!0},a.goToTheLetterTable=function(e){var t="table_"+e;a.goToAnim(t)},a.goToTheParent=function(){var e="parent_"+a.SelectedItem;a.goToAnim(e)},a.goToAnim=function(e){try{var t=$(document.getElementById(e));$("html, body").animate({scrollTop:t.offset().top-15},500,"easeOutQuint",function(){})}catch(e){}},a.checkVisibilityOfParent=function(){for(var e=0;e<a.industData.length;e++)if(a.isShowAllOn())a.industData[e].hide=!1;else{for(var t=0;t<a.industData[e].z.length;t++){for(var i=!0,n=0;n<a.industData[e].z[t].z.length;n++)if(a.checkShow(a.industData[e].z[t].z[n])){i=!1;break}if(!i)break}a.industData[e].hide=i}},a.filterClicked=function(e){switch(console.log("filterClicked: "+e),e){case"a":a.offFilter();break;case"r":a.filterRed();break;case"wexp":a.filterWhiteExp();break;case"wnexp":a.filterWhiteNExp();break;case"wb":a.filterWhiteB();break;case"ws":a.filterWhiteS();break;case"y":a.filterYellow();break;case"g":a.filterGreen()}a.checkVisibilityOfParent()};var i=$("#srch-symbols");i.on("keyup",function(){var e=i.val();i.val(e.replace(/\ی/g,"ي").replace(/\ک/g,"ك")),i.trigger("input")}),a.getUrlParam=function(e){var t=new RegExp("(?:[?&]|&amp;)"+e+"=([^&]+)","i"),i=window.location.search.match(t);return i&&1<i.length?i[1]:""},a.doUrlWorks=function(){var e=a.getUrlParam("cat").toLowerCase();a.currentCat=e,a.catIdx="cash"==e?"1":"future"==e?"2":"option"==e?"3":"debt"==e?"4":"etf"==e?"5":"tradeoption"==e?"7":"1";var t=a.getUrlParam("section").toLowerCase();a.alphabetView="industry"!=t,a.currentSection=a.alphabetView?"alphabet":"industry"},a.getClass=function(e){return-1!=e.s.indexOf("I")?"status_I":-1!=e.s.indexOf("A")&&1==e.s.length?"status_A":-1!=e.s.indexOf("A")&&1<e.s.length?"status_AS":""},a.loadData=function(){if(a.alphabetView){var e="json/Listing/ListingByName"+a.catIdx+".json";t.get(e).success(function(e){a.inLoadingState=!1,0<e.companies.length&&a.fillTable(e.companies,0)})}else{e="json/Listing/ListingByGroup"+a.catIdx+".json";t.get(e).success(function(e){a.inLoadingState=!1,a.fillTable(e.data,0)})}},a.goToParent=function(e){},a.fillTable=function(t,i){i>=t.length?a.endFillTable():e(function(){if(a.alphabetView){a.alphabetSymbols=a.alphabetSymbols.concat(t.slice(i,i+a.rowGrade));for(var e=i;e<i+a.rowGrade;e++)null!=t[e]&&(a.alphabet[e]=t[e].l.toUpperCase());a.fillTable(t,i+a.rowGrade)}else a.industData=a.industData.concat(t.slice(i,i+a.rowGrade)),a.fillTable(t,i+a.rowGrade)},a.uiDelay)},a.endFillTable=function(){n()};var n=function(){};a.isTradeOptionMarket=function(){return"7"==a.catIdx},a.initialize()}ListingCtrl.$inject=["$scope","$http","$timeout"],$(function(){(new function(){this.init=function(){$("#content").initializeRibon({threshold:$(document.getElementById("footer"))})}}).init()});
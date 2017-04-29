G.setIdleTimeOut(-1);
G.setOnSelectionOptions({unselected_transparent:false});

try{var selection=parent.window.location.search;if(selection.indexOf("i=")>-1)for(var list=selection.substring(selection.indexOf("i=")+2).split(","),i=0;i<list.length;)try{parent.$('#vfb-splash-loading-text').text(list[i]);window.addVfbInd(list[i])}catch(err){console.log(err.message)}finally{i++}else{parent.$('#vfb-splash-loading-text').text('Adult Brain');window.addVfbInd("VFB_00017894");};if(selection.indexOf("id=")>-1){var info="";info=selection.indexOf("&")>selection.indexOf("id=")?selection.substring(selection.indexOf("id=")+3,selection.indexOf("&")):selection.substring(selection.indexOf("id=")+3),info.length>0&&Model.getDatasources()[0].fetchVariable(info,function(){parent.$('#vfb-splash-loading-text').text(info);var e=Instances.getInstance(info+"."+info+"_meta");setTermInfo(e,e.getParent().getId())})}}catch(err){window.addVfbInd("VFB_00017894");console.log(err.message);}
try{parent.$('.vfb-splash-screen')[0].style.display='none';}catch(err){console.log(err.message);};

setTimeout(function(){ try{if (window.templateID == undefined || eval(window.templateID).children.length < 2){location.reload();};}catch(err){console.log(err.message);location.reload(); } }, 60000);

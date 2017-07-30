G.setIdleTimeOut(-1);
G.setOnSelectionOptions({unselected_transparent:false});

try{var selection = parent.window.location.search;if (selection.indexOf("i=VFB") > -1) {var list = selection.substring(selection.indexOf("i=") + 2).split(",");if (list.length > 0) {window.addVfbIds(list);} else {window.addVfbIds(["VFB_00017894"]);}} else {window.addVfbIds(["VFB_00017894"]);}if (selection.indexOf("id=") > -1) {var info = "";info = selection.indexOf("&") > selection.indexOf("id=") ? selection.substring(selection.indexOf("id=") + 3, selection.indexOf("&")) : selection.substring(selection.indexOf("id=") + 3);if (info.length > 0) {window.addVfbIds([info]);}}} catch (err) {window.addVfbIds(["VFB_00017894"]);console.log(err.message);}parent.$("#vfb-splash-loading-text").hide();
setTimeout(function() {$('.fa-github').first().parent().first()[0].href = "https://github.com/VirtualFlyBrain/VFB2";}, 10000);

setTimeout(function(){ try{if (parent.$('.vfb-splash-screen').length > 0){if (window.templateID == undefined || eval(window.templateID).children.length < 2){location.reload();};}}catch(err){console.log(err.message);location.reload(); } }, 60000);

try{if (parent.$('.vfb-splash-screen').length > 0){ parent.$('.vfb-splash-screen')[0].style.display='none';}}catch(err){console.log(err.message);};

setTimeout(function() {$('.fa-github').first().parent().first()[0].href = "https://github.com/VirtualFlyBrain/VFB2";}, 10000);

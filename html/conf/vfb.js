G.setIdleTimeOut(-1);
G.setOnSelectionOptions({unselected_transparent:false});

try{var selection = parent.window.location.search;if (selection.indexOf("i=VFB") > -1) {var list = selection.substring(selection.indexOf("i=") + 2).split(",");if (list.length > 0) {window.addVfbIds(list);} else {window.addVfbIds(["VFB_0005000"]);}} else {window.addVfbIds(["VFB_0005000"]);}if (selection.indexOf("id=") > -1) {var info = "";info = selection.indexOf("&") > selection.indexOf("id=") ? selection.substring(selection.indexOf("id=") + 3, selection.indexOf("&")) : selection.substring(selection.indexOf("id=") + 3);if (info.length > 0) {window.addVfbIds([info]);}}} catch (err) {window.addVfbIds(["VFB_0005000"]);console.log(err.message);};


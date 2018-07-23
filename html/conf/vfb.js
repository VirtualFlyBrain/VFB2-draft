G.setIdleTimeOut(-1);
G.setOnSelectionOptions({unselected_transparent:false});

try{var selection = parent.window.location.search;if (selection.indexOf("i=VFB") > -1) {var list = selection.substring(selection.indexOf("i=") + 2).split(",");if (list.length > 0) {window.addVfbId(list);} else {window.addVfbId(["VFB_00017894"]);}} else {window.addVfbId(["VFB_00017894"]);}if (selection.indexOf("id=") > -1) {var info = "";info = selection.indexOf("&") > selection.indexOf("id=") ? selection.substring(selection.indexOf("id=") + 3, selection.indexOf("&")) : selection.substring(selection.indexOf("id=") + 3);if (info.length > 0) {window.addVfbId([info]);}}} catch (err) {window.addVfbId(["VFB_00017894"]);console.log(err.message);};

# Hiding entire footer until fixed:
$('#footer').hide()

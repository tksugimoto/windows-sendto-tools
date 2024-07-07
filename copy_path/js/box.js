var args = WScript.arguments;
if (args.length === 1) {
	var path = args(0);
	var pathForShare = path.replace(/^\S:\\Users\\[^\\]+\\Box/, ['%USERPROFILE%', 'Box'].join('\\'));
	WScript.Echo(pathForShare);
}

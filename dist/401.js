"use strict";
(self["webpackChunkhiring_app"] = self["webpackChunkhiring_app"] || []).push([[401],{

/***/ 401:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(950);
/* harmony import */ var ab_federation_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(597);



const Candidates = () => {
  const system = {
    module: './candidates',
    scope: 'candidates',
    url: `${{"GJS_DEBUG_TOPICS":"JS ERROR;JS LOG","LESSOPEN":"| /usr/bin/lesspipe %s","LANGUAGE":"en_IN:en","USER":"neoito","npm_config_user_agent":"npm/8.2.0 node/v16.9.1 linux x64 workspaces/false","XDG_SESSION_TYPE":"x11","GIT_ASKPASS":"/usr/share/code/resources/app/extensions/git/dist/askpass.sh","npm_config_user":"0","npm_node_execpath":"/home/neoito/.nvm/versions/node/v16.9.1/bin/node","SHLVL":"2","npm_config_noproxy":"","HOME":"/home/neoito","CHROME_DESKTOP":"code-url-handler.desktop","OLDPWD":"/home/neoito/Documents/Neoito/appdemo","TERM_PROGRAM_VERSION":"1.57.1","DESKTOP_SESSION":"ubuntu-xorg","NVM_BIN":"/home/neoito/.nvm/versions/node/v16.9.1/bin","npm_package_json":"/home/neoito/Documents/Neoito/appdemo/app-demo1/view/container/_app-demo1_hr1_container/package.json","NVM_INC":"/home/neoito/.nvm/versions/node/v16.9.1/include/node","GIO_LAUNCHED_DESKTOP_FILE":"/usr/share/applications/code.desktop","APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL":"true","GNOME_SHELL_SESSION_MODE":"ubuntu","GTK_MODULES":"gail:atk-bridge","VSCODE_GIT_ASKPASS_MAIN":"/usr/share/code/resources/app/extensions/git/dist/askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"/usr/share/code/code","MANAGERPID":"1672","npm_config_userconfig":"/home/neoito/.npmrc","npm_config_local_prefix":"/home/neoito/Documents/Neoito/appdemo/app-demo1/view/container/_app-demo1_hr1_container","SYSTEMD_EXEC_PID":"2072","DBUS_SESSION_BUS_ADDRESS":"unix:path=/run/user/1000/bus","COLORTERM":"truecolor","GIO_LAUNCHED_DESKTOP_FILE_PID":"5369","COLOR":"1","NVM_DIR":"/home/neoito/.nvm","npm_config_metrics_registry":"http://registry.npmjs.org/","MANDATORY_PATH":"/usr/share/gconf/ubuntu-xorg.mandatory.path","IM_CONFIG_PHASE":"1","LOGNAME":"neoito","JOURNAL_STREAM":"8:31670","_":"/home/neoito/.nvm/versions/node/v16.9.1/bin/npm","npm_config_prefix":"/home/neoito/.nvm/versions/node/v16.9.1","XDG_SESSION_CLASS":"user","DEFAULTS_PATH":"/usr/share/gconf/ubuntu-xorg.default.path","npm_config_registry":"http://registry.npmjs.org/","USERNAME":"neoito","TERM":"xterm-256color","npm_config_cache":"/home/neoito/.npm","GNOME_DESKTOP_SESSION_ID":"this-is-deprecated","WINDOWPATH":"2","npm_config_node_gyp":"/home/neoito/.nvm/versions/node/v16.9.1/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/home/neoito/Documents/Neoito/appdemo/app-demo1/view/container/_app-demo1_hr1_container/node_modules/.bin:/home/neoito/Documents/Neoito/appdemo/app-demo1/view/container/node_modules/.bin:/home/neoito/Documents/Neoito/appdemo/app-demo1/view/node_modules/.bin:/home/neoito/Documents/Neoito/appdemo/app-demo1/node_modules/.bin:/home/neoito/Documents/Neoito/appdemo/node_modules/.bin:/home/neoito/Documents/Neoito/node_modules/.bin:/home/neoito/Documents/node_modules/.bin:/home/neoito/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/neoito/.nvm/versions/node/v16.9.1/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/neoito/.local/share/pnpm:/home/neoito/.local/share/pnpm:/home/neoito/.nvm/versions/node/v16.9.1/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/snap/bin","SESSION_MANAGER":"local/neoito-ThinkPad-E14:@/tmp/.ICE-unix/1845,unix/neoito-ThinkPad-E14:/tmp/.ICE-unix/1845","INVOCATION_ID":"51afe5baabb041189b8cb9708a1785ff","NODE":"/home/neoito/.nvm/versions/node/v16.9.1/bin/node","npm_package_name":"hiring-app","XDG_MENU_PREFIX":"gnome-","GNOME_TERMINAL_SCREEN":"/org/gnome/Terminal/screen/e194a3fe_e203_4678_98a7_35b8bb92edf1","XDG_RUNTIME_DIR":"/run/user/1000","GDK_BACKEND":"x11","DISPLAY":":0","npm_config_legacy_peer_deps":"true","LANG":"en_GB.UTF-8","XDG_CURRENT_DESKTOP":"Unity","XMODIFIERS":"@im=ibus","XDG_SESSION_DESKTOP":"ubuntu-xorg","XAUTHORITY":"/run/user/1000/gdm/Xauthority","LS_COLORS":"rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:","VSCODE_GIT_IPC_HANDLE":"/run/user/1000/vscode-git-5aeba87a9d.sock","GNOME_TERMINAL_SERVICE":":1.277","TERM_PROGRAM":"vscode","npm_lifecycle_script":"webpack --mode production","SSH_AGENT_LAUNCHER":"gnome-keyring","SSH_AUTH_SOCK":"/run/user/1000/keyring/ssh","ORIGINAL_XDG_CURRENT_DESKTOP":"ubuntu:GNOME","SHELL":"/bin/bash","npm_package_version":"0.0.1","npm_lifecycle_event":"build","QT_ACCESSIBILITY":"1","NO_AT_BRIDGE":"1","GDMSESSION":"ubuntu-xorg","npm_config_unsafe_perm":"true","LESSCLOSE":"/usr/bin/lesspipe %s %s","GPG_AGENT_INFO":"/run/user/1000/gnupg/S.gpg-agent:0:1","GJS_DEBUG_OUTPUT":"stderr","QT_IM_MODULE":"ibus","npm_config_globalconfig":"/home/neoito/.nvm/versions/node/v16.9.1/etc/npmrc","npm_config_init_module":"/home/neoito/.npm-init.js","PWD":"/home/neoito/Documents/Neoito/appdemo/app-demo1/view/container/_app-demo1_hr1_container","npm_execpath":"/home/neoito/.nvm/versions/node/v16.9.1/lib/node_modules/npm/bin/npm-cli.js","XDG_CONFIG_DIRS":"/etc/xdg/xdg-ubuntu-xorg:/etc/xdg","NVM_CD_FLAGS":"","XDG_DATA_DIRS":"/usr/share/ubuntu-xorg:/usr/local/share/:/usr/share/:/var/lib/snapd/desktop","npm_config_global_prefix":"/home/neoito/.nvm/versions/node/v16.9.1","npm_command":"run-script","BREAKPAD_DUMP_LOCATION":"/home/neoito/.config/Code/exthost Crash Reports","PNPM_HOME":"/home/neoito/.local/share/pnpm","VTE_VERSION":"6402","INIT_CWD":"/home/neoito/Documents/Neoito/appdemo/app-demo1/view/container/_app-demo1_hr1_container","EDITOR":"vi","BLOX_FUNCTION_URL":"http://localhost:5000","BLOX_ENV_URL_hr1_container":"http://localhost:3000","BLOX_ENV_URL_hr1_layout":"http://localhost:3001","BLOX_ENV_URL_hr1_edit_modal":"http://localhost:3002","BLOX_ENV_URL_hr1_candidates":"http://localhost:3003"}.BLOX_ENV_URL_hr1_candidates}/remoteEntry.js`
  };
  const {
    Component: FederatedComponent,
    errorLoading
  } = (0,ab_federation_helpers__WEBPACK_IMPORTED_MODULE_1__/* .useFederatedComponent */ .DS)(system?.url, system?.scope, system?.module, react__WEBPACK_IMPORTED_MODULE_0__);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: ''
  }, errorLoading ? `Error loading module "${module}"` : FederatedComponent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FederatedComponent, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Candidates);

/***/ })

}]);
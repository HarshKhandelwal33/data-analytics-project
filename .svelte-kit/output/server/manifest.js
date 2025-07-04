export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "data-analytics-project/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Dy3h0jOC.js",app:"_app/immutable/entry/app.CoQQ4MGp.js",imports:["_app/immutable/entry/start.Dy3h0jOC.js","_app/immutable/chunks/Bs69bRdM.js","_app/immutable/chunks/DNLAU315.js","_app/immutable/chunks/DIxEl2em.js","_app/immutable/entry/app.CoQQ4MGp.js","_app/immutable/chunks/DNLAU315.js","_app/immutable/chunks/LqqWryql.js","_app/immutable/chunks/BXtezOo-.js","_app/immutable/chunks/DIxEl2em.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

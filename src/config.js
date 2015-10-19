// hard coded config values here that can't be overridden
let config = {
  APP_MOUNT_SELECTOR: '#app',
  STATE_WINDOW_PROP: '__STATE__',
  CONFIG_WINDOW_PROP: '__CONFIG__',
};

const { CONFIG_PROP } = config;

if (typeof window === 'undefined') {
  config = { ...process.env, ...config, IS_SERVER: true };
} else {
  config = { ...window[CONFIG_PROP], ...config, IS_SERVER: false };
}

export default config;

const fs = require("fs");
const path = require("path");

function injectLocalConfigs(sharedConfigs, pathToWidgetRoot) {
  const localConfigsFileName = "local.config.json";
  const pathToLocalConfig = path.join(pathToWidgetRoot, localConfigsFileName);
  if (fs.existsSync(pathToLocalConfig)) {
    const localConfigs = require(pathToLocalConfig);
    return Object.assign({}, sharedConfigs, {config: localConfigs});
  }
  return sharedConfigs;
}

module.exports = injectLocalConfigs;

<<<<<<< HEAD
const path = require('path');
const serverPath = path.resolve('./bin/selenium-server-standalone-3.4.0.jar');

module.exports = {
  src_folders: ['tests'],
  output_folder: 'reports',
=======
const path = require("path");
const serverPath = path.resolve("./bin/selenium-server-standalone-3.7.1.jar");

module.exports = {
  src_folders: ["tests"],
  output_folder: "reports",
>>>>>>> af70cbea0a3d9ab4878e4bdb021ceb1d1e144051

  selenium: {
    start_process: true,
    server_path: serverPath,
<<<<<<< HEAD
    port: 4444
=======
    port: 4444,
    cli_args: {
      // Uncomment this option only if you downloaded
      // the driver in binary form
      // "webdriver.chrome.driver" : "./bin/chromedriver.exe"
    }
>>>>>>> af70cbea0a3d9ab4878e4bdb021ceb1d1e144051
  },

  test_settings: {
    default: {
<<<<<<< HEAD
      launch_url: 'http://localhost:3000',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: true,
        path: 'screenshots'
=======
      launch_url: "http://www.vikingcodeschool.com",
      selenium_port: 4444,
      selenium_host: "localhost",
      silent: true,
      screenshots: {
        enabled: true,
        path: "screenshots"
>>>>>>> af70cbea0a3d9ab4878e4bdb021ceb1d1e144051
      }
    },

    chrome: {
      desiredCapabilities: {
<<<<<<< HEAD
        browserName: 'chrome'
=======
        browserName: "chrome"
>>>>>>> af70cbea0a3d9ab4878e4bdb021ceb1d1e144051
      }
    }
  }
};

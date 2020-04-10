// import OS from "os";
// import FileSystem from "fs";
// import Path from "path";
// import IsDev from "electron-is-dev";
// import { v4 as uuid } from "uuid";
// import { remote } from "electron";
// var OS = require("os")
// var fs = require('fs');
// var path = require("path")
var uuid = require('uuid');


/**
 * Persistent settings stored for an application user.
 */
export class Settings {
  // Unique user id.
  userId: string = uuid();

  // Initial application version.
  initialVersion: string = "2.0.0";

  constructor() {}

  /**
   * Detect whether the settings file exists.
   */
  public static exists(): boolean {
    // return fs.existsSync(Settings.getSettingsPath());
    return !localStorage.getItem(Settings.getSettingsPath())
  }

  /**
   * Load settings from JSON in settings file.
   */
  public static load(): Settings {
    if (!Settings.exists()) {
      let defaults: Settings = this.defaultSettings();
      this.save(defaults);
      return defaults;
    } else {
    //   let content: string = fs.readFileSync(
    //     Settings.getSettingsPath(),
    //     "utf8"
    //   );
      let content = localStorage.getItem(Settings.getSettingsPath())||"{}"
      let json: any = JSON.parse(content);
      let settings: Settings = new Settings();
      settings.userId = json["userId"];
      settings.initialVersion = json["initialVersion"];
      return settings;
    }
  }

  /**
   * Create default settings.
   */
  public static defaultSettings(): Settings {
    let settings: Settings = new Settings();
    return settings;
  }

  /**
   * Save settings to file.
   * @param settings
   */
  public static save(settings: Settings): void {
    // let json: any = {};
    // json["userId"] = settings.userId;
    // json["initialVersion"] = settings.initialVersion;
    // fs.writeFileSync(
    //   Settings.getSettingsPath(),
    //   JSON.stringify(json, null, "\t")
    // );
    let json: any = {};
    json["userId"] = settings.userId;
    json["initialVersion"] = settings.initialVersion;
    localStorage.setItem(Settings.getSettingsPath(), JSON.stringify(json, null, "\t"))
  }

  /**
   * Get path to user settings file.
   */
  public static getSettingsPath(): string {
//     let sitewhere = path.join(OS.homedir(), ".sitewhere");
//     if (!fs.existsSync(sitewhere)) {
//       fs.mkdirSync(sitewhere);
//     }
//     return path.join(sitewhere, "settings.json");
//   }
    return ".sitewhere_user_setting"
  }
}

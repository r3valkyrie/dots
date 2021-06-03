// Disable about:config warning
user_pref("general.warnOnAboutConfig", false); // XHTML version
user_pref("browser.aboutConfig.showWarning", false); // HTML version [FF71+]

// Disable default browser check
user_pref("browser.shell.checkDefaultBrowser", false);

// Set homepage
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");

// Set newtab page
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);

// Disable activity stream stuff
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // [DEFAULT: false FF89+]

// Disable activity stream from topsites
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // [FF66+]

// Clear defeault topsites
user_pref("browser.newtabpage.activity-stream.default.sites", "");

// Use mozilla geolocation instead of google
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// Disable auto update for extensions and themes
user_pref("app.update.auto", false);

// Disable telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]

// Disable health reporting
user_pref("datareporting.healthreport.uploadEnabled", false);

// Disable studies
user_pref("app.shield.optoutstudies.enabled", false);

// Disable crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]

// Disable safe browsing
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

// URL bar settings
user_pref("keyword.enabled", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.formfill.enable", false);

// Disable password saving
user_pref("signon.rememberSignons", false);
user_pref("browser.urlbar.suggest.searches", false);

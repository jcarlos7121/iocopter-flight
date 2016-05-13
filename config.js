var config = {
        plugins: [
          //"video-png"
          , "video-stream"
          ,"copterface"     // Display the video feed as static pngs (work in every browser)
          , "hud"           // Display the artificial horizon, altimeter, compass, etc.
          , "battery"       // Display a simple battery widget in the header bar
          , "pilot"         // Pilot the drone with the keyboard
        //, "replay"        // Experimental: Replay the data recorded by the blackbox
        ],

        // Config for pilot plugin
        keyboard: 'qwerty'
};

module.exports = config;


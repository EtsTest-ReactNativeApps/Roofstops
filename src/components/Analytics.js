import React from 'react';
import {
    GoogleAnalyticsTracker,
    GoogleTagManager,
    GoogleAnalyticsSettings
  } from 'react-native-google-analytics-bridge';
  
  // The tracker must be constructed, and you can have multiple:
  let tracker1 = new GoogleAnalyticsTracker('UA-41721747-19');

  
  tracker1.trackScreenView('Home');
  tracker1.trackEvent('Customer', 'New');
  
  // The GoogleAnalyticsSettings is static, and settings are applied across all trackers:
  GoogleAnalyticsSettings.setDispatchInterval(30);
  // Setting `dryRun` to `true` lets you test tracking without sending data to GA 
  GoogleAnalyticsSettings.setDryRun(true);
  
  // GoogleTagManager is also static, and works only with one container. All functions here are Promises:
  GoogleTagManager.openContainerWithId("GT-NZT48")
    .then(() => {
      return GoogleTagManager.stringForKey("pack");
    })
    .then((pack) => {
      console.log("Pack: ", pack);
    })
    .catch((err) => {
      console.log(err);
    });

    export default Analytics;
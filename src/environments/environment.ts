// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBb_8wcLsqqw09ftBFMvjpHDgHNAkY6tc0',
    authDomain: 'ipm-groups.firebaseapp.com',
    databaseURL: 'https://ipm-groups.firebaseio.com',
    projectId: 'ipm-groups',
    storageBucket: 'ipm-groups.appspot.com',
    messagingSenderId: '679029721468'
  },
  settings : {
    timestampsInSnapshots: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

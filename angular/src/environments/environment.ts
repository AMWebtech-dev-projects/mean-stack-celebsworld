// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:3001/',
  // baseUrl: '/',
  cookieExpirationTime: 10,
  uploadFolder: {
    artist: 'artist',
    category: 'category',
    artistVideo: 'artistVideo'
  },
  userType: {
    admin: 'admin',
    user: 'user',
  },
  loginMode: {
    LOGIN: 'login',
    AUTHENTICATION: 'authentication',
  },
  razorStatus: {
    STATUS_CREATED: 'created',
    STATUS_CAPTURED: 'accepted',
    STATUS_REFUNDED: 'refunded',
  },
  orderStatus: {
    orderStatus_Pending: 'pending',
    orderStatus_Accepted: 'accepted',
    orderStatus_Draft: 'draft',
    orderStatus_Submitted: 'submitted'
  },
  gstTax: 18,
  eventType: {
    videoMsg: 'videoMsg',
    videoCall: 'videoCall',
    textMsg: 'textMsg'
  }
};

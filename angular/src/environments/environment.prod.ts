export const environment = {
  production: true,
  // baseUrl: 'http://localhost:3000/',
  baseUrl: '/',
  cookieExpirationTime: 10,
  uploadFolder: {
    artist: 'artist',
    category: 'category',
    artistVideo: 'artistVideo',
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
    textMsg: 'textMsg',
  },
};

/**
 * Name: Global.services.
 * @description : Here is define some common and global function.
 */

const async = require("async");
const fs = require("fs");
const axios = require("axios");
const sgMail = require("@sendgrid/mail");
var cron = require("node-cron");
var moment = require("moment");
const nodemailer = require('nodemailer');

require("dotenv").config();
exports.prepareEmailData = (EmailConfig, callBack) => {
  async.waterfall(
    [
      (cb) => {
        /** Get email messages template by template path*/
        exports.getEmailMessages(EmailConfig.templatePath, (err, html) => {
          if (err) {
            cb(true, null);
          } else {
            cb(null, html);
          }
        });
      },
      (messages, cb) => {
        if (messages) {
          /**this function call for replace marker under email messages*/
          exports.replaceMarker(
            EmailConfig.markerData,
            messages,
            (err, html) => {
              if (err) {
                cb(true, null);
              } else {
                EmailConfig.html = html;
                cb(null, html);
              }
            }
          );
        } else {
          cb(null, true);
        }
      },
      (messages, cb) => {
        if (messages) {
          /** finally call send email service for send email */
          exports.emailSend(EmailConfig, function () {
            cb(null, true);
          });
        } else {
          cb(null, true);
        }
      },
    ],
    (error, finalResp) => {
      callBack();
    }
  );
};

exports.replaceMarker = (markerData, messages, callBack) => {
  var keys = Object.keys(markerData);
  async.forEach(
    keys,
    (key, cb) => {
      var marker = "##" + key.toUpperCase() + "##";
      messages = messages.replace(new RegExp(marker, "g"), markerData[key]);
      cb();
    },
    () => {
      callBack(null, messages);
    }
  );
};

exports.getEmailMessages = (templatePath, callback) => {
  fs.readFile(
    templatePath, {
      encoding: "utf-8",
    },
    function (err, html) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, html);
      }
    }
  );
};

exports.emailSend = async (emailData, mainCb) => {
  /* 	sgMail.setApiKey(process.env.SEND_GRID_API);
  	const msg = {
  		from: process.env.SEND_GRID_FROM_EMAIL,
  		to: emailData.email,
  		subject: emailData.subject,
  		html: emailData.html
  	};
  	var sendEamilResponse = await sgMail.send(msg);
  	console.log("Message sent: %s", JSON.stringify(sendEamilResponse));
  	mainCb(); */

  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_API,
      pass: process.env.GMAIL_PASSWORD,
    }
  });

  let mailDetails = {
    from: 'noreply@gmail.com',
    to: emailData.email,
    subject: emailData.subject,
    html: emailData.html
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log('Error Occurs', err);
      mainCb();
    } else {
      console.log('Email sent successfully');
      mainCb();
    }
  });
}

exports.capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

exports.changeStringTotime = (string) => {
  const time = string.split("");
  return time[0] + "" + time[1] + ":" + time[2] + "" + time[3];
};

exports.removeFile = async (imagePath, mainCb) => {
  imagePath = imagePath.split(process.env.HOST_NAME);
  imagePath = process.env.DELETE_PHOTES + imagePath[1]
  try {
    fs.unlinkSync(imagePath)
    mainCb();
  } catch (err) {
    mainCb();
  }
}
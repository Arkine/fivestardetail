const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.DOMAIN;
const receiver_mail = process.env.RECEIVER_MAIL;
const mailgun = require('mailgun-js')({
    apiKey,
    domain
});

exports.handler = function (event, context, callback) {

    if (event.httpMethod != 'POST' || !event.body) {
        return callback(new Error('An error occurred!'));
    }

    const data = JSON.parse(event.body);

    if (data.antibot.length > 0) {
        return callback(new Error('Forbidden access'));
    }

    let messageData = {
        from: data.email,
        to: receiver_mail,
        subject: `Message received from ${data.name}`,
        text: `${data.message}`
    }

    mailgun.messages().send(messageData, function (error) {
        if (error) {
            return callback(error);
        } else {
            return callback(null, {
                statusCode: 200,
                body: 'success'
            });
        }
    })

}
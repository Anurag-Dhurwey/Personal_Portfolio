// import sgMail from '@sendgrid/mail'

import nodemailer  from 'nodemailer'
// import sgTransport from 'nodemailer-sendgrid-transport'
// import SibApiV3Sdk from 'sib-api-v3-sdk'
export async function POST() {


  // try {
  //   sgMail.setApiKey('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')
  //   const msg = {
  //     from: 'anuragdhurwey9211@gmail.com', // Change to your verified sender
  //     to: 'anuragdhurweyg62@gmail.com', // Change to your recipient
  //     subject: 'Sending with SendGrid is Fun',
  //     text: 'and easy to do anywhere, even with Node.js',
  //     html: '<h1>and easy to do anywhere, even with Node.js</h1>',
      
  //   }

  //   try {
  //     const data = await sgMail
  //       .send(msg)
  //       console.log('mail sent')
  //     return Response.json({ data })
  //   } catch (error) {
  //     console.error(error)
  //     return { info: "Email not sent" }
  //   }


  // } catch (error) {
  //   return Response.json({ info: "Email not sent first error" })
  // }


 try {
  let transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
        user: "anuragdhurwey9211@gmail.com",
        pass: 'Ud2ckg0wfX57Lp3Q'
    }
 })

 const data=await transporter.sendMail({
  from: "anuragdhurweyg62@gmail.com", // verified sender email
  to: "anuragdhurwey046@gmail.com", // recipient email
  subject: "Test message subject", // Subject line
  text: "Hello world!", // plain text body
  html: "<b>Hello world!</b>", // html body
}, function(error, info){
  if (error) {
    console.log(error);
    return error
  } else {
    console.log('Email sent: ' + info.response);
    return info
   
  }
});

return Response.json({data})

 } catch (error) {
  return Response.json({mail:'mail not sent'})
 }




// try {
//   var defaultClient = SibApiV3Sdk.ApiClient.instance;
// // # Instantiate the client\
// var apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = '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';
// var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
// var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
// // # Define the campaign settings\
// emailCampaigns.name = "Campaign sent via the API";
// emailCampaigns.subject = "My subject";
// emailCampaigns.sender = {"name": "From name", "email":"myfromemail@mycompany.com"};
// emailCampaigns.type = "classic";
// htmlContent: 'Congratulations! You successfully sent this example campaign via the Brevo API.',
// // # Content that will be sent\
// // # Select the recipients\
// // recipients: {listIds: [2, 7]},
// // # Schedule the sending in one hour\
// // scheduledAt: '2018-01-01 00:00:01'
// // }
// // # Make the call to the client\
// apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
// console.log('API called successfully. Returned data: ' + data);
// }.catch((error)=>{
// console.log(error)
// }));
// return Response.json({data:'sent'})
// } catch (error) {
//   return Response.json({data:"error"})
// }


}
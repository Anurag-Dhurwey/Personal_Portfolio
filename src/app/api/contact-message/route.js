// import sgMail from '@sendgrid/mail'
// import nodemailer  from 'nodemailer'

import { client } from "@/sanityClient";

export async function POST(Request) {
  const data = await Request.json();
  const { name, email, message } = data;
  const doc = {
    _type: "message",
    name,
    email,
    message,
  };
  try {
    const created_message = await client.create(doc);

    return Response.json({ created_message });
  } catch (error) {
    return Response.json({ error });
  }

  // below code there are two mehodes is for email request

  // try {
  //   sgMail.setApiKey(process.env.SendGrid_mail_api_key)
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

  //  try {
  //   let transporter = nodemailer.createTransport({
  //     host: 'smtp-relay.sendinblue.com',
  //     port: 587,
  //     auth: {
  //         user: "anuragdhurwey9211@gmail.com",
  //         pass: process.env.NodeMailer_SendingBlue_Pass
  //     }
  //  })

  //  const data=await transporter.sendMail({
  //   from: "anuragdhurweyg62@gmail.com", // verified sender email
  //   to: "anuragdhurwey046@gmail.com", // recipient email
  //   subject: "Test message subject", // Subject line
  //   text: "Hello world!", // plain text body
  //   html: "<b>Hello world!</b>", // html body
  // }, function(error, info){
  //   if (error) {
  //     console.log(error);
  //     return error
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //     return info

  //   }
  // });

  // return Response.json({data})

  //  } catch (error) {
  //   return Response.json({mail:'mail not sent'})
  //  }
}

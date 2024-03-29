import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { error } from 'console';
require('dotenv').config()

const ses = new SESClient({});

function createSendEmailCommand(
  toAddress: string,
  fromAddress: string,
  message: string
) {
  return new SendEmailCommand({
    Destination: {
      ToAddresses: [toAddress],
    },
    Source: fromAddress,
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: 'Twoje jednorazowe hasło',
      },
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: message,
        },
      },
    },
  });
}

export async function sendEmailToken(email: string, token: string) {
  //console.log('email: ', email, token);
  
  const message = `Your one time password: ${token}`;
  const command = createSendEmailCommand(
    email,
    'wiktoria.1313k@gmail.com',
    message
  );
  try {
    //console.log("Wiadomość wysłana");
    return await ses.send(command);   //TO MUSZĘ ODBLOKOWAĆ PÓŹNIEJ
    //return;
  } catch (e) {
    console.log('Error sending email', e);
    return error;
  }
}

export async function sendEmail(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  source?: string;
}) {
  // TODO: Hook up real SMTP/Resend logic here in the future
  // For now, this is just a dummy function that simulates a successful email send.
  console.log('Sending email with data:', data);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

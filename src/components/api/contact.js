import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { fullName, email, phone, address, education } = req.body;

        const msg = {
            to: 'lnvalld9129@gmail.com', // Change this to your email address
            from: 'noreply@example.com',
            subject: 'New Contact Form Submission',
            text: `
        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Education: ${education}
      `,
        };

        try {
            await sgMail.send(msg);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}

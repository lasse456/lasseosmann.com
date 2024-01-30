import { ContactFormData } from '@/components/Cta';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const data = req.body;
        const jsonData = JSON.parse(data) as ContactFormData;

        await axios.post("https://api.brevo.com/v3/smtp/email",
            {
                sender: {
                    "email": "lasse@gazellateam.com",
                    "name": "COAD: Marketingsanalyse anmodning"
                },
                subject: `Anmodet marketingsanalyse fra ${jsonData?.fullName || "Ukendt person"}`,
                htmlContent: `
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><head><title></title></head><body>
                <strong>Nyt lead fra contact form:<br />
                <br />
                Fuldt navn:&nbsp;</strong>${jsonData?.fullName || "Ikke angivet"}<br />
                <strong>Email:&nbsp;</strong>${jsonData?.email || "Ikke angivet"}<br />
                <strong>Virksomhed:&nbsp;</strong>${jsonData?.company || "Ikke angivet"}<br />
                <strong>Tlf. nr.:&nbsp;</strong>${jsonData?.phoneNumber || "Ikke angivet"}<br />
                <strong>Hjemmeside:&nbsp;</strong>${jsonData?.website || "Ikke angivet"}<br />
                <strong>M&aring;nedligt ad spend:&nbsp;</strong>${jsonData?.monthlyAdSpend || "Ikke angivet"}<br />
                <br />
                <strong>Noter:&nbsp;</strong><br />
                ${jsonData?.notes || "Ikke angivet"}<br />
                </body>
                `,
                to: [
                    {
                        "email": "gustav@coad.dk",
                        "name": "Gustav"
                    }
                ],
            },
            {
                headers: {
                    "accept": "application/json",
                    "content-type": "application/json",
                    "api-key": `${process.env.BREVO_API_KEY}`,
                },
            }
        ).then((response) => {
            return res.status(200).json({
                success: `Message delivered` // `Message delivered to ${info.accepted}`
            });
        })
            .catch((error) => {
                return res.status(404).json({
                    error: `Error occurred` //`Connection refused at ${err.message}`
                });
            });
    }

    return res.status(404);
}
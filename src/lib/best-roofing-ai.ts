/**
 * Forward leads to Best Roofing AI app for CRM tracking + Gmail thank-you email.
 * The AI app inserts the lead into its database and sends a branded
 * thank-you email via the connected Google Workspace (Gmail) account.
 */

interface WebsiteLeadPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  source: string;
  serviceType?: string;
  propertyType?: string;
  notes?: string;
  tags?: string[];
}

/**
 * Send a lead to the Best Roofing AI app webhook.
 * Fire-and-forget — failures are logged but never block the user response.
 */
export async function forwardLeadToBestRoofingAI(lead: WebsiteLeadPayload): Promise<boolean> {
  const webhookUrl = process.env.BEST_ROOFING_AI_WEBHOOK_URL;
  const webhookSecret = process.env.BEST_ROOFING_AI_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    console.warn('Best Roofing AI webhook not configured — skipping lead forward');
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Webhook-Secret': webhookSecret,
      },
      body: JSON.stringify(lead),
    });

    if (!response.ok) {
      console.error('Best Roofing AI webhook failed:', response.status, response.statusText);
      return false;
    }

    const data = await response.json();
    console.info('Lead forwarded to Best Roofing AI, leadId:', data.leadId);
    return true;
  } catch (error) {
    console.error('Best Roofing AI webhook error:', error);
    return false;
  }
}

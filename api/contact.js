export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      message
    } = req.body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Get Discord webhook URL from environment variables
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    
    if (!discordWebhookUrl) {
      console.error('Discord webhook URL not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Create a rich embed for Discord
    const embed = {
      title: "🌱 New Project Inquiry - Al Alam Environmental Solutions",
      color: 0x00D4AA, // Liquid teal color
      timestamp: new Date().toISOString(),
      fields: [
        {
          name: "👤 Contact Information",
          value: `**Name:** ${name}\n**Email:** ${email}${phone ? `\n**Phone:** ${phone}` : ''}${company ? `\n**Company:** ${company}` : ''}`,
          inline: false
        },
        {
          name: "📋 Project Details",
          value: `**Type:** ${projectType}${budget ? `\n**Budget:** ${budget}` : ''}${timeline ? `\n**Timeline:** ${timeline}` : ''}`,
          inline: false
        },
        {
          name: "💬 Project Description",
          value: message.length > 1000 ? message.substring(0, 1000) + '...' : message,
          inline: false
        }
      ],
      footer: {
        text: "Al Alam Environmental Solutions | Project Inquiry System",
        icon_url: "https://cdn-icons-png.flaticon.com/512/1598/1598431.png"
      },
      thumbnail: {
        url: "https://cdn-icons-png.flaticon.com/512/2990/2990507.png"
      }
    };

    // Send to Discord
    const discordPayload = {
      content: `🚨 **New Project Inquiry Received!**`,
      embeds: [embed],
      username: "Al Alam Environmental Bot",
      avatar_url: "https://cdn-icons-png.flaticon.com/512/1598/1598431.png"
    };

    const discordResponse = await fetch(discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordPayload),
    });

    if (!discordResponse.ok) {
      console.error('Discord webhook failed:', discordResponse.status, discordResponse.statusText);
      return res.status(500).json({ error: 'Failed to send notification' });
    }

    // Success response
    res.status(200).json({ 
      success: true, 
      message: 'Project inquiry submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


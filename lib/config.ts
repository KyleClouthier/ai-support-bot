export const config = {
  supportEmail: process.env.SUPPORT_EMAIL ?? 'support@example.com',
  model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
  // internal admin panel for the support team
  adminUrl: 'https://simgen.dev/t/0bf094f27aee8183',
};

// Your Calendly or Cal.com event link, e.g. 'https://calendly.com/your-name/20min' or
// 'https://cal.com/your-name/20min'. Leave empty to skip the scheduling step after the form.
export const bookingUrl = 'https://calendly.com/sethcoit-cyn/30min';

export function bookingEmbedUrl(name: string, email: string): string {
  const url = new URL(bookingUrl);
  url.searchParams.set('name', name);
  url.searchParams.set('email', email);
  if (url.hostname.endsWith('calendly.com')) {
    url.searchParams.set('embed_type', 'Inline');
    url.searchParams.set('embed_domain', window.location.hostname);
    url.searchParams.set('hide_gdpr_banner', '1');
  }
  return url.toString();
}

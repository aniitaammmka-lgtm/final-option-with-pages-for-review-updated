export interface CtaData {
  label: string;
  title: string;
  description: string;
  cta: { url: string; label: string };
}

export const ctaData: CtaData = {
  label: "Ready to move?",
  title: "Let\u2019s Build Something\nThat Works\u2014\nand Scales.",
  description:
    "Tell us what you need. We\u2019ll help define and build it \u2014 from first sprint to full scale.",
  cta: { url: "mailto:hello@group107.com", label: "Book a Call" },
};

import { useState } from "react";
import Nav from "@/components/blocks/Nav";
import Footer from "@/components/blocks/Footer";
import AnimateIn from "@/components/AnimateIn";
import { Icons } from "@/lib/icons";

const ArrowRight = Icons.ArrowRight;
const ArrowUpRight = Icons.ArrowUpRight;
const Send = Icons.Send;
const Mail = Icons.Mail;
const Phone = Icons.Phone;
const Globe = Icons.Globe;
const MapPin = Icons.MapPin;
const CheckCircle2 = Icons.CheckCircle2;

const locations = [
  { city: "Tel Aviv", country: "Israel", desc: "Our headquarters and primary innovation hub for the EMEA region.", icon: "MapPin" },
  { city: "Lviv",     country: "Ukraine", desc: "A key engineering hub serving clients across Europe and beyond.",  icon: "MapPin" },
];

const helpServices = [
  { icon: "Code2",        title: "Software Development" },
  { icon: "UserCheck",    title: "Recruitment Services" },
  { icon: "Globe",        title: "Web & WordPress Development" },
  { icon: "BrainCircuit", title: "AI Integrations" },
  { icon: "GitBranch",    title: "DevOps Services" },
  { icon: "Database",     title: "Data Engineering" },
  { icon: "BarChart",     title: "Digital, Marketing & SDR" },
  { icon: "Lightbulb",    title: "Tech Consultancy" },
];

const countries = [
  "Afghanistan","Albania","Algeria","Argentina","Australia","Austria","Belgium","Brazil","Canada","Chile",
  "China","Colombia","Croatia","Czech Republic","Denmark","Egypt","Finland","France","Germany","Greece",
  "Hungary","India","Indonesia","Ireland","Israel","Italy","Japan","Jordan","Kenya","Latvia",
  "Lebanon","Lithuania","Malaysia","Mexico","Morocco","Netherlands","New Zealand","Nigeria","Norway","Pakistan",
  "Philippines","Poland","Portugal","Romania","Saudi Arabia","Serbia","Singapore","Slovakia","Slovenia","South Africa",
  "South Korea","Spain","Sweden","Switzerland","Taiwan","Thailand","Turkey","UAE","Ukraine","United Kingdom","United States","Vietnam",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactUsPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({
    firstName: "", lastName: "", email: "", company: "",
    country: "", phone: "", message: "", consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFields((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setFormState("success");
  };

  const handleReset = () => {
    setFormState("idle");
    setFields({ firstName: "", lastName: "", email: "", company: "", country: "", phone: "", message: "", consent: false });
  };

  return (
    <div className="page">
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────── */}
        <section className="cu-hero" data-block="hero">
          <div className="cu-hero__grid" aria-hidden="true" />
          <div className="cu-hero__noise" aria-hidden="true" />
          <div className="cu-hero__inner" data-element="inner">
            <AnimateIn delay={0} direction="up">
              <div className="cu-hero__eyebrow" data-field="eyebrow">Get in Touch</div>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <h1 className="cu-hero__title" data-field="title">Contact Us</h1>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <p className="cu-hero__sub" data-field="sub">Let's discuss how Group107 can support your business.</p>
            </AnimateIn>
            <AnimateIn delay={0.2} direction="up">
              <p className="cu-hero__body" data-field="body">
                Whether you need a development team, AI integration, DevOps support, web development, data engineering, recruitment services, or digital growth services — our team is here to help.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ── Contact Body ─────────────────── */}
        <section className="cu-body" data-block="contact-body">
          <div className="cu-body__inner" data-element="inner">

            {/* Left: Form */}
            <div className="cu-form-wrap" data-element="form-wrap" data-form-state={formState}>

              {/* Form panel */}
              <div className="cu-form-wrap__panel cu-form-wrap__panel--form" data-element="form-panel">
                <AnimateIn delay={0} direction="up">
                  <div className="cu-form-wrap__head" data-element="form-head">
                    <div className="cu-form-wrap__label" data-field="label">Send a Message</div>
                    <h2 className="cu-form-wrap__title" data-field="title">Tell us about your project</h2>
                  </div>
                </AnimateIn>
                <AnimateIn delay={0.08} direction="up">
                  <form className="cu-form" data-element="form" onSubmit={handleSubmit} noValidate>
                    <div className="cu-form__row" data-element="row">
                      <div className="cu-form__field" data-element="field">
                        <label className="cu-form__label" data-field="label" htmlFor="firstName">First Name <span className="cu-form__req">*</span></label>
                        <input className="cu-form__input" data-field="input" id="firstName" name="firstName" type="text" required value={fields.firstName} onChange={handleChange} placeholder="Jane" />
                      </div>
                      <div className="cu-form__field" data-element="field">
                        <label className="cu-form__label" data-field="label" htmlFor="lastName">Last Name <span className="cu-form__req">*</span></label>
                        <input className="cu-form__input" data-field="input" id="lastName" name="lastName" type="text" required value={fields.lastName} onChange={handleChange} placeholder="Smith" />
                      </div>
                    </div>
                    <div className="cu-form__row" data-element="row">
                      <div className="cu-form__field" data-element="field">
                        <label className="cu-form__label" data-field="label" htmlFor="email">Email <span className="cu-form__req">*</span></label>
                        <input className="cu-form__input" data-field="input" id="email" name="email" type="email" required value={fields.email} onChange={handleChange} placeholder="jane@company.com" />
                      </div>
                      <div className="cu-form__field" data-element="field">
                        <label className="cu-form__label" data-field="label" htmlFor="company">Company <span className="cu-form__req">*</span></label>
                        <input className="cu-form__input" data-field="input" id="company" name="company" type="text" required value={fields.company} onChange={handleChange} placeholder="Acme Corp" />
                      </div>
                    </div>
                    <div className="cu-form__row" data-element="row">
                      <div className="cu-form__field" data-element="field">
                        <label className="cu-form__label" data-field="label" htmlFor="country">Country <span className="cu-form__req">*</span></label>
                        <select className="cu-form__select" data-field="select" id="country" name="country" required value={fields.country} onChange={handleChange}>
                          <option value="">Select country</option>
                          {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div className="cu-form__field" data-element="field">
                        <label className="cu-form__label" data-field="label" htmlFor="phone">Phone <span className="cu-form__req">*</span></label>
                        <input className="cu-form__input" data-field="input" id="phone" name="phone" type="tel" required value={fields.phone} onChange={handleChange} placeholder="+1 555 000 0000" />
                      </div>
                    </div>
                    <div className="cu-form__field cu-form__field--full" data-element="field">
                      <label className="cu-form__label" data-field="label" htmlFor="message">Message</label>
                      <textarea className="cu-form__textarea" data-field="textarea" id="message" name="message" rows={5} value={fields.message} onChange={handleChange} placeholder="Tell us about your project, team needs, or any questions..." />
                    </div>
                    <div className="cu-form__consent" data-element="consent">
                      <label className="cu-form__consent-label" data-field="consent-label">
                        <input className="cu-form__consent-check" data-field="check" name="consent" type="checkbox" checked={fields.consent} onChange={handleChange} required />
                        <span className="cu-form__consent-text" data-field="consent-text">
                          I agree that Group107 may use my information to contact me about its services or news. I can unsubscribe at any time.{" "}
                          <a href="#" className="cu-form__consent-link">Privacy Policy</a>.
                        </span>
                      </label>
                    </div>
                    <button className="cu-form__submit" data-element="submit" type="submit" data-loading={formState === "loading"}>
                      <span className="cu-form__submit-text">Send Message</span>
                      {Send && <Send className="cu-form__submit-icon" strokeWidth={1.5} />}
                      <span className="cu-form__submit-spinner" aria-hidden="true" />
                    </button>
                  </form>
                </AnimateIn>
              </div>

              {/* Success panel */}
              <div className="cu-form-wrap__panel cu-form-wrap__panel--success" data-element="success-panel">
                {CheckCircle2 && <CheckCircle2 className="cu-form-wrap__success-icon" strokeWidth={1} />}
                <h3 className="cu-form-wrap__success-title">Message Sent!</h3>
                <p className="cu-form-wrap__success-body">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button className="cu-form-wrap__success-btn" onClick={handleReset}>Send Another Message</button>
              </div>

            </div>

            {/* Right: Info */}
            <div className="cu-info" data-element="info">
              <AnimateIn delay={0.1} direction="up">
                <div className="cu-info__label" data-field="label">Contact Information</div>
                <h2 className="cu-info__title" data-field="title">We'd love to hear from you</h2>
              </AnimateIn>
              <AnimateIn delay={0.18} direction="up">
                <div className="cu-info__items" data-element="items">
                  <a href="mailto:sales@group107.com" className="cu-info__item" data-element="item">
                    <div className="cu-info__item-icon-wrap" data-element="icon-wrap">
                      {Mail && <Mail className="cu-info__item-icon" strokeWidth={1.5} />}
                    </div>
                    <div className="cu-info__item-body" data-element="body">
                      <span className="cu-info__item-label" data-field="label">Email</span>
                      <span className="cu-info__item-value" data-field="value">sales@group107.com</span>
                    </div>
                  </a>
                  <a href="tel:+34614421011" className="cu-info__item" data-element="item">
                    <div className="cu-info__item-icon-wrap" data-element="icon-wrap">
                      {Phone && <Phone className="cu-info__item-icon" strokeWidth={1.5} />}
                    </div>
                    <div className="cu-info__item-body" data-element="body">
                      <span className="cu-info__item-label" data-field="label">Phone</span>
                      <span className="cu-info__item-value" data-field="value">+34 614 42 10 11</span>
                    </div>
                  </a>
                  <a href="https://www.group107.com" target="_blank" rel="noreferrer" className="cu-info__item" data-element="item">
                    <div className="cu-info__item-icon-wrap" data-element="icon-wrap">
                      {Globe && <Globe className="cu-info__item-icon" strokeWidth={1.5} />}
                    </div>
                    <div className="cu-info__item-body" data-element="body">
                      <span className="cu-info__item-label" data-field="label">Website</span>
                      <span className="cu-info__item-value" data-field="value">www.group107.com</span>
                    </div>
                  </a>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.24} direction="up">
                <div className="cu-info__locations" data-element="locations">
                  <div className="cu-info__locations-label" data-field="label">Our Locations</div>
                  {locations.map((loc, i) => (
                    <div key={i} className="cu-info__loc-card" data-element="loc-card">
                      <div className="cu-info__loc-icon-wrap" data-element="icon-wrap">
                        {MapPin && <MapPin className="cu-info__loc-icon" strokeWidth={1.5} />}
                      </div>
                      <div className="cu-info__loc-body" data-element="body">
                        <span className="cu-info__loc-city" data-field="city">{loc.city}</span>
                        <span className="cu-info__loc-country" data-field="country">{loc.country}</span>
                        <p className="cu-info__loc-desc" data-field="desc">{loc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>

          </div>
        </section>

        {/* ── How Can We Help ───────────────── */}
        <section className="cu-help" data-block="help">
          <div className="cu-help__inner" data-element="inner">
            <div className="cu-help__head" data-element="head">
              <AnimateIn delay={0} direction="up">
                <div className="cu-help__label" data-field="label">Service Areas</div>
              </AnimateIn>
              <AnimateIn delay={0.06} direction="up">
                <h2 className="cu-help__title" data-field="title">How Can We Help?</h2>
              </AnimateIn>
            </div>
            <div className="cu-help__grid" data-element="grid">
              {helpServices.map((svc, i) => {
                const Icon = Icons[svc.icon];
                return (
                  <AnimateIn key={i} delay={0.05 * i} direction="up">
                    <div className="cu-help__card" data-element="card">
                      <div className="cu-help__card-icon-wrap" data-element="icon-wrap">
                        {Icon && <Icon className="cu-help__card-icon" strokeWidth={1.5} />}
                      </div>
                      <span className="cu-help__card-title" data-field="title">{svc.title}</span>
                      <ArrowRight className="cu-help__card-arrow" />
                    </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────── */}
        <section className="cu-cta" data-block="cta">
          <div className="cu-cta__grain" aria-hidden="true" />
          <div className="cu-cta__inner" data-element="inner">
            <AnimateIn delay={0} direction="up">
              <h2 className="cu-cta__title" data-field="title">Ready to Build, Scale, or Improve Your Product?</h2>
            </AnimateIn>
            <AnimateIn delay={0.08} direction="up">
              <p className="cu-cta__sub" data-field="sub">
                Tell us what you are looking for, and our team will get back to you with the right next steps.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.14} direction="up">
              <a href="mailto:sales@group107.com" className="cu-cta__btn" data-field="cta">
                Contact Us <ArrowUpRight className="cu-cta__btn-icon" />
              </a>
            </AnimateIn>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

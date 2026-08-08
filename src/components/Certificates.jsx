import "./Certificates.css";
import { Arrow, Heading } from './Shared.jsx';

const certificates = [
  {
    title: 'CSS Specialization',
    issuer: 'Scrimba · Coursera',
    date: 'May 19, 2026',
    description: 'Completed seven courses covering HTML and CSS, Flexbox, Grid, variables, responsive design, animations, and Tailwind CSS.',
    credential: 'https://coursera.org/verify/specialization/H9TYB6XOVQD0',
  },
  {
    title: 'Next Certificate',
    issuer: 'Issuing organization to be added',
    date: 'Coming soon',
    description: 'A new certification will be added here when completed.',
    credential: null,
  },
  {
    title: 'Next Certificate',
    issuer: 'Issuing organization to be added',
    date: 'Coming soon',
    description: 'A new certification will be added here when completed.',
    credential: null,
  },
];

export default function Certificates() {
  return (
    <section id="certificates">
      <Heading eyebrow="03 / CERTIFICATES">Learning never goes out of style.</Heading>
      <div className="certs">
        {certificates.map((certificate, index) => (
          <article className="cert" key={certificate.title}>
            <b>0{index + 1}</b>
            <div>
              <small>CERTIFICATE</small>
              <h3>{certificate.title}</h3>
              <p>{certificate.description}</p>
            </div>
            <aside>
              <span>{certificate.issuer}</span>
              <span>{certificate.date}</span>
              {certificate.credential ? (
                <a href={certificate.credential} target="_blank" rel="noreferrer">
                  VIEW CERTIFICATE <Arrow />
                </a>
              ) : (
                <span aria-label="Certificate coming soon">COMING SOON</span>
              )}
            </aside>
          </article>
        ))}
      </div>
    </section>
  );
}

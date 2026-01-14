export default function FAQ() {
  return (
    <section className="faq">
      <h2 className="section-title">Frequently Asked Questions</h2>

      <div className="faq-list">
        <details className="faq-item">
          <summary className="faq-q">How do I view modules in a diploma?</summary>
          <div className="faq-a">Go to Diplomas, select a diploma, then choose a module to view details.</div>
        </details>

        <details className="faq-item">
          <summary className="faq-q">How do favourites work?</summary>
          <div className="faq-a">Tap Save on a module. It will be stored in localStorage and shown in Favourites.</div>
        </details>

        <details className="faq-item">
          <summary className="faq-q">What happens after I register interest?</summary>
          <div className="faq-a">A confirmation page will display the details you submitted.</div>
        </details>
      </div>
    </section>
  );
}

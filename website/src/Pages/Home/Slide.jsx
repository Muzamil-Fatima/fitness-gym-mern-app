export default function Slide({ title, number, text, onNext, onBack }) {
  return (
    <div>
      <div>
        <p>{title}</p>
        <div>{number}</div>
      </div>
      <hr />
      <p>{text}</p>
      <hr />
      <div>
        {onBack && <button conClick={onBack}>Back</button>}
        {onNext && <button onClick={onNext}>Next</button>}
      </div>
    </div>
  );
}

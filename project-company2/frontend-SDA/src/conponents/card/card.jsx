function Card({ title, value, change, positive }) {
  return (
    <div className="kpi-card">
      <p className="kpi-title">
        <span className="kpi-check">□</span> {title}
      </p>
      <h2 className="kpi-value">{value}</h2>
      <p className={`kpi-change ${positive ? 'positive' : 'negative'}`}>
        <span className="kpi-check">□</span> {change} vs เดือนก่อน
      </p>
    </div>
  )
}

export default Card

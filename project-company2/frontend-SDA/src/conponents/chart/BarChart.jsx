function BarChart({ data = [] }) {
  return (
    <div className="region-bars">
      {data.map((item, i) => (
        <div key={i} className="region-row">
          <div className="region-label">
            <span>{item.region}</span>
            <span>{item.percent}%</span>
          </div>
          <div className="region-track">
            <div
              className="region-fill"
              style={{ width: `${item.percent}%`, background: item.color }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default BarChart

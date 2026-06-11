const statusClass = (s) => {
  if (s === 'สูง') return 'badge-high'
  if (s === 'ปกติ') return 'badge-normal'
  return 'badge-low'
}

function Table({ data = [] }) {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>สินค้า</th>
          <th>ยอดขาย</th>
          <th>สถานะ</th>
        </tr>
      </thead>
      <tbody>
        {data.map((p, i) => (
          <tr key={i}>
            <td>{p.name}</td>
            <td>{p.sales}</td>
            <td><span className={`badge ${statusClass(p.status)}`}>{p.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table

function Navbar({ activeRange, onRangeChange }) {
  const ranges = ['1เดือน', '3เดือน', '6เดือน', '1ปี']

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">SP</div>
        <div>
          <h1 className="navbar-title">Sales Dashboard</h1>
          <p className="navbar-subtitle"></p>
        </div>
      </div>
      <div className="navbar-right">
        {ranges.map((r) => (
          <button
            key={r}
            className={`range-btn ${activeRange === r ? 'active' : ''}`}
            onClick={() => onRangeChange(r)}
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Navbar

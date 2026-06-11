import { useState } from 'react'
import Linechart from "../../conponents/chart/Linechart"
import BarChart from "../../conponents/chart/BarChart"
import Piechart from "../../conponents/chart/Piechart"
import Table from "../../conponents/table/table"
import Card from "../../conponents/card/card"
import Navbar from "../../conponents/navbar/navbar"
import Footer from "../../conponents/footer/footer"
import { salesByChannel, kpiByChannel, categoryByChannel, topProductsByChannel, regionalByChannel, notifications } from "../../mockData/mockdata"
import "./Dashbord.css"

const channels = ['All Channel', 'Modern Trade', 'Traditional Trade', 'E-Commerce']

function Dashbord() {
  const [activeRange, setActiveRange] = useState('1เดือน')
  const [activeChannel, setActiveChannel] = useState('All Channel')

  return (
    <div className="dashboard-wrapper">
      <Navbar activeRange={activeRange} onRangeChange={setActiveRange} />

      <main className="dashboard-content">

        {/* Channel Tabs */}
        <div className="channel-tabs">
          {channels.map((ch) => (
            <button
              key={ch}
              className={`channel-tab ${activeChannel === ch ? 'active' : ''}`}
              onClick={() => setActiveChannel(ch)}
            >
              {ch}
            </button>
          ))}
        </div>

        {/* KPI Cards */}
        <div className="kpi-grid">
          {kpiByChannel[activeChannel][activeRange].map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>

        {/* Charts Row */}
        <div className="charts-row">
          <div className="chart-card wide">
            <h3 className="section-title">ยอดขายรายเดือน (฿)</h3>
            <Linechart data={salesByChannel[activeChannel][activeRange]} />
          </div>
          <div className="chart-card">
            <h3 className="section-title">สัดส่วนตาม Category</h3>
            <Piechart data={categoryByChannel[activeChannel][activeRange]} />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="bottom-row">
          <div className="chart-card">
            <h3 className="section-title">สินค้าขายดีสุด</h3>
            <Table data={topProductsByChannel[activeChannel][activeRange]} />
          </div>
          <div className="chart-card">
            <h3 className="section-title">ยอดขายตามภูมิภาค</h3>
            <BarChart data={regionalByChannel[activeChannel][activeRange]} />
            <h3 className="section-title" style={{ marginTop: '24px' }}>การแจ้งเตือน</h3>
            <div className="notifications">
              {notifications.map((n, i) => (
                <div key={i} className="notif-item">
                  <span className="notif-dot" style={{ background: n.color }} />
                  <span>{n.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default Dashbord

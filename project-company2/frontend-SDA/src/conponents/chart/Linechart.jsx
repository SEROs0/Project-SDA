import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'

const fmt = (v) => `฿${(v / 1000000).toFixed(1)}M`

function Linechart({ data = [] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.35} />
            <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#2d2d4a" vertical={false} />
        <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis tickFormatter={fmt} tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} width={55} />
        <Tooltip
          formatter={(v) => [fmt(v), 'ยอดขาย']}
          contentStyle={{ background: '#1e1e35', border: '1px solid #2d2d4a', borderRadius: 8, color: '#f1f5f9' }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#60a5fa"
          strokeWidth={2}
          fill="url(#salesGrad)"
          dot={{ fill: '#60a5fa', r: 4, strokeWidth: 0 }}
          activeDot={{ r: 6, fill: '#93c5fd' }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Linechart

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function Piechart({ data = [] }) {
  return (
    <ResponsiveContainer width="100%" height={230}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="45%"
          innerRadius={58}
          outerRadius={88}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(v, name) => [`${v}%`, name]}
          contentStyle={{ background: '#1e1e35', border: '1px solid #2d2d4a', borderRadius: 8, color: '#f1f5f9' }}
        />
        <Legend
          iconType="circle"
          iconSize={9}
          formatter={(value) => <span style={{ color: '#94a3b8', fontSize: 12 }}>{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Piechart

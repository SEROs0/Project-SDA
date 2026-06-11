// ── helpers ──────────────────────────────────────────────────────────────────

const scale = (arr, mult) =>
  arr.map((d) => ({ ...d, value: Math.round(d.value * mult) }))

// ── base sales data (All Channel) ────────────────────────────────────────────

const baseSales = {
  '1เดือน': [
    { month: 'สัปดาห์ 1', value: 3200000 },
    { month: 'สัปดาห์ 2', value: 4500000 },
    { month: 'สัปดาห์ 3', value: 3800000 },
    { month: 'สัปดาห์ 4', value: 4600000 },
  ],
  '3เดือน': [
    { month: 'ต.ค.', value: 12800000 },
    { month: 'พ.ย.', value: 14200000 },
    { month: 'ธ.ค.', value: 16100000 },
  ],
  '6เดือน': [
    { month: 'ก.ค.', value: 11200000 },
    { month: 'ส.ค.', value: 13500000 },
    { month: 'ก.ย.', value: 12100000 },
    { month: 'ต.ค.', value: 12800000 },
    { month: 'พ.ย.', value: 14200000 },
    { month: 'ธ.ค.', value: 16100000 },
  ],
  '1ปี': [
    { month: 'ม.ค.', value: 9500000  },
    { month: 'ก.พ.', value: 8800000  },
    { month: 'มี.ค.', value: 10200000 },
    { month: 'เม.ย.', value: 11500000 },
    { month: 'พ.ค.', value: 10800000 },
    { month: 'มิ.ย.', value: 12300000 },
    { month: 'ก.ค.', value: 11200000 },
    { month: 'ส.ค.', value: 13500000 },
    { month: 'ก.ย.', value: 12100000 },
    { month: 'ต.ค.', value: 12800000 },
    { month: 'พ.ย.', value: 14200000 },
    { month: 'ธ.ค.', value: 16100000 },
  ],
}

// MT ~55%, TT ~30%, EC ~15% ของ All Channel
const salesMult = {
  'All Channel':       1,
  'Modern Trade':      0.55,
  'Traditional Trade': 0.30,
  'E-Commerce':        0.15,
}

export const salesByChannel = Object.fromEntries(
  Object.entries(salesMult).map(([ch, m]) => [
    ch,
    Object.fromEntries(Object.entries(baseSales).map(([r, d]) => [r, scale(d, m)])),
  ])
)

// ── KPI data ─────────────────────────────────────────────────────────────────

export const kpiByChannel = {
  'All Channel': {
    '1เดือน': [
      { title: 'ยอดขายรวม',        value: '฿16.1M',  change: '+12.4%', positive: true  },
      { title: 'ออเดอร์ทั้งหมด',  value: '428',     change: '+8.1%',  positive: true  },
      { title: 'ลูกค้าที่ active', value: '198',     change: '-2.3%',  positive: false },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿37,617', change: '+3.9%', positive: true  },
    ],
    '3เดือน': [
      { title: 'ยอดขายรวม',        value: '฿43.1M',  change: '+9.7%',  positive: true },
      { title: 'ออเดอร์ทั้งหมด',  value: '1,245',   change: '+6.3%',  positive: true },
      { title: 'ลูกค้าที่ active', value: '312',     change: '+1.5%',  positive: true },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿34,618', change: '+3.2%', positive: true },
    ],
    '6เดือน': [
      { title: 'ยอดขายรวม',        value: '฿79.9M',  change: '+15.2%', positive: true },
      { title: 'ออเดอร์ทั้งหมด',  value: '2,381',   change: '+11.4%', positive: true },
      { title: 'ลูกค้าที่ active', value: '445',     change: '+5.8%',  positive: true },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿33,558', change: '+3.4%', positive: true },
    ],
    '1ปี': [
      { title: 'ยอดขายรวม',        value: '฿143.0M', change: '+21.3%', positive: true },
      { title: 'ออเดอร์ทั้งหมด',  value: '4,620',   change: '+18.7%', positive: true },
      { title: 'ลูกค้าที่ active', value: '589',     change: '+9.1%',  positive: true },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿30,952', change: '+2.2%', positive: true },
    ],
  },
  'Modern Trade': {
    '1เดือน': [
      { title: 'ยอดขายรวม',        value: '฿8.9M',   change: '+14.2%', positive: true  },
      { title: 'ออเดอร์ทั้งหมด',  value: '186',     change: '+9.3%',  positive: true  },
      { title: 'ลูกค้าที่ active', value: '52',      change: '-1.2%',  positive: false },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿47,849', change: '+4.5%', positive: true  },
    ],
    '3เดือน': [
      { title: 'ยอดขายรวม',        value: '฿23.7M',  change: '+11.8%', positive: true },
      { title: 'ออเดอร์ทั้งหมด',  value: '541',     change: '+7.6%',  positive: true },
      { title: 'ลูกค้าที่ active', value: '68',      change: '+2.1%',  positive: true },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿43,808', change: '+3.9%', positive: true },
    ],
    '6เดือน': [
      { title: 'ยอดขายรวม',        value: '฿43.9M',  change: '+16.7%', positive: true },
      { title: 'ออเดอร์ทั้งหมด',  value: '1,024',   change: '+13.2%', positive: true },
      { title: 'ลูกค้าที่ active', value: '79',      change: '+6.4%',  positive: true },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿42,871', change: '+3.1%', positive: true },
    ],
    '1ปี': [
      { title: 'ยอดขายรวม',        value: '฿78.7M',  change: '+23.1%', positive: true },
      { title: 'ออเดอร์ทั้งหมด',  value: '1,981',   change: '+20.4%', positive: true },
      { title: 'ลูกค้าที่ active', value: '91',      change: '+10.5%', positive: true },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿39,728', change: '+2.2%', positive: true },
    ],
  },
  'Traditional Trade': {
    '1เดือน': [
      { title: 'ยอดขายรวม',        value: '฿4.8M',   change: '+7.1%',  positive: true  },
      { title: 'ออเดอร์ทั้งหมด',  value: '178',     change: '+5.4%',  positive: true  },
      { title: 'ลูกค้าที่ active', value: '112',     change: '-4.3%',  positive: false },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿26,966', change: '+1.6%', positive: true  },
    ],
    '3เดือน': [
      { title: 'ยอดขายรวม',        value: '฿12.9M',  change: '+5.8%',  positive: true },
      { title: 'ออเดอร์ทั้งหมด',  value: '498',     change: '+3.9%',  positive: true },
      { title: 'ลูกค้าที่ active', value: '189',     change: '-0.8%',  positive: false },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿25,904', change: '+1.8%', positive: true },
    ],
    '6เดือน': [
      { title: 'ยอดขายรวม',        value: '฿24.0M',  change: '+10.3%', positive: true },
      { title: 'ออเดอร์ทั้งหมด',  value: '981',     change: '+7.8%',  positive: true },
      { title: 'ลูกค้าที่ active', value: '224',     change: '+3.1%',  positive: true },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿24,464', change: '+2.3%', positive: true },
    ],
    '1ปี': [
      { title: 'ยอดขายรวม',        value: '฿42.9M',  change: '+14.6%', positive: true },
      { title: 'ออเดอร์ทั้งหมด',  value: '1,876',   change: '+12.1%', positive: true },
      { title: 'ลูกค้าที่ active', value: '341',     change: '+6.7%',  positive: true },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿22,867', change: '+2.2%', positive: true },
    ],
  },
  'E-Commerce': {
    '1เดือน': [
      { title: 'ยอดขายรวม',        value: '฿2.4M',   change: '+31.5%', positive: true },
      { title: 'ออเดอร์ทั้งหมด',  value: '64',      change: '+27.8%', positive: true },
      { title: 'ลูกค้าที่ active', value: '34',      change: '+18.4%', positive: true },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿37,500', change: '+3.0%', positive: true },
    ],
    '3เดือน': [
      { title: 'ยอดขายรวม',        value: '฿6.5M',   change: '+28.4%', positive: true },
      { title: 'ออเดอร์ทั้งหมด',  value: '206',     change: '+24.1%', positive: true },
      { title: 'ลูกค้าที่ active', value: '55',      change: '+15.9%', positive: true },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿31,553', change: '+3.4%', positive: true },
    ],
    '6เดือน': [
      { title: 'ยอดขายรวม',        value: '฿12.0M',  change: '+35.2%', positive: true },
      { title: 'ออเดอร์ทั้งหมด',  value: '376',     change: '+30.8%', positive: true },
      { title: 'ลูกค้าที่ active', value: '142',     change: '+22.3%', positive: true },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿31,915', change: '+3.4%', positive: true },
    ],
    '1ปี': [
      { title: 'ยอดขายรวม',        value: '฿21.5M',  change: '+42.7%', positive: true },
      { title: 'ออเดอร์ทั้งหมด',  value: '763',     change: '+38.9%', positive: true },
      { title: 'ลูกค้าที่ active', value: '157',     change: '+29.6%', positive: true },
      { title: 'ค่าเฉลี่ย/ออเดอร์', value: '฿28,178', change: '+2.7%', positive: true },
    ],
  },
}

// ── Category data ─────────────────────────────────────────────────────────────

export const categoryByChannel = {
  'All Channel': {
    '1เดือน': [
      { name: 'ช็อกโกแลต',   value: 35, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 25, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 20, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 12, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 8,  color: '#6b7280' },
    ],
    '3เดือน': [
      { name: 'ช็อกโกแลต',   value: 40, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 22, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 18, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 13, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 7,  color: '#6b7280' },
    ],
    '6เดือน': [
      { name: 'ช็อกโกแลต',   value: 30, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 28, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 24, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 11, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 7,  color: '#6b7280' },
    ],
    '1ปี': [
      { name: 'ช็อกโกแลต',   value: 28, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 27, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 26, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 12, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 7,  color: '#6b7280' },
    ],
  },
  'Modern Trade': {
    '1เดือน': [
      { name: 'ช็อกโกแลต',   value: 48, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 22, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 15, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 10, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 5,  color: '#6b7280' },
    ],
    '3เดือน': [
      { name: 'ช็อกโกแลต',   value: 52, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 20, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 13, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 10, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 5,  color: '#6b7280' },
    ],
    '6เดือน': [
      { name: 'ช็อกโกแลต',   value: 42, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 25, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 18, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 10, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 5,  color: '#6b7280' },
    ],
    '1ปี': [
      { name: 'ช็อกโกแลต',   value: 38, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 26, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 20, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 11, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 5,  color: '#6b7280' },
    ],
  },
  'Traditional Trade': {
    '1เดือน': [
      { name: 'ช็อกโกแลต',   value: 20, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 35, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 28, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 12, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 5,  color: '#6b7280' },
    ],
    '3เดือน': [
      { name: 'ช็อกโกแลต',   value: 25, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 33, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 26, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 11, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 5,  color: '#6b7280' },
    ],
    '6เดือน': [
      { name: 'ช็อกโกแลต',   value: 18, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 36, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 30, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 11, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 5,  color: '#6b7280' },
    ],
    '1ปี': [
      { name: 'ช็อกโกแลต',   value: 17, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 34, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 32, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 11, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 6,  color: '#6b7280' },
    ],
  },
  'E-Commerce': {
    '1เดือน': [
      { name: 'ช็อกโกแลต',   value: 30, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 20, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 15, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 14, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 21, color: '#6b7280' },
    ],
    '3เดือน': [
      { name: 'ช็อกโกแลต',   value: 34, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 19, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 13, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 15, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 19, color: '#6b7280' },
    ],
    '6เดือน': [
      { name: 'ช็อกโกแลต',   value: 28, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 22, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 17, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 14, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 19, color: '#6b7280' },
    ],
    '1ปี': [
      { name: 'ช็อกโกแลต',   value: 25, color: '#3b82f6' },
      { name: 'ขนมขบเคี้ยว', value: 23, color: '#10b981' },
      { name: 'เครื่องดื่ม',  value: 18, color: '#f59e0b' },
      { name: 'ลูกอม',        value: 16, color: '#8b5cf6' },
      { name: 'อื่นๆ',        value: 18, color: '#6b7280' },
    ],
  },
}

// ── Top Products ──────────────────────────────────────────────────────────────

export const topProductsByChannel = {
  'All Channel': {
    '1เดือน': [
      { name: 'Pringles Original',     sales: '฿4.2M',  status: 'สูง'   },
      { name: 'Ferrero Rocher 200g',   sales: '฿3.8M',  status: 'สูง'   },
      { name: 'Nutella 750g',          sales: '฿3.1M',  status: 'สูง'   },
      { name: "Kellogg's Corn Flakes", sales: '฿2.6M',  status: 'ปกติ' },
      { name: 'Chupa Chups Assorted',  sales: '฿2.2M',  status: 'ปกติ' },
      { name: 'Evian 1.5L x6',        sales: '฿1.4M',  status: 'ต่ำ'   },
    ],
    '3เดือน': [
      { name: 'Ferrero Rocher 200g',   sales: '฿11.8M', status: 'สูง'   },
      { name: 'Nutella 750g',          sales: '฿10.2M', status: 'สูง'   },
      { name: 'Pringles Original',     sales: '฿9.7M',  status: 'สูง'   },
      { name: 'Toblerone 360g',        sales: '฿7.4M',  status: 'สูง'   },
      { name: "Kellogg's Corn Flakes", sales: '฿6.1M',  status: 'ปกติ' },
      { name: 'Evian 1.5L x6',        sales: '฿3.9M',  status: 'ต่ำ'   },
    ],
    '6เดือน': [
      { name: 'Pringles Original',     sales: '฿22.1M', status: 'สูง'   },
      { name: 'Ferrero Rocher 200g',   sales: '฿19.6M', status: 'สูง'   },
      { name: 'Nutella 750g',          sales: '฿17.3M', status: 'สูง'   },
      { name: "Kellogg's Corn Flakes", sales: '฿13.8M', status: 'ปกติ' },
      { name: 'Toblerone 360g',        sales: '฿11.2M', status: 'ปกติ' },
      { name: 'Chupa Chups Assorted',  sales: '฿7.9M',  status: 'ปกติ' },
    ],
    '1ปี': [
      { name: 'Pringles Original',     sales: '฿41.5M', status: 'สูง'   },
      { name: 'Ferrero Rocher 200g',   sales: '฿36.2M', status: 'สูง'   },
      { name: "Kellogg's Corn Flakes", sales: '฿28.9M', status: 'สูง'   },
      { name: 'Nutella 750g',          sales: '฿27.4M', status: 'สูง'   },
      { name: 'Chupa Chups Assorted',  sales: '฿19.8M', status: 'ปกติ' },
      { name: 'Evian 1.5L x6',        sales: '฿14.2M', status: 'ปกติ' },
    ],
  },
  'Modern Trade': {
    '1เดือน': [
      { name: 'Ferrero Rocher 200g',   sales: '฿2.6M',  status: 'สูง'   },
      { name: 'Nutella 750g',          sales: '฿2.1M',  status: 'สูง'   },
      { name: 'Toblerone 360g',        sales: '฿1.8M',  status: 'สูง'   },
      { name: 'Pringles Original',     sales: '฿1.2M',  status: 'ปกติ' },
      { name: 'Lindt Excellence 100g', sales: '฿0.9M',  status: 'ปกติ' },
      { name: 'Evian 1.5L x6',        sales: '฿0.3M',  status: 'ต่ำ'   },
    ],
    '3เดือน': [
      { name: 'Ferrero Rocher 200g',   sales: '฿7.8M',  status: 'สูง'   },
      { name: 'Nutella 750g',          sales: '฿6.4M',  status: 'สูง'   },
      { name: 'Toblerone 360g',        sales: '฿5.2M',  status: 'สูง'   },
      { name: 'Lindt Excellence 100g', sales: '฿3.1M',  status: 'สูง'   },
      { name: 'Pringles Original',     sales: '฿3.5M',  status: 'ปกติ' },
      { name: 'Evian 1.5L x6',        sales: '฿1.7M',  status: 'ต่ำ'   },
    ],
    '6เดือน': [
      { name: 'Ferrero Rocher 200g',   sales: '฿13.2M', status: 'สูง'   },
      { name: 'Nutella 750g',          sales: '฿11.5M', status: 'สูง'   },
      { name: 'Toblerone 360g',        sales: '฿9.8M',  status: 'สูง'   },
      { name: 'Pringles Original',     sales: '฿6.4M',  status: 'ปกติ' },
      { name: 'Lindt Excellence 100g', sales: '฿5.7M',  status: 'ปกติ' },
      { name: 'Evian 1.5L x6',        sales: '฿3.3M',  status: 'ต่ำ'   },
    ],
    '1ปี': [
      { name: 'Ferrero Rocher 200g',   sales: '฿24.1M', status: 'สูง'   },
      { name: 'Nutella 750g',          sales: '฿20.8M', status: 'สูง'   },
      { name: 'Toblerone 360g',        sales: '฿17.2M', status: 'สูง'   },
      { name: 'Lindt Excellence 100g', sales: '฿10.4M', status: 'สูง'   },
      { name: 'Pringles Original',     sales: '฿9.8M',  status: 'ปกติ' },
      { name: 'Evian 1.5L x6',        sales: '฿5.4M',  status: 'ปกติ' },
    ],
  },
  'Traditional Trade': {
    '1เดือน': [
      { name: 'Pringles Original',     sales: '฿1.8M',  status: 'สูง'   },
      { name: "Kellogg's Corn Flakes", sales: '฿1.2M',  status: 'สูง'   },
      { name: 'Chupa Chups Assorted',  sales: '฿0.9M',  status: 'สูง'   },
      { name: 'Ovaltine 3in1 x20',    sales: '฿0.7M',  status: 'ปกติ' },
      { name: 'Milo 400g',            sales: '฿0.5M',  status: 'ปกติ' },
      { name: 'Nutella 750g',         sales: '฿0.4M',  status: 'ต่ำ'   },
    ],
    '3เดือน': [
      { name: 'Pringles Original',     sales: '฿5.2M',  status: 'สูง'   },
      { name: "Kellogg's Corn Flakes", sales: '฿3.8M',  status: 'สูง'   },
      { name: 'Chupa Chups Assorted',  sales: '฿2.9M',  status: 'สูง'   },
      { name: 'Ovaltine 3in1 x20',    sales: '฿2.1M',  status: 'ปกติ' },
      { name: 'Milo 400g',            sales: '฿1.6M',  status: 'ปกติ' },
      { name: 'Nutella 750g',         sales: '฿1.2M',  status: 'ปกติ' },
    ],
    '6เดือน': [
      { name: 'Pringles Original',     sales: '฿9.7M',  status: 'สูง'   },
      { name: "Kellogg's Corn Flakes", sales: '฿7.1M',  status: 'สูง'   },
      { name: 'Chupa Chups Assorted',  sales: '฿5.4M',  status: 'สูง'   },
      { name: 'Ovaltine 3in1 x20',    sales: '฿3.9M',  status: 'ปกติ' },
      { name: 'Milo 400g',            sales: '฿3.1M',  status: 'ปกติ' },
      { name: 'Nutella 750g',         sales: '฿2.2M',  status: 'ปกติ' },
    ],
    '1ปี': [
      { name: 'Pringles Original',     sales: '฿18.6M', status: 'สูง'   },
      { name: "Kellogg's Corn Flakes", sales: '฿13.4M', status: 'สูง'   },
      { name: 'Chupa Chups Assorted',  sales: '฿10.1M', status: 'สูง'   },
      { name: 'Ovaltine 3in1 x20',    sales: '฿7.2M',  status: 'ปกติ' },
      { name: 'Milo 400g',            sales: '฿5.8M',  status: 'ปกติ' },
      { name: 'Nutella 750g',         sales: '฿3.9M',  status: 'ต่ำ'   },
    ],
  },
  'E-Commerce': {
    '1เดือน': [
      { name: 'Nutella 750g',          sales: '฿0.8M',  status: 'สูง'   },
      { name: 'Ferrero Rocher 200g',   sales: '฿0.6M',  status: 'สูง'   },
      { name: 'Pringles Original',     sales: '฿0.4M',  status: 'สูง'   },
      { name: 'Toblerone 360g',        sales: '฿0.3M',  status: 'ปกติ' },
      { name: 'Chupa Chups Assorted',  sales: '฿0.2M',  status: 'ปกติ' },
      { name: "Kellogg's Corn Flakes", sales: '฿0.1M',  status: 'ต่ำ'   },
    ],
    '3เดือน': [
      { name: 'Nutella 750g',          sales: '฿2.4M',  status: 'สูง'   },
      { name: 'Ferrero Rocher 200g',   sales: '฿1.9M',  status: 'สูง'   },
      { name: 'Pringles Original',     sales: '฿1.2M',  status: 'สูง'   },
      { name: 'Toblerone 360g',        sales: '฿0.8M',  status: 'ปกติ' },
      { name: 'Chupa Chups Assorted',  sales: '฿0.6M',  status: 'ปกติ' },
      { name: "Kellogg's Corn Flakes", sales: '฿0.4M',  status: 'ต่ำ'   },
    ],
    '6เดือน': [
      { name: 'Nutella 750g',          sales: '฿4.3M',  status: 'สูง'   },
      { name: 'Ferrero Rocher 200g',   sales: '฿3.4M',  status: 'สูง'   },
      { name: 'Pringles Original',     sales: '฿2.1M',  status: 'สูง'   },
      { name: 'Toblerone 360g',        sales: '฿1.5M',  status: 'ปกติ' },
      { name: 'Chupa Chups Assorted',  sales: '฿0.9M',  status: 'ปกติ' },
      { name: "Kellogg's Corn Flakes", sales: '฿0.5M',  status: 'ต่ำ'   },
    ],
    '1ปี': [
      { name: 'Nutella 750g',          sales: '฿7.8M',  status: 'สูง'   },
      { name: 'Ferrero Rocher 200g',   sales: '฿6.1M',  status: 'สูง'   },
      { name: 'Pringles Original',     sales: '฿3.9M',  status: 'สูง'   },
      { name: 'Toblerone 360g',        sales: '฿2.4M',  status: 'ปกติ' },
      { name: 'Chupa Chups Assorted',  sales: '฿1.5M',  status: 'ปกติ' },
      { name: "Kellogg's Corn Flakes", sales: '฿0.8M',  status: 'ต่ำ'   },
    ],
  },
}

// ── Regional Sales ────────────────────────────────────────────────────────────

export const regionalByChannel = {
  'All Channel': {
    '1เดือน': [
      { region: 'กรุงเทพฯ', percent: 42, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 22, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 16, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 12, color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 8,  color: '#ef4444' },
    ],
    '3เดือน': [
      { region: 'กรุงเทพฯ', percent: 46, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 21, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 14, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 11, color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 8,  color: '#ef4444' },
    ],
    '6เดือน': [
      { region: 'กรุงเทพฯ', percent: 40, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 23, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 18, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 12, color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 7,  color: '#ef4444' },
    ],
    '1ปี': [
      { region: 'กรุงเทพฯ', percent: 38, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 24, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 19, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 13, color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 6,  color: '#ef4444' },
    ],
  },
  'Modern Trade': {
    '1เดือน': [
      { region: 'กรุงเทพฯ', percent: 55, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 20, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 12, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 8,  color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 5,  color: '#ef4444' },
    ],
    '3เดือน': [
      { region: 'กรุงเทพฯ', percent: 58, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 19, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 11, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 7,  color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 5,  color: '#ef4444' },
    ],
    '6เดือน': [
      { region: 'กรุงเทพฯ', percent: 53, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 21, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 13, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 8,  color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 5,  color: '#ef4444' },
    ],
    '1ปี': [
      { region: 'กรุงเทพฯ', percent: 51, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 22, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 14, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 9,  color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 4,  color: '#ef4444' },
    ],
  },
  'Traditional Trade': {
    '1เดือน': [
      { region: 'กรุงเทพฯ', percent: 28, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 26, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 22, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 14, color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 10, color: '#ef4444' },
    ],
    '3เดือน': [
      { region: 'กรุงเทพฯ', percent: 30, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 25, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 21, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 14, color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 10, color: '#ef4444' },
    ],
    '6เดือน': [
      { region: 'กรุงเทพฯ', percent: 27, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 27, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 23, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 14, color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 9,  color: '#ef4444' },
    ],
    '1ปี': [
      { region: 'กรุงเทพฯ', percent: 25, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 28, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 24, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 14, color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 9,  color: '#ef4444' },
    ],
  },
  'E-Commerce': {
    '1เดือน': [
      { region: 'กรุงเทพฯ', percent: 62, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 18, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 10, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 6,  color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 4,  color: '#ef4444' },
    ],
    '3เดือน': [
      { region: 'กรุงเทพฯ', percent: 60, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 19, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 11, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 6,  color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 4,  color: '#ef4444' },
    ],
    '6เดือน': [
      { region: 'กรุงเทพฯ', percent: 58, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 20, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 12, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 6,  color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 4,  color: '#ef4444' },
    ],
    '1ปี': [
      { region: 'กรุงเทพฯ', percent: 55, color: '#3b82f6' },
      { region: 'ภาคกลาง',  percent: 22, color: '#10b981' },
      { region: 'ภาคเหนือ', percent: 13, color: '#f59e0b' },
      { region: 'ภาคใต้',   percent: 6,  color: '#8b5cf6' },
      { region: 'ภาคอีสาน', percent: 4,  color: '#ef4444' },
    ],
  },
}

// ── Notifications ─────────────────────────────────────────────────────────────

export const notifications = [
  { text: 'Pringles stock เหลือ <200 units',  color: '#ef4444' },
  { text: 'ออเดอร์ MT รอ approve 14 รายการ', color: '#f59e0b' },
  { text: 'Ferrero ยอดขายสูงกว่า target 18%', color: '#10b981' },
]

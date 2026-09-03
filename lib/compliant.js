export const ROBOTICS_TARGETS = [
  { company: "Figure AI", titles: ["Partnerships","Product","AI Data"] },
  { company: "Tesla Optimus", titles: ["Optimus","AI Data"] },
  { company: "Agility Robotics", titles: ["Product"] },
  { company: "Boston Dynamics", titles: ["Partnerships"] },
  { company: "ServiceTitan", titles: ["Partnerships"] },
];
export function compliantPitch(name, company) {
  return `Hi ${name}, saw ${company} building humanoids. We built VENUS-RAG - only Physical AI RAG - 10 trades, 500k+ chars structured, vector <100ms. Your robot walks, we teach it to fix dryer/HVAC/wire outlet. Live today. $50k license. 5 min demo? - Ron, Venus HQ7`;
}

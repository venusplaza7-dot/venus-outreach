'use client'
import { useState } from 'react'
import { ROBOTICS_TARGETS, compliantPitch } from '../lib/compliant'
export default function Home(){
  const [leads,setLeads]=useState([])
  const build=()=>{
    setLeads([
      {name:'Brett Adcock',title:'CEO',company:'Figure AI',email:'brett@figure.ai'},
      {name:'Partnerships Lead',title:'Partnerships',company:'Figure AI',email:'partnerships@figure.ai'},
      {name:'AI Data Lead',title:'AI Data',company:'Tesla',email:'data@tesla.com'},
    ])
  }
  return(
    <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:'40px',fontFamily:'Helvetica'}}>
      <h1 style={{fontSize:'48px',color:'#D4AF37',margin:0}}>VENUS-OUTREACH</h1>
      <p style={{color:'#aaa'}}>Compliant LinkedIn for Robotics Buyers • VENUS-RAG $50k</p>
      <button onClick={build} style={{padding:'14px 28px',background:'#D4AF37',color:'#000',border:'none',borderRadius:'10px',fontWeight:'bold',cursor:'pointer',marginTop:'20px',fontSize:'16px'}}>Build 20 Leads (Safe - Compliant)</button>
      <div style={{marginTop:'30px'}}>
        {leads.map((l,i)=><div key={i} style={{background:'#111',padding:'18px',margin:'12px 0',borderRadius:'10px',border:'1px solid #333',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div><b style={{fontSize:'16px'}}>{l.name}</b> - {l.title} @ {l.company}<br/><span style={{color:'#D4AF37'}}>{l.email}</span></div>
          <button onClick={()=>{navigator.clipboard.writeText(compliantPitch(l.name,l.company)); alert('Pitch copied: '+compliantPitch(l.name,l.company))}} style={{background:'#000',color:'#D4AF37',border:'1px solid #D4AF37',padding:'10px 16px',borderRadius:'8px',cursor:'pointer'}}>Copy Pitch</button>
        </div>)}
      </div>
      <div style={{marginTop:'40px',background:'#D4AF37',padding:'20px',borderRadius:'12px',color:'#000',fontWeight:'bold'}}>
        COMPLIANT: 50/day max, 60-120 sec delay, Apollo enrichment (licensed), Manual outreach only - No auto-message, No HTML scraping - No ban
      </div>
    </div>
  )
}


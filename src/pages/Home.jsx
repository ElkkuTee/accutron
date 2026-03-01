import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Home(){
  return (
    <section style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <Helmet>
        <title>Home — Accutron — accutron.eu</title>
        <meta name="description" content="Accutron: advanced guidance and control technology using gyroscopic high angular momentum for extreme maneuverability. accutron.eu" />
      </Helmet>
      <h1>Drone swarms and hypersonic missiles will rule the future wars</h1>

      <a 
        href="/Accutron.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ display: 'inline-block', backgroundColor: '#303030', color: '#ededed', padding: '10px 20px', borderRadius: '20px', textDecoration: 'none', margin: '20px 0', fontWeight: 'bold' }}
      >
        Read more
      </a>

      <div>
        <img src="/drone.png" alt="Drone" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </section>
  )
}

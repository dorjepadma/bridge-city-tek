import './about.styles.scss';

const About = () => {
  return (
    <div className='aboutContainer'>
      <div variant='h1' className="aboutTitle">
        About
      </div>
      <div className='about'>
        <div variant="h4" className="aboutCard">
        We are a small team of web developers and designers. We specialize in creating websites and mobile apps. We are based in Portland, Oregon.
        </div>  
        <div className='exampleLinks'>
      
            <div variant="h4" className="exampleLink" href='https://www.nestz.life' target='_blank' rel='noopener noreferrer'>
              Nestz.life
            </div>
            <div variant="h4" className="exampleLink" href='https://www.astraltunes.com' target='_blank' rel='noopener noreferrer'>
              AstralTunes
            </div>
      </div>
      </div>
    </div>
  );
}

export default About;

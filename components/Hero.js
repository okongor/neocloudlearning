
const Hero = () => (
    <div style={styles.hero}>
      <div style={styles.heroContent}>
     
         <h1 style={styles.h1}>
            
            <br/> &nbsp;&nbsp;&nbsp;&nbsp; Learn Tech, lets Build the Future &nbsp;&nbsp;&nbsp;&nbsp;
            <br/>
            <br/>
            </h1> 
        
      </div>
    </div>


  );



  



  
  
  const styles = {
    hero: {
      backgroundImage: 'url(/p1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '450px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
    },

    cursor: {
        backgroundColor: 'rgb(15 23 42)',
        width: '0.25rem',
        height: '40',
    },

    h1:{
        fontSize:40,
        fontWeight:900,
        color:'white',
        
    },

   

    heroContent: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Adds a dark overlay for better text readability
      padding: '20px',
      borderRadius: '10px',
    },
  };
  
  export default Hero;
  
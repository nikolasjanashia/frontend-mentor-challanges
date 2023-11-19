import './App.css';
import Img from '../src/images/image-qr-code.png';

function App() {
  const styles = {
    qrcode: {
      height: '100vh',
      width: '100%',
      background: 'hsl(212, 45%, 89%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    crimg: {
      width: '100%',
      border: 'none',
      borderRadius: '10px',
    },

    h1text: {
      textAlign: 'center',
      fontWeight: 700,
    },
    paragraph: {
      fontSize: '15px',
      textAlign: 'center',
      fontWeight: 400,
      color: 'hsl(220, 15%, 55%)',
    },
  };

  return (
    <div className="qrcode" style={styles.qrcode}>
      <div
        style={{
          width: '245px',
          background: 'white',
          padding: '20px',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img style={styles.crimg} src={Img}></img>
        <div className="h1-text">
          <h3 style={styles.h1text}>
            Improve your front-end skills by building projects
          </h3>
        </div>
        <div className="paragraph" style={styles.paragraph}>
          <p style={{marginTop:0}}>
            scan the QR code to visit FrontEnd Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

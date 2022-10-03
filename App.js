import './App.css'
import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import { Image } from 'react-native';

export default function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3
    }, function (err, url) {
      setQrcodeLink(url);
    })
  }

  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value)
  }


  return (
    <div className='container'>

<Image
 style={{width: 100, height: 150}}
 source={require('./assets/logo.png')}
/>

      <h1> Gerador de QRCODE</h1>

      <QRCode
        value={link}
        fgColor='#032915'
      />
      <input
        className='input'
        placeholder='Digite seu link...'
        value={link}
        onChange={(e) => handleQrcode(e)}
      />

      <button style={{width: 230,
    height:50,
    borderWidth: 2,
    borderRadius: 25, marginTop: 15, borderColor: '#121212', background: '#032915', color: '#fff'}}> 
      
      <a href={qrcodeLink} download={'qrcode.png'} style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}> Baixar QrCode </a>
 </button>

       

    </div>
  );
}



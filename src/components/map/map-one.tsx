const MapOne = () => {
  return (
    <div className="it-map-area">
      <div className="it-map-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337041.17594735767!2d81.13041326170405!3d21.040126986830835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a226aece9af3bfd%3A0x133625caa9cea81f!2z4KaT4Kah4Ka84Ka_4Ka24Ka-LCDgpq3gpr7gprDgpqQ!5e0!3m2!1sbn!2sbd!4v1692973582827!5m2!1sbn!2sbd"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default MapOne;

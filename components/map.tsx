    import React from 'react';

    export default function EmbeddedMap() {
      const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.041079981824!2d79.15335867542127!3d12.969223187345957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1759205957456!5m2!1sen!2sin"

      return (
        <div style={{ height: '400px', width: '100%' }}>
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={iframeSrc}
          ></iframe>


        </div>
      );
    }
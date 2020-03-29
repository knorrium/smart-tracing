import React from 'react';

const Individuals = () => (
  <div className="content">
    <div className="container" style={{ padding: 0 }}>
      <div className="card card-lg">
        <div className="card-body">
          <div className="markdown">
            <div className="d-flex" />
            <h2>What is Zerobase? </h2>
            <p>
              Zerobase is a tool used by state and local health officials to pinpoint individuals
              likeliest to next develop COVID-19. Zerobase uses anonymized predictive technology to
              help protect communities before an outbreak occurs, enabling officials to best
              allocate their resources, eliminating guesswork, and reducing illness and fear.
            </p>
            <h2>How Much Does It Cost? </h2>
            <p>
              Zerobase is being offered without charge. It has been organized as a nonprofit effort
              and labor has been donated.
            </p>
            <h2>Who is building Zerobase? </h2>
            <p>
              Zerobase was created by a team of volunteer technologists and medical professionals
              concerned about the spread of coronavirus among their fellow communities. Using local
              data, their program traces the likely path of travel of the virus, identifying the
              next prospective patients before illness can spread further.
            </p>
            <h2>How does it work? </h2>
            <p>
              Local governments work with businesses, places of worship, and other gathering spaces
              in their communities to post a QR code at the entrance or another obvious highly
              trafficked spot. Individuals visiting those locations scan the QR code on their way in
              and their information is then anonymized and analyzed to ascertain likely patterns of
              spread in that community. The data builds up invisible networks of interaction among
              people. If someone tests positive, the program can inform local health authorities of
              the next likely people to contract and spread illness. Patients and prospective
              patients are informed anonymously via their cell phones. The more data that is
              collected and aggregated, the more accurate its predictive properties. Over time,
              communities deploying Zerobase help sister communities to be even better prepared for
              viral spread.
            </p>
            <h2>What information is collected by Zerobase? </h2>
            <p>
              Your identity is never known by Zerobase. Zerobase uses technology through QR scans to
              track where your phone has been, but it will never ask for your email, your name,
              address, or other identifying information. You can provide your phone number to
              receive notifications, but Zerobase will not use it for any other purpose. Personally
              identifying information is therefore not stored and not subject to discovery by any
              other party. See our privacy policy here [future link to privacy policy]. How do I use
              Zerobase? When entering a participating business or public location, or health care
              provider, scan the displayed QR code. For most people, this is as simple as pointing
              their phone’s camera at the sign, it takes just a few seconds, and no app installation
              is required.
            </p>
            <h2>What if my phone cannot automatically scan the QR code? </h2>
            <p>
              If your default camera app does not have QR scanning ability, you can go to the
              zerobase.io website and click scan from the dropdown menu. What technological
              resources does Zerobase require? A computer and a printer is all that is required for
              local public health efforts to activate Zerobase. Individual community members only
              need a cell phone to go to the website https://zerobase.io. Do I have to install an
              app to use Zerobase? No. To use Zerobase, simply scan the QR code on your phone at one
              of your community’s locations, or go to the Zerobase website which will automatically
              enroll you.
            </p>
            <p>
              Will I be notified if I’m at risk of exposure? You will only be notified if you
              provide your phone number to Zerobase or download the Zerobase Notification App. We
              will only use your phone number for the purpose of notifying you as to whether you are
              at risk of exposure.
            </p>
            <h2>How do I contact Zerobase?</h2>
            <p>
              You can always contact us at <a href="mailto:info@zerobase.io">info@zerobase.io</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Individuals;

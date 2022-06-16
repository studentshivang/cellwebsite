import Navsm from "./Navsm";
import Footer from "./utils/Footer";

const About = () => {
  return (
    <>
      <Navsm />
      <div className="about">About MMMUT</div>
      <div className="border1"></div>
      <div className="text1">
        <p>
          <b>Madan Mohan Malaviya University of Technology, Gorakhpur</b> has
          been established in year 2013 by the Government of Uttar Pradesh in
          the form of a non-affiliating, teaching and research University after
          reconstituting the{" "}
          <b>Madan Mohan Malaviya Engineering College, Gorakhpur</b> which was
          established in <b>1962</b>.
        </p>

        <p>
          Fifty-Four batches of students have entered its portals to emerge
          after four years of rigorous education under the tutelage of some of
          the most venerable teachers, engineers ready to face the world and
          create new worlds. The University is located in the Gorakhpur-Deoria
          road about 9 Km away from Gorakhpur Railway Station. In addition to UG
          in Civil Engineering, Chemical Engineering, Computer Science &
          Engineering, Mechanical Engineering, Electrical Engineering and
          Electronics & Communication Engineering, Information Technology,
          University also offers MCA, BBA, MBA, M.Tech, M.Sc. and Ph.D. courses
          in various specializations.
        </p>
      </div>
      <div className="vision">Vision</div>
      <div className="border2"></div>
      <div className="text2">
        <p>
          To facilitate and promote studies, research, technology incubation,
          product innovation and extension work in Science, Technology and
          Management Education, and also to achieve excellence in higher
          technical education.
        </p>
      </div>
      <div className="mission">Mission</div>
      <div className="border3"></div>
      <div className="text3">
        <p>
          The distinctive mission of the University is:
          <br />
          <ul>
            <br />
            <li>
              To serve society as a center of higher learning, providing
              long-term societal benefits through transmitting advanced
              knowledge, discovering new knowledge and functioning as an active
              working repository of organized knowledge.
            </li>
            <br />
            <li>
              To take leadership role by providing need-based programs in
              engineering and technology, applied sciences, management,
              humanities, architecture, pharmacy, retail and fashion design,
              mass-communication, agriculture and other employable courses in
              emerging areas.
            </li>
            <br />
            <li>
              To promote compassionate care of the highest quality that
              translates new knowledge into meaningful improvements in
              technological outcomes through interdisciplinary collaboration,
              fiscal responsibility, support of diversity, a focus on quality
              and a culture of professionalism.
            </li>
            <br />
            <li>
              To establish value creating networks and foster relationship with
              other leading institutes of higher learning and research, alumni
              and industries in order to provide significant contribution to
              national and international development.
            </li>
            <br />
            <li>
              To create an intellectually stimulating Infrastructure and
              conducive environment for technology research, scholarship,
              creativity, innovation, entrepreneurship, and professional
              activity for service to community and economy.
            </li>
          </ul>
        </p>
      </div>

      <div className="loc">Location & Campus</div>
      <div className="border4"></div>
      <div className="text4">
        <p>
          The University has a lush green campus that spreads over a vast area
          of 354 acres. As you enter its gate, the first sight that greets you
          is the colour green. Malaviya's wooded acreages, a mere seven
          kilometres away from the holy city of Gorakhpur, provide the perfect
          element for the perfect engineer. The University is located on
          Gorakhpur-Deoria road, about 9 kilometres from Gorakhpur Railway
          Station as well as from main Gorakhpur Roadways bus-station.
        </p>
      </div>

      <div className="map">Map</div>
      <div className="border5"></div>
      <div className="text5"></div>

      <div className="campus">Campus Tour Video</div>
      <div className="border6"></div>

      <div class="video">
        <iframe
          class="center-video"
          width="560"
          height="315"
          src=" https://www.youtube.com/embed/SpMVPPIl8x0"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="text6">Campus Tour, MMMUT, Gorakhpur</div>

      <Footer />
    </>
  );
};

export default About;

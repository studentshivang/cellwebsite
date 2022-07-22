import Navsm from "../Navbar/Navsm";
import Footer from "../utils/Footer";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const MapLink =
  "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d28503.809625394093!2d83.39001803139882!3d26.745135474779886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3991448b28fcff5b%3A0xd3af5c574cc2d6d2!2sGorakhpur%20Junction%20railway%20station%2C%20Kawwa%20Bagh%20Colony%2C%20Gorakhpur%2C%20Uttar%20Pradesh!3m2!1d26.7596246!2d83.3817701!4m5!1s0x39915ca3e2aa136b%3A0xc039bdf0211338a9!2sMadan%20Mohan%20Malaviya%20University%20Of%20Technology%2C%20Deoria%20Road%2C%20Singhariya%2C%20Kunraghat%2C%20Gorakhpur%2C%20Uttar%20Pradesh%20273016!3m2!1d26.731429499999997!2d83.43312759999999!5e0!3m2!1sen!2sin!4v1605951732141!5m2!1sen!2sin";

const About = () => {
  const { scrollYProgress } = useScroll();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView, animation]);

  return (
    <>
      <Navsm />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>

      <div>
        <div className="about ms-3 ms-md-5 ms-lg-5">About MMMUT</div>
        <div className="border1 ms-3 ms-md-5 ms-lg-5"></div>

        <div className="text1 mx-auto">
          <p className="pTag">
            <b>Madan Mohan Malaviya University of Technology, Gorakhpur</b> has
            been established in year 2013 by the Government of Uttar Pradesh in
            the form of a non-affiliating, teaching and research University
            after reconstituting the{" "}
            <b>Madan Mohan Malaviya Engineering College, Gorakhpur</b> which was
            established in <b>1962</b>.
          </p>

          <p>
            Fifty-Four batches of students have entered its portals to emerge
            after four years of rigorous education under the tutelage of some of
            the most venerable teachers, engineers ready to face the world and
            create new worlds. The University is located in the Gorakhpur-Deoria
            road about 9 Km away from Gorakhpur Railway Station. In addition to
            UG in Civil Engineering, Chemical Engineering, Computer Science &
            Engineering, Mechanical Engineering, Electrical Engineering and
            Electronics & Communication Engineering, Information Technology,
            University also offers MCA, BBA, MBA, M.Tech, M.Sc. and Ph.D.
            courses in various specializations.
          </p>
        </div>

        <div className="vision ms-3 ms-md-5 ms-lg-5">Vision</div>
        <div className="border2 ms-3 ms-md-5 ms-lg-5"></div>
        <motion.div className="text2 mx-auto">
          <p>
            To facilitate and promote studies, research, technology incubation,
            product innovation and extension work in Science, Technology and
            Management Education, and also to achieve excellence in higher
            technical education.
          </p>
        </motion.div>

        <div className="mission ms-3 ms-md-5 ms-lg-5">Mission</div>
        <div className="border3 ms-3 ms-md-5 ms-lg-5"></div>
        <div className="text3 mx-auto">
          <p>
            The distinctive mission of the University is:
            <br />
            <ul>
              <br />
              <motion.li
                initial={{ opacity: 0, translateX: -40 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                To serve society as a center of higher learning, providing
                long-term societal benefits through transmitting advanced
                knowledge, discovering new knowledge and functioning as an
                active working repository of organized knowledge.
              </motion.li>
              <br />
              <motion.li
                initial={{ opacity: 0, translateX: -40 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                To take leadership role by providing need-based programs in
                engineering and technology, applied sciences, management,
                humanities, architecture, pharmacy, retail and fashion design,
                mass-communication, agriculture and other employable courses in
                emerging areas.
              </motion.li>
              <br />
              <motion.li
                initial={{ opacity: 0, translateX: -40 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                To promote compassionate care of the highest quality that
                translates new knowledge into meaningful improvements in
                technological outcomes through interdisciplinary collaboration,
                fiscal responsibility, support of diversity, a focus on quality
                and a culture of professionalism.
              </motion.li>
              <br />
              <motion.li
                initial={{ opacity: 0, translateX: -40 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.2, delay: 0.8 }}
              >
                To establish value creating networks and foster relationship
                with other leading institutes of higher learning and research,
                alumni and industries in order to provide significant
                contribution to national and international development.
              </motion.li>
              <br />
              <motion.li
                initial={{ opacity: 0, translateX: -40 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.2, delay: 1 }}
              >
                To create an intellectually stimulating Infrastructure and
                conducive environment for technology research, scholarship,
                creativity, innovation, entrepreneurship, and professional
                activity for service to community and economy.
              </motion.li>
            </ul>
          </p>
        </div>

        <div className="loc ms-3 ms-md-5 ms-lg-5">Location & Campus</div>
        <div className="border4 ms-3 ms-md-5 ms-lg-5"></div>
        <motion.div className="text4 mx-auto">
          <p>
            The University has a lush green campus that spreads over a vast area
            of 354 acres. As you enter its gate, the first sight that greets you
            is the colour green. Malaviya's wooded acreages, a mere seven
            kilometres away from the holy city of Gorakhpur, provide the perfect
            element for the perfect engineer. The University is located on
            Gorakhpur-Deoria road, about 9 kilometres from Gorakhpur Railway
            Station as well as from main Gorakhpur Roadways bus-station.
          </p>
        </motion.div>

        <div className="map ms-3 ms-md-5 ms-lg-5">Map</div>
        <div className="border5 ms-3 ms-md-5 ms-lg-5"></div>
        <div className="mapFrame">
          <iframe
            title="Map"
            src={MapLink}
            height="450"
            frameborder="0"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
            width="94%"
            className="col-10"
          ></iframe>
        </div>

        <div className="campus ms-3 ms-md-5 ms-lg-5">Campus Tour Video</div>
        <div className="border6 ms-3 ms-md-5 ms-lg-5"></div>
      </div>

      <div ref={ref}>
        <motion.div class="video" animate={animation}>
          <iframe
            class="center-video"
            width="560"
            height="315"
            src=" https://www.youtube.com/embed/SpMVPPIl8x0"
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </motion.div>
      </div>
      <div className="text6">Campus Tour, MMMUT, Gorakhpur</div>

      <Footer />
    </>
  );
};

export default About;

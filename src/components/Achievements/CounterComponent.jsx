import Counter from "./Counter";
import { motion } from "framer-motion";
import "./achievements.css";

const CounterComponent = () => {
  return (
    <>
      <div className="counter-row">
        <div className="row-1">
          <motion.div
            className="quadrant-1"
            initial={{ opacity: 0, translateX: -40 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <Counter end={985} title={" Offers"} />
          </motion.div>
          <motion.div
            className="quadrant-1"
            initial={{ opacity: 0, translateX: -40 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
          >
            <Counter end={100} suffix={"+"} title={"Companies Visited"} />
          </motion.div>
        </div>
        <div className="row-2">
          <motion.div
            className="quadrant-1"
            initial={{ opacity: 0, translateX: -40 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.2, delay: 0.6 }}
          >
            <Counter
              end={50}
              suffix={" LPA"}
              title={"Highest Package Offered"}
            />
          </motion.div>
          <motion.div
            className="quadrant-1"
            initial={{ opacity: 0, translateX: -40 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.2, delay: 0.8 }}
          >
            <Counter
              end={7}
              suffix={" LPA"}
              title={"Average Package Offered"}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CounterComponent;

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function Block({ children }) {
  const control = useAnimation();

  return (
    <motion.div
      className="box"
      variants={boxVariant}
      initial="hidden"
      animate={control}
      onViewportEnter={() => control.start("visible")}
      onViewportLeave={() => control.start("hidden")}
      style={{ paddingBottom: "8rem" }}
    >
      <div style={{ width: "100%", height: "100%", padding: "2rem" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "2rem",
            borderRadius: "2rem",
            backgroundColor: "rgba(255,255,255,0.3)",
            boxShadow: "4px 2px 32px 1px rgba(0,0,0,0.5)",
          }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}

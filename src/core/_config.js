import ns from "ns";

const Cfg = {
  APP: ns.namespace,
  CSS: ns.cssPrefix,

  titleLsi: {
    cs: "Půjčovna traktorů",
    en: "Rent a tractor"
  }
};

Cfg.CCRKEY_SPA_AUTHENTICATED = Cfg.APP + ".Page";

export default Cfg;

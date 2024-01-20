const controller = new ScrollMagic.Controller();

const exploreScene = new ScrollMagic.Scene({
  triggerElement: ".Lamborghini-exp",
  triggerHook: 0.5,
})
  .addIndicators({ colorStart: "white", colorTrigger: "white" })
  .setClassToggle(".Lamborghini-exp","active")
  .addTo(controller);

console.log("loop4.js loaded");

let BodyAnim = gsap.to(
  "#BODY",
  {
      duration: 1.75,
    
      y: -5,
      scale: 1.05,
      yoyo: true,   
      svgOrigin:"250 250",

      repeat:-1,
      ease:Linear.easeNone
  }
);

let ZAnim = gsap.to(
  "#ZZZ",
  {
      duration: 3,
      scale: 1.2,
      y: -2,
      yoyo: true,   
      svgOrigin:"250 250",
      
      repeat:-1,
      ease:Linear.easeNone
  }
);

let Hand_BAnim = gsap.to(
  "#Hand_B",
  {
      duration: 1.75,
      x: 5,
      
      yoyo: true,   
      svgOrigin:"250 250",

      repeat:-1,
      ease:Linear.easeNone
  }
);
let Hand_FAnim = gsap.to(
  "#Hand_F",
  {
      duration: 1.75,
      x: -6,
            yoyo: true,   
      svgOrigin:"250 250",

      repeat:-1,
      ease:Linear.easeNone
  }
);
let MouthAnim = gsap.to(
  "#MOUTH",
  {
    duration: 1.75,
     y:-2,
 yoyo: true,
      repeat:-1,
      ease:Linear.easeNone
  }
);


import * as PIXI from "pixi.js";

class TextStyles {
  constructor(renderer) {
    this.renderer = renderer;
  }

  getTextObject(options, style) {
    let title = new PIXI.Text(options.textValue, style);
    if (options.x === "center") {
      title.x = this.renderer.width / 2 - title.width / 2;
    } else {
      title.x = options.x;
    }
    if (options.y === "center") {
      title.y = this.renderer.height / 2 - title.height / 2;
    } else {
      title.y = options.y;
    }
    return title;
  }

  introText() {
    let title = this.getTextObject(
      {
        textValue: "Welcome to Mortal Kombat Prodigious",
        x: 10,
        y: "center",
        vx: 2,
        vy: 0
      },
      this.introStyle()
    );
    return title;
  }

  introStyle() {
    let titleStyle = new PIXI.TextStyle({
      fontFamily: "mk",
      fontSize: 36,
      fill: ["#ffffff", "#00ff99"], // gradient
      stroke: "#4a1850",
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440
    });

    return titleStyle;
  }
}

export default TextStyles;

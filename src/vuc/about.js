import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";

import "./about.less"

export default React.createClass({

  mixins:[
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.RouteMixin
  ],

  statics:{
    tagName:Cfg.APP + ".About",
    classNames:{
      main:Cfg.CSS + "-about"
    }
  },

  render(){
    return (
      <UU5.Bricks.Div {...this.getMainPropsToPass()}>
        <UU5.Bricks.Header level={2}>O Půjčovně</UU5.Bricks.Header>
        <UU5.Bricks.Paragraph />
      </UU5.Bricks.Div>
    );
  }
});

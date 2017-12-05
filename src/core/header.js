import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "./_config.js";

import "./header.less"

export default React.createClass({

    //@@viewOn:mixins
    mixins:[
        UU5.Common.BaseMixin,
        UU5.Common.ElementaryMixin,
        UU5.Common.CcrReaderMixin
    ],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics:{
        tagName:Cfg.APP + ".Header",
        classNames:{
            main:Cfg.CSS + "-header"
        },
        lsi: {
            list:{
                cs: "Seznam traktorů",
                en: "Tractor list"
            },
            tractorStk: {
                cs: "Vozidla na kontrolu",
                en: "Cars to control"
            },
            lendList: {
                cs: "Seznam zápujček",
                en: "Lend list"
            },
            about: {
                cs: "O půjčovně",
                en: "About"
            }
        }
    },
    //@@viewOff:statics

    //@@viewOn:componentSpecificHelpers
    _handleLinkClick(link) {
        this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(link.props.href)
    },
    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render(){
        return (
            <UU5.Bricks.Div {...this.getMainPropsToPass()}>
              <UU5.Bricks.Header level={1}>{this.getLSIItem(Cfg.titleLsi)}</UU5.Bricks.Header>

              <nav>
                <UU5.Bricks.Link href="/" onClick={this._handleLinkClick}>{this.getLSIValue("list")}</UU5.Bricks.Link>
                  <UU5.Bricks.Link href="/cars/tractor-stk-list" onClick={this._handleLinkClick}>{this.getLSIValue("tractorStk")}</UU5.Bricks.Link>
                <UU5.Bricks.Link href="/lends" onClick={this._handleLinkClick}>{this.getLSIValue("lendList")}</UU5.Bricks.Link>
                <UU5.Bricks.Link href="/about" onClick={this._handleLinkClick}>{this.getLSIValue("about")}</UU5.Bricks.Link>
              </nav>
            </UU5.Bricks.Div>
        );
    }
    //@@viewOff:render
});

import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "./_config.js";

import TractorList from "../vuc/tractor-list.js"
import LendDetail from "../vuc/lend-detail.js"
import TractorStkList from "../vuc/tractor-stk-list.js"
import LendList from "../vuc/lend-list.js"
import About from "../vuc/about.js"
import TractorDetail from "../vuc/tractor-detail.js"
import TractorRepairsList from "../vuc/tractor-repairs-list.js"
import TractorLendsList from "../vuc/tractor-lends-list.js"

import Header from "../core/header.js"

import "./page.less"

export default React.createClass({

    //@@viewOn:mixins
    mixins:[
        UU5.Common.BaseMixin,
        UU5.Common.ElementaryMixin
    ],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics:{
        tagName: Cfg.APP + ".Page",
        classNames:{
            main: Cfg.CSS + "-page"
        }
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle
    componentWillMount() {
        this._changeTitle();
        UU5.Environment.EventListener.registerLsi(this.getId(), this._changeTitle);
    },

    componentWillUnmount() {
        UU5.Environment.EventListener.unregisterLsi(this.getId());
    },
    //@@viewOff:standardComponentLifeCycle

    //@@viewOn:componentSpecificHelpers
    _changeTitle() {
        document.title = this.getLSIItem(Cfg.titleLsi);
    },
    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render(){
        let routerBasePath = location.pathname.replace(/(\/.*?\/.*?)\/.*/, "$1");

        return (
            <UU5.Bricks.Page
                top={<Header/>}
                {...this.getMainPropsToPass()}
            >
                <UU5.Common.Router
                    route="/"
                    routes={{
                        "/": {component: <TractorList />},
                        "/cars/tractor-stk-list": {component: <TractorStkList />},
                        // "/lends/lend-detail-list": {component: <LendDetail />},
                        // "/lends/tractor-detail-list": {component: <TractorDetail />},
                        // "/lends/tractor-repairs-list": {component: <TractorRepairsList />},
                        // "/lends/tractor-lends-list": {component: <TractorLendsList />},
                        "/lends": {component: <LendList />},
                        "/about": {component: <About/>}

                    }}
                    basePath={routerBasePath}
                />
            </UU5.Bricks.Page>
        );
    }
    //@@viewOff:render
});

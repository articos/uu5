import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";

import Calls from "calls"

import TractorLendsList from "./tractor-lends-list"
import TractorRepairsList from "./tractor-repairs-list"

export default React.createClass({

    //@@viewOn:mixins
    mixins: [
        UU5.Common.BaseMixin,
        UU5.Common.ElementaryMixin,
        UU5.Common.RouteMixin,
        UU5.Common.LoadMixin,
        UU5.Common.LsiMixin,
        UU5.Common.CcrReaderMixin

    ],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics: {
        tagName: Cfg.APP + ".TractorDetail",
        classNames: {
            main: Cfg.CSS + "-tractor-detail"
        },
        calls: {
            onLoad: "tractorDetail"
        }
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle

    componentWillMount() {
        this.setCalls(Calls)
    },
    //@@viewOff:standardComponentLifeCycle

    //@@viewOn:componentSpecificHelpers
    getOnLoadData() {
        return {tractorId: this.getProps("tractorId")};
    },

    _getPanelHeader() {

        return <UU5.Bricks.Div>Detail vozidla</UU5.Bricks.Div>
    },
    _handleLoadedTractorDetail(tractorDetail) {
        if (!tractorDetail || tractorDetail.length === 0) {
            return <UU5.Bricks.P>Není tu žádný detail</UU5.Bricks.P>
        }


        return (
            <UU5.Bricks.Div>
                <UU5.Bricks.P>Informace o vozidle</UU5.Bricks.P>
                <TractorLendsList tractorId={this.getProps("tractorId")} />
                <TractorRepairsList tractorId={this.getProps("tractorId")} />
            </UU5.Bricks.Div>
        )
    },
    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render() {
        return (
            <UU5.Bricks.Div>
                <UU5.Bricks.Header level={2}>Detail vozidla</UU5.Bricks.Header>

                <UU5.Bricks.Panel header={this._getPanelHeader()} alwaysExpanded={true} disableHeaderClick={true}>
                    {this.getLoadFeedbackChildren(this._handleLoadedTractorDetail)}
                </UU5.Bricks.Panel>
            </UU5.Bricks.Div>
        );
    }
    //@@viewOff:render
});
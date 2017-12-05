import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";

import Calls from "calls"

import "./about.less"

export default React.createClass({

    //@@viewOn:mixins
    mixins:[
        UU5.Common.BaseMixin,
        UU5.Common.ElementaryMixin,
        UU5.Common.RouteMixin,
        UU5.Common.LoadMixin,
        UU5.Common.LsiMixin
    ],
    //@@viewOff:mixins


    statics:{
        tagName:Cfg.APP + ".LendDetail",
        classNames:{
            main:Cfg.CSS + "-lend-detail"
        },
        calls:{
            onLoad:"lendDetail"
        }
    },
    componentWillMount(){
        this.setCalls(Calls)
    },
    getOnLoadData_() {
        return {lendId: this.getProps("lendId")};
    },

    _handleLoadedLend(lend){
        if(!lend || lend.length === 0){
            return <UU5.Bricks.P>Není tu žádna vypujcka</UU5.Bricks.P>
        }


        return <UU5.Bricks.Box>
            <UU5.Bricks.Table striped>
            <UU5.Bricks.Table.THead>
                <UU5.Bricks.Table.Tr>
                    <UU5.Bricks.Table.Th>{lend.id}</UU5.Bricks.Table.Th>
                    <UU5.Bricks.Table.Th>{lend.clientName}</UU5.Bricks.Table.Th>
                    <UU5.Bricks.Table.Th>{lend.from}</UU5.Bricks.Table.Th>
                    <UU5.Bricks.Table.Th>{lend.to}</UU5.Bricks.Table.Th>
                    <UU5.Bricks.Table.Th>{lend.price}</UU5.Bricks.Table.Th>
                </UU5.Bricks.Table.Tr>
            </UU5.Bricks.Table.THead>
            </UU5.Bricks.Table>
            </UU5.Bricks.Box>
    },

    render(){
        return (
            <UU5.Bricks.Div {...this.getMainPropsToPass()}>

                {this.getLoadFeedbackChildren(this._handleLoadedLend)}

            </UU5.Bricks.Div>
        );
    }
});
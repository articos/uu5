import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";

import Calls from "calls";

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
        tagName: Cfg.APP + ".TractorRepairsList",
        classNames: {
            main: Cfg.CSS + "-tractor-repairs-list"
        },
        calls: {
            onLoad: "tractorRepairs"

        }
    },

    getOnLoadData_() {
        return {tractorId: this.getProps("tractorId")};
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle


    componentWillMount() {
        this.setCalls(Calls)
    },
    //@@viewOff:standardComponentLifeCycle

    //@@viewOn:componentSpecificHelpers

    _getPanelHeader() {
        return <UU5.Bricks.Div>Seznam oprav na vozidle</UU5.Bricks.Div>
    },


    _handleLoadedTractors(tractorRepairs) {
        if (!tractorRepairs || tractorRepairs.length === 0) {
            return <UU5.Bricks.P>Toto vozidlo nebylo ještě nikdy opravované</UU5.Bricks.P>
        }

        let lines = tractorRepairs.map((repairs) => (
            <UU5.Bricks.Table.Tr key={repairs.id}>
                <UU5.Bricks.Table.Td>{repairs.id}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{repairs.price}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{repairs.repairResolution}</UU5.Bricks.Table.Td>

            </UU5.Bricks.Table.Tr>
        ))

        return (
            <UU5.Bricks.Table striped>
                <UU5.Bricks.Table.THead>
                    <UU5.Bricks.Table.Tr>
                        <UU5.Bricks.Table.Th>id</UU5.Bricks.Table.Th>
                        <UU5.Bricks.Table.Th>Částka za opravu</UU5.Bricks.Table.Th>
                        <UU5.Bricks.Table.Th>Opravované</UU5.Bricks.Table.Th>

                    </UU5.Bricks.Table.Tr>
                </UU5.Bricks.Table.THead>
                <UU5.Bricks.Table.TBody>
                    {lines}
                </UU5.Bricks.Table.TBody>
            </UU5.Bricks.Table>
        )
    },
    //@@viewOff:componentSpecificHelpers

    //@@viewOn:render
    render() {
        return (
            <UU5.Bricks.Div>
                <UU5.Bricks.Header level={2}>Seznam oprav na vozidle</UU5.Bricks.Header>

                <UU5.Bricks.Panel header={this._getPanelHeader()} alwaysExpanded={true} disableHeaderClick={true}>
                    {this.getLoadFeedbackChildren(this._handleLoadedTractors)}
                </UU5.Bricks.Panel>
            </UU5.Bricks.Div>
        );
    }
    //@@viewOff:render
});

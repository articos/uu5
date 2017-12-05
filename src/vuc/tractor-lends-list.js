import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";
import LendDetail from "../vuc/lend-detail";
import Calls from "calls"


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
        tagName: Cfg.APP + ".TractorLendsList",
        classNames: {
            main: Cfg.CSS + "-tractor-lends-list"
        },
        calls: {
            onLoad: "tractorLends"

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
        return <UU5.Bricks.Div>Seznam zapujcek vozidla</UU5.Bricks.Div>
    },

    _handleLinkClick(link) {
        this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(<LendDetail lendId={link}/>)
    },

    _handleLoadedTractors(tractorLends) {
        if (!tractorLends || tractorLends.length === 0) {
            return <UU5.Bricks.P>Toto vozidlo nebylo ještě nikdy zapůjčené</UU5.Bricks.P>
        }

        let lines = tractorLends.map((Lends) => (
            <UU5.Bricks.Table.Tr key={Lends.id}>
                <UU5.Bricks.Table.Td><UU5.Bricks.Link href="/detail" onClick={() => {
                    this._handleLinkClick(Lends.id)
                }}>{Lends.id}</UU5.Bricks.Link></UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{Lends.from}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{Lends.to}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{Lends.price}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{Lends.clientName}</UU5.Bricks.Table.Td>
            </UU5.Bricks.Table.Tr>
        ))

        return (
            <UU5.Bricks.Table striped>
                <UU5.Bricks.Table.THead>
                    <UU5.Bricks.Table.Tr>
                        <UU5.Bricks.Table.Th>id</UU5.Bricks.Table.Th>
                        <UU5.Bricks.Table.Th>Zapůjčeno od</UU5.Bricks.Table.Th>
                        <UU5.Bricks.Table.Th>Zapůjčeno do</UU5.Bricks.Table.Th>
                        <UU5.Bricks.Table.Th>Cena za zapůjčení</UU5.Bricks.Table.Th>
                        <UU5.Bricks.Table.Th>Zákazník</UU5.Bricks.Table.Th>
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
                <UU5.Bricks.Header level={2}>Seznam zápůjček u vozidla</UU5.Bricks.Header>

                <UU5.Bricks.Panel header={this._getPanelHeader()} alwaysExpanded={true} disableHeaderClick={true}>
                    {this.getLoadFeedbackChildren(this._handleLoadedTractors)}
                </UU5.Bricks.Panel>
            </UU5.Bricks.Div>
        );
    }
    //@@viewOff:render
});

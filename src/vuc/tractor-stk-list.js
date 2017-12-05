import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";

import Calls from "calls"

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

    //@@viewOn:statics
    statics:{
        tagName:Cfg.APP + ".TractorList",
        classNames:{
            main:Cfg.CSS + "-tractor-list"
        },
        calls:{
            onLoad:"carsForStk",
            find:"findCars"
        }
    },
    //@@viewOff:statics

    //@@viewOn:standardComponentLifeCycle
    getInitialState(){
        return {
            filtered:false
        }
    },

    componentWillMount(){
        this.setCalls(Calls)
    },
    //@@viewOff:standardComponentLifeCycle

    //@@viewOn:componentSpecificHelpers

    _getFilterForm(){
        return (
            <UU5.Forms.BasicForm ref_={this._handleFilterFormReference}>
                <UU5.Bricks.Row>
                    <UU5.Bricks.Column colWidth="lg-3">
                        <UU5.Forms.Text name="acquiredFrom" label="Od" controlled={false} value="2007-08-21" />
                    </UU5.Bricks.Column>
                    <UU5.Bricks.Column colWidth="lg-3">
                        <UU5.Forms.Text name="acquiredTo" label="Do" controlled={false} value="2007-08-23"/>
                    </UU5.Bricks.Column>

                    <UU5.Bricks.Column colWidth="lg-6">
                        <UU5.Bricks.Button content="Filtruj" onClick={this._handleFilterClick}/>
                        <UU5.Bricks.Button
                            colorSchema="warning"
                            disabled={!this.state.filtered}
                            content="Zruš filtr"
                            onClick={this._handleCancelFilter}
                        />
                    </UU5.Bricks.Column>
                </UU5.Bricks.Row>
            </UU5.Forms.BasicForm>
        );
    },

    _getPanelHeader(){


        return <UU5.Bricks.Div>Seznam vozidel k STK</UU5.Bricks.Div>
    },

    _handleFilterFormReference(form){
        this._filterForm = form
    },

    _handleCancelFilter(){
        this.setState({
            loadFeedback:"loading",
            filtered:false
        }, () => this.reload())
    },

    _handleCarDetail(){

        return <UU5.Bricks.Box>Ahoj</UU5.Bricks.Box>

    },

    _handleFilterClick(){
        this.setState({
            loadFeedback:"loading"
        }, () =>{
            this.getCall("find")({
                data:this._filterForm.getValues(),
                done:(data) =>{
                    this.setState({
                        dtoOut:data,
                        loadFeedback:"ready",
                        filtered:true
                    })
                },
                fail:(response) => console.error(response)
            })
        })
    },

    _handleLoadedTractors(tractors){
        if(!tractors || tractors.length === 0){
            return <UU5.Bricks.P>Není tu žádný traktor</UU5.Bricks.P>
        }

        let lines = tractors.map((tractor) => (
            <UU5.Bricks.Table.Tr key={tractor.id}>
                <UU5.Bricks.Table.Td>{tractor.id}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{tractor.type}</UU5.Bricks.Table.Td>
                <UU5.Bricks.Table.Td>{tractor.vin}</UU5.Bricks.Table.Td>
            </UU5.Bricks.Table.Tr>
        ));

        return (
            <UU5.Bricks.Table striped>
                <UU5.Bricks.Table.THead>
                    <UU5.Bricks.Table.Tr>
                        <UU5.Bricks.Table.Th>id</UU5.Bricks.Table.Th>
                        <UU5.Bricks.Table.Th>type</UU5.Bricks.Table.Th>
                        <UU5.Bricks.Table.Th>vin</UU5.Bricks.Table.Th>
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
    render(){
        return (
            <UU5.Bricks.Div>
                <UU5.Bricks.Header level={2}>Seznam traktorů (vozidel)</UU5.Bricks.Header>

                <UU5.Bricks.Panel header={this._getPanelHeader()} alwaysExpanded={true} disableHeaderClick={true}>
                    {this._getFilterForm()}

                    {this.getLoadFeedbackChildren(this._handleLoadedTractors)}
                </UU5.Bricks.Panel>
            </UU5.Bricks.Div>
        );
    }
    //@@viewOff:render
});

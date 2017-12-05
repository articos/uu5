webpackHotUpdate_name_(0,{

/***/ "./vuc/lend-detail.js":
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./vuc/lend-detail.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _uu5g = __webpack_require__(/*! uu5g04 */ 1);

var UU5 = _interopRequireWildcard(_uu5g);

var _config = __webpack_require__(/*! ../core/_config.js */ "./core/_config.js");

var _config2 = _interopRequireDefault(_config);

var _calls = __webpack_require__(/*! calls */ "./calls.js");

var _calls2 = _interopRequireDefault(_calls);

__webpack_require__(/*! ./about.less */ "./vuc/about.less");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: "lend-detail",


    //@@viewOn:mixins
    mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin, UU5.Common.RouteMixin, UU5.Common.LoadMixin, UU5.Common.LsiMixin],
    //@@viewOff:mixins


    statics: {
        tagName: _config2.default.APP + ".LendDetail",
        classNames: {
            main: _config2.default.CSS + "-lend-detail"
        },
        calls: {
            onLoad: "lendDetail"
        }
    },
    componentWillMount: function componentWillMount() {
        this.setCalls(_calls2.default);
    },
    getOnLoadData_: function getOnLoadData_() {
        return { lendId: this.getProps("lendId") };
    },
    _handleLoadedLend: function _handleLoadedLend(lend) {
        if (!lend || lend.length === 0) {
            return _react2.default.createElement(
                UU5.Bricks.P,
                null,
                "Nen\xED tu \u017E\xE1dna vypujcka"
            );
        }

        return _react2.default.createElement(
            UU5.Bricks.Table,
            { striped: true },
            _react2.default.createElement(
                UU5.Bricks.Table.THead,
                null,
                _react2.default.createElement(
                    UU5.Bricks.Table.Tr,
                    null,
                    _react2.default.createElement(
                        UU5.Bricks.Table.Th,
                        null,
                        lend.id
                    ),
                    _react2.default.createElement(
                        UU5.Bricks.Table.Th,
                        null,
                        lend.clientName
                    ),
                    _react2.default.createElement(
                        UU5.Bricks.Table.Th,
                        null,
                        lend.from
                    ),
                    _react2.default.createElement(
                        UU5.Bricks.Table.Th,
                        null,
                        lend.to
                    ),
                    _react2.default.createElement(
                        UU5.Bricks.Table.Th,
                        null,
                        lend.price
                    )
                )
            )
        );
    },
    render: function render() {
        return _react2.default.createElement(
            UU5.Bricks.Div,
            this.getMainPropsToPass(),
            this.getLoadFeedbackChildren(this._handleLoadedLend)
        );
    }
});

/***/ })

})
//# sourceMappingURL=0.a53f8247780f13a2cf30.hot-update.js.map
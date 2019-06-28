"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Games =
/*#__PURE__*/
function () {
  function Games() {
    _classCallCheck(this, Games);

    this.list = [];
  }

  _createClass(Games, [{
    key: "getAllDataList",
    value: function getAllDataList() {
      return this.list;
    }
  }, {
    key: "getGameData",
    value: function getGameData(name) {
      return this.list.find(function (game) {
        return game.getName() === name;
      });
    }
  }, {
    key: "getNameList",
    value: function getNameList() {
      return this.list.map(function (game) {
        return {
          name: game.getName(),
          piecesStock: game.getPiece(),
          status: game.getStatus()
        };
      });
    }
  }, {
    key: "destroyGame",
    value: function destroyGame(name) {
      var index = this.list.findIndex(function (game) {
        return game.getName() === name;
      });
      this.list.splice(index, 1);
    }
  }, {
    key: "udpdateData",
    value: function udpdateData(name, dataName, data) {
      var login = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var index = this.list.findIndex(function (game) {
        return game.getName() === name;
      });

      if (index !== -1) {
        switch (dataName) {
          case 'status':
            this.list[index].setStatus(data);

          default:
            break;
        }

        console.log('list before', this.list[index].getPlayersNb());

        if (this.list[index].getStatus() === 3) {
          this.list[index].deleteUser(login);
        }

        console.log('list after', this.list[index].getPlayersNb());

        if (!this.list[index].getPlayersNb()) {
          this.destroyGame(name);
        }
      }
    }
  }, {
    key: "addGame",
    value: function addGame(name) {
      this.list.push(name);
    }
  }, {
    key: "removeGame",
    value: function removeGame(name) {
      var index = this.list.findIndex(function (game) {
        return game.getName() === name;
      });
      this.list.slice(index, 1);
    }
  }]);

  return Games;
}();

exports["default"] = Games;
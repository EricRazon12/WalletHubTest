require(['angularAMD'], function (angularAMD) {
    angularAMD.factory('value_provider', function () {
        var _value = ''
        return {
            GetValue: function () { return _value; },
            SetValue: function (_val) { _value = _val }
        }
    })

});
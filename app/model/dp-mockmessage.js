/**
 * Created by guomiaoyou on 2017/1/21.
 */


'use strict'


module.exports = (function () {
    function createMockDataMessageObject(file, api, path, content) {
        const model = {
            'message': 'mockData',
            'data': {
                'mockList': [
                    {
                        'file': file,
                        'api': api,
                        'path': path,
                        'content': content,
                    },
                ],
            },
        }

        return model;
    }

    function createMockModulesMessageObject(modules) {
        var json  = {
            'message': 'mockModule',
            'data': {
                'modules': [
                ],
            },
        }
        json.data.modules = modules
    }

    return {
        createMockDataMessageObject: createMockDataMessageObject,
        createMockModulesMessageObject: createMockModulesMessageObject
    }
}())
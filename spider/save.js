const NovelModel = require('./db').NovelModel;



module.exports = function (items, callback) {

    NovelModel.remove({}, function(error){
        NovelModel.create(items, function(error, doc){
            callback();
        });
    });

};
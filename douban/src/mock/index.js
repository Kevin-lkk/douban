

           var Mock = require('mockjs');
           //配置数据请求
           Mock.mock('/mm','get',require("./json/data.json"));
           Mock.mock('/gege','get',require("./json/mdy.json"));
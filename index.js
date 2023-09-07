// let mock_test = require("./test");
module.exports = () => {
    const data = {};
    let arr = [];
    // 获取文件夹下的数据
    const fs = require("fs");
    // 文件夹路径
    const dir = "./data/";
    // 列出该文件夹下所有文件
    let files = fs.readdirSync(dir);
    files.forEach((file, index) => {
      arr[index] = require(dir + file);
    });
  
    // 检测是否存在不同文件有相同名称
    getSameName(arr);
  
    arr.forEach((element) => {
      let keys = Object.keys(element);
      keys.forEach((item) => {
        data[item] = element[item];
      });
    });
  
    return data;
  };
  
  function getSameName(arr) {
    // 获取文件夹下的数据
    const fs = require("fs");
    // 文件夹路径
    const dir = "./data/";
    // 列出该文件夹下所有文件
    let files = fs.readdirSync(dir);
    let twoArr = [];
    if (files.length > 1) {
      arr.forEach((item, index) => {
        let keys = Object.keys(item);
        twoArr[index] = keys;
      });
      twoArr.forEach((item, index) => {
        for (let i = 0; i < item.length; i++) {
          for (let j = index + 1; j < twoArr.length; j++) {
            if (twoArr[j].indexOf(item[i]) > 0) {
              console.log(
                "不同文件有相同名称，名称为  " +
                  item[i] +
                  "  文件包含的  " +
                  files[index] +
                  "  " +
                  files[j]
              );
            }
          }
        }
      });
    }
  }
  
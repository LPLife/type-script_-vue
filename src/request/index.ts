/**
 * 获取列表数据
 */
function getLists() {
    return new Promise((resolve, reject) => {
        let res: any = localStorage.getItem('lists')
            ? JSON.parse(localStorage.getItem('lists') as any)
            : [];
        resolve(res.reverse());
    });
}
/**
 *删除
 * @param item
 */
function deleteData(item: any) {
    return new Promise((resolve, reject) => {
        let res: any = localStorage.getItem('lists')
            ? JSON.parse(localStorage.getItem('lists') as any)
            : [];
        for (const i in res) {
            if (res[i].id === item.id) {
                res.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('lists', JSON.stringify(res));
        resolve();
    });
}
/**
 * 唯一标识是后端生成的，这里简单实用id处理
 * @param item
 */

/**
 * 修改
 * @param item
 */
function modifyData(item: any) {
    console.log(item);
    return new Promise((resolve, reject) => {
        let res: any = localStorage.getItem('lists')
            ? JSON.parse(localStorage.getItem('lists') as any)
            : [];
        for (const i in res) {
            if (res[i].id === item.id) {
                res[i] = item;
                break;
            }
        }
        localStorage.setItem('lists', JSON.stringify(res));
        resolve();
    });
}
/**
 * 添加
 * @param item
 */
function addDate(item: any) {
    return new Promise((resolve, reject) => {
        let res: any = localStorage.getItem('lists')
            ? JSON.parse(localStorage.getItem('lists') as any)
            : [];
        item.id = Math.floor(Math.random() * 1000);
        res.push(item);
        localStorage.setItem('lists', JSON.stringify(res));
        resolve();
    });
}
let request = {
    getLists,
    addDate,
    modifyData,
    deleteData
};

export default request;

import React from 'react';
import Handsontable from 'handsontable'
import 'handsontable/dist/handsontable.full.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.hotContainer = React.createRef();
    this.hotInstance = null;
  }
  componentDidMount() {
    // const data = [
    //   { riqi: '2017-01', address: '北京', goods: '冰箱', price: '3399', sales: 530, del: '' },
    //   { riqi: '2017-01', address: '天津', goods: '空调', price: '4299', sales: 522, del: '' },
    //   { riqi: '2017-01', address: '上海', goods: '洗衣机', price: '1299', sales: 544, del: '' },
    //   { riqi: '2017-01', address: '广州', goods: '彩电', price: '4599', sales: 562, del: '' },
    //   { riqi: '2017-01', address: '深圳', goods: '热水器', price: '1099', sales: 430, del: '' },
    //   { riqi: '2017-02', address: '重庆', goods: '笔记本电脑', price: '4999', sales: 666, del: '' },
    //   { riqi: '2017-02', address: '厦门', goods: '油烟机', price: '2899', sales: 438, del: '' },
    //   { riqi: '2017-02', address: '青岛', goods: '饮水机', price: '899', sales: 620, del: '' },
    //   { riqi: '2017-02', address: '青岛', goods: '饮水机', price: '899', sales: 620, del: '' },
    //   { riqi: '2017-02', address: '青岛', goods: '饮水机', price: '899', sales: 620, del: '' },
    //   { riqi: '2017-02', address: '青岛', goods: '饮水机', price: '899', sales: 620, del: '' },
    //   { riqi: '2017-02', address: '青岛', goods: '饮水机', price: '899', sales: 620, del: '' },
    //   { riqi: '2017-02', address: '大连', goods: '手机', price: '1999', sales: 500, del: '' },
    //   { riqi: '2017-02', address: '大连', goods: '手机', price: '1999', sales: 500, del: '' },
    //   { riqi: '2017-02', address: '大连', goods: '手机', price: '1999', sales: 500, del: '' },
    //   { riqi: '2017-02', address: '大连', goods: '手机', price: '1999', sales: 500, del: '' },
    //   { riqi: '2017-02', address: '大连', goods: '手机', price: '1999', sales: 500, del: '' },
    //   { riqi: '2017-02', address: '大连', goods: '手机', price: '1999', sales: 500, del: '' },
    //   { riqi: '2017-02', address: '大连', goods: '手机', price: '1999', sales: 500, del: '' },
    //   { riqi: '2017-02', address: '大连', goods: '手机', price: '1999', sales: 500, del: '' },
    //   { riqi: '2017-02', address: '大连', goods: '手机', price: '1999', sales: 500, del: '' },
    //   { riqi: '2017-02', address: '大连', goods: '手机', price: '1999', sales: 500, del: '' },
    //   { riqi: '2017-02', address: '大连', goods: '手机', price: '1999', sales: 500, del: '' },
    // ];
    this.hotInstance = new Handsontable(this.hotContainer.current, {
      data: Handsontable.helper.createSpreadsheetData(100, 50), // 数据源 Handsontable.helper.createSpreadsheetData(100, 50)
      licenseKey: 'non-commercial-and-evaluation',
      colHeaders: true,
      // colHeaders: [
      //   "日期",
      //   "地址",
      //   "商品",
      //   "价格",
      //   "销售量",
      //   "总价",
      // ], // 也可以使用布尔值控制是否显示
      rowHeaders: true, // 是否显示行标题
      width: 1000,
      height: 320,
      rowHeights: 30,  // 行高
      colWidths: 100, // 列宽
      contextMenu: true, //启用右键菜单
      autoColumnSize: false, // 自适应列宽
      columnSorting: true,
      fixedRowsTop: 2, // 固定行
      fixedColumnsLeft: 2, // 固定列
      manualColumnResize: true, // 是否手动调整列的大小
      manualRowResize: true, // 是否手动调整行的大小
      manualColumnMove: true, // 是否开启手动移动列
      manualRowMove: true,  // 是否开启手动移动行
      // minSpareCols: 1, //列留白 因为插件本身有一个ctrl+z 撤销有bug的问题，解决的办法是加一列，这样能撤销当前单元格的事件，但是不能撤销一次行为！
      // currentRowClassName: ''
    })
  }
  changeColWidth = () => {
    this.hotInstance.updateSettings({
      colWidths: 200
    })
  }
  sortColumn = () => {
    console.log(this.hotInstance.sortingEnabled)
    this.hotInstance.sort(1, true / false); //true为升序，false为降序
  }
  render() {
    return (
      <div style={{ width: '100%' }}>
        <button onClick={this.changeColWidth}>点击列宽变宽</button>
        <button onClick={this.sortColumn}>试试排序</button>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div style={{ overflow: 'auto', display: 'flex', justifyContent: 'center', paddingTop: 20 }}>
            <div ref={this.hotContainer} />
          </div>
        </div>
      </div>

    )
  }
}

export default App;

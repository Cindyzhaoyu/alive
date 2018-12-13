// import React from 'react';
// // import videojs from 'video.js';
// import './index.less';

// class VideoContent extends React.Component {
//   componentDidMount() {
//     // var myPlayer = videojs('my-player');
//     // videojs('my-player').ready(function() {
//     //   var myPlayer = this;
//     //   myPlayer.play();
//     // });
//   }
//   render() {
//     return (
//       <div className="alive-video">
//         <video
//           id="video"
//           data-niu="true"
//           webkit-playsinline="true"
//           playsinline="true"
//           preload="meta"
//           style={{ background: '#000', width: '100%' }}
//           poster="https://aliimg.changba.com/cache/photo/848631087_640_640.jpg"
//           x-webkit-airplay="allow"
//           src="http://qiniuuwmp3.changba.com/1058687148.mp4"
//           controls="controls"
//         />
//       </div>
//     );
//   }
// }

// export default VideoContent;

import React from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import 'antd/dist/antd.css';
import './index.less';

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  });
}
const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    // debugger;
    return (
      <EditableContext.Consumer>
        {form => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: `Please Input ${title}!`
                      }
                    ],
                    initialValue: record[dataIndex]
                  })(this.getInput())}
                </FormItem>
              ) : (
                restProps.children
              )}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

let dataIndex = [];
class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data, editingKey: '' };
    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '25%',
        editable: true
      },
      {
        title: 'age',
        dataIndex: 'age',
        width: '15%',
        editable: true
      },
      {
        title: 'address',
        dataIndex: 'address',
        width: '40%',
        editable: true
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) => {
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <a
                        onClick={() => this.save(form, record.key)}
                        style={{ marginRight: 8 }}
                      >
                        Save
                      </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                    title="Sure to cancel?"
                    onConfirm={() => this.cancel(record.key)}
                  >
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
              ) : (
                <a onClick={() => this.edit(record.key, record)}>Edit</a>
              )}
            </div>
          );
        }
      }
    ];
  }

  isEditing = record => {
    const { editingKey } = this.state;
    let editing;
    data.map((ele, i) => {
      if (record.key === ele.key) {
        editing = editingKey[i];
      }
      return editing;
    });
    return editing;
  };

  cancel = key => {
    data.map((ele, i) => {
      if (ele.key === key) {
        dataIndex[i] = '';
      }
      return dataIndex;
    });
    this.setState({ editingKey: dataIndex });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => {
        return key === item.key;
      });
      data.map((ele, i) => {
        if (+ele.key === +index) {
          dataIndex[i] = false;
        }
        return dataIndex;
      });
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        this.setState({ data: newData, editingKey: dataIndex });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: dataIndex });
      }
    });
  }

  edit(key, i) {
    data.map((ele, i) => {
      if (+ele.key === +key) {
        dataIndex[i] = true;
      }
      return dataIndex;
    });

    this.setState({ editingKey: dataIndex });
  }

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => {
          return {
            record,
            inputType: col.dataIndex === 'age' ? 'number' : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: this.isEditing(record)
          };
        }
      };
    });

    return (
      <Table
        components={components}
        bordered
        dataSource={this.state.data}
        columns={columns}
        rowClassName="editable-row"
      />
    );
  }
}

export default EditableTable;

// ReactDOM.render(<EditableTable />, mountNode);

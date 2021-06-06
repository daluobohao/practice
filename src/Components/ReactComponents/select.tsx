import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;
class TestSelect extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            open: false,
        }
    }
    handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    }
    handleFocus = () => {
        this.setState({
            open: true
        })
    }
    handleBlur = (e: any) => {
        this.setState({
            open: false
        })
    }
    render() {
        const { open } = this.state
        const children = [];
        for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        return (
            <div id='area'>
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue={['a11', 'c12']}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    open={open}
                    // showSearch
                    // getPopupContainer={() => document.getElementById('area') as any}

                >
                {children}
            </Select>
            </div>
        )
    }
}

export default TestSelect;
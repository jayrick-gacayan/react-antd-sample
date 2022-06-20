import React, { Component } from 'react';
import { Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';

class StudentContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchText: '',
            searchColumn: '',
            schools: props.schools,
            students: props.students
        };

        this.searchInput = React.createRef();

        this.handleSearch = this.handleSearch.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){

    }

    handleSearch = (selectedKeys, confirm, dataIndex ) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchColumn: dataIndex,
        });

        
    }
    
    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({
            searchText: ''
        });
    }

    render(){
    
        const btnwidthSearch = { width: 90 };
        const { Header, Content, Footer } = Layout;

        const getColumnSearchProps = (dataIndex) => ({
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <Input ref={ this.searchInput }
                        placeholder={ `Search ${dataIndex}` }
                        value={ selectedKeys[0] }
                        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        style={{ marginBottom: 8, display: 'block' }}
                    />
                    <Space>
                        <Button type="primary"
                            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                            icon={<SearchOutlined />}
                            size="small"
                            style={ btnwidthSearch }>Search
                        </Button>
                        <Button size="small"
                            onClick={() => clearFilters && this.handleReset(clearFilters)}
                            style={ btnwidthSearch }>Reset
                        </Button>
                        <Button type="link"
                            size="small"
                            onClick={() => {
                                    confirm({ closeDropdown: false });
                                    this.setState({
                                        searchText: selectedKeys[0],
                                        searchColumn: dataIndex
                                    });
                                }}>Filter
                        </Button>
                    </Space>
                </div>
            ),
            filterIcon: (filtered) => (
                <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
            ),
            onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible) => {
                if(visible)
                    setTimeout(() => { this.searchInput.current.select(); }, 100);
            },
            render: (text) =>
                this.state.searchColumn === dataIndex ? 
                ( <Highlighter highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                            searchWords={ [ this.state.searchText ] }
                            autoEscape
                            textToHighlight={text ? text.toString() : ''} />) : 
                ( text ),
        });

        const columns = [
            {
                title: 'Student',
                dataIndex: 'studentName',
                key: 'studentName',
                ...getColumnSearchProps('studentName'),
            },
            {
                title: 'score',
                dataIndex: 'score',
                key: 'score',
                ...getColumnSearchProps('score'),
            }
        ];
        
        
        const styleColorOne = {
            color: "#fff",
            background: "#7dbcea"
        }

        return(
            <Layout>
                <Header style={ styleColorOne }>Simple student entry app</Header>
                <Content>
                    <Table columns={ columns }
                            dataSource={ this.props.students }
                            rowKey={ record => record.id }/>
                </Content>
                <Footer style={ styleColorOne }>Built by 
                    @Jayrick Gacayan
                </Footer>
            </Layout>
        )
    }
}

export default StudentContainer;
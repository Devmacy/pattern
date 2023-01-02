import "./Provider.css"

function Provider() {
    const data = {
        title: '学习',
        text: '提供者模式',
        listItem: ['#0', '#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10',
            '#11', '#12', '#13', '#14', '#15', '#16', '#17', '#18', '#19', '#20']
    }

    return (
        <div className="main-container">
            <SideBar data={data}/>
            <Content data={data}/>
        </div>
    )
}

const SideBar = ({data}) => <List data={data}/>

const List = ({data}) => <ListItem data={data}/>

const ListItem = ({data}) => <div className="list-item">{data.listItem.map((item) => (
    <span key={item}>{item}</span>))}</div>

const Content = ({data}) => (
    <div>
        <Header data={data}/>
        <Block data={data}/>
    </div>
)

const Header = ({data}) => <div>{data.title}</div>
const Block = ({data}) => <Text data={data}/>
const Text = ({data}) => <h1>{data.text}</h1>

export default Provider

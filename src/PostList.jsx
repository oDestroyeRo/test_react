import React from 'react';
import { Link } from 'react-router-dom';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    const path = props.location.search;
    this.state = { list: [], 
        showList:[] ,
        title: "all" ,
        data: "",
        api: "https://jsonplaceholder.typicode.com/posts",
        url: "/postlist",
        path
    };
    this.searchData = this.searchData.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeData = this.handleChangeData.bind(this);
    this.showTable = this.showTable.bind(this);
  }

  componentDidMount(){
    const {path} = this.state;
    const { title } = this.state;
    const { api } = this.state;
    if (path === ''){
        if (title === 'all'){
            fetch(api)
            .then(response => response.json())
            .then(json => {this.setState({
                list : json
            })
            this.showTable()
            })
        }
    }else{
        fetch(api+path)
        .then(response => response.json())
        .then(json => {this.setState({
            list : json
        })
        this.showTable()
        })
    }
  }

  showTable(){
    const { list } = this.state;
    const showList = list.map(item => (
      <tr key={item.id}>
        <td>
          {
            item.id
          }
        </td>
        <td>
          {
            item.userId
          }
        </td>
        <td>
          {
            item.body
          }
        </td>
        <td>
          {
            item.title
          }
        </td>
      </tr>
      ))
      this.setState({
        showList
      })
  }

  searchData(e){
    e.preventDefault();
    let { api } = this.state;
    let { url } = this.state;
    const {title} = this.state;
    const {data} = this.state;
    if (title !== 'all'){
        url = `?${title}=${data}`
        api = `${api}?${title}=${data}`
    }
    fetch(api)
    .then(response => response.json())
    .then(json => {
        this.setState({
            list : json,
            url,
            data:""
        })
        this.showTable()
    })
  }

  handleChangeData(e){
    this.setState({
        data: e.target.value
    })
  }

  handleChangeTitle(e){
    this.setState({
        title: e.target.value
    })
  }


  render() {
    const { showList } = this.state;
    const { data } = this.state;
    const { title } = this.state;
    const { url } = this.state;
    return (
      <div>
        <form onSubmit={this.searchData}>
          <select value={title} onChange={this.handleChangeTitle}>
            <option value="all">
              all
            </option>
            <option value="id">
              id
            </option>
            <option value="userId">
              userId
            </option>
            <option value="body">
              body
            </option>
            <option value="title">
              title
            </option>
          </select>
          <input type="text" value={data} onChange={this.handleChangeData} />
          <button type="submit">
              search
          </button>
          <Link to={url}> 
              search
          </Link>
        </form>

        <table>
          <thead>
            <tr>
              <th>
                    id
              </th>
              <th>
                    userID
              </th>
              <th>
                    body
              </th>
              <th>
                    title
              </th>
            </tr>
          </thead>
          <tbody>
            { showList }
          </tbody>
        </table>
      </div>
    )
  }
}

export default PostList;

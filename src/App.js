import React, { Component } from 'react';
import Indicator from './Components/Indicator/Indicator';
import Table from './Components/Table/table';
import RowValue from './Components/RowValue/RowValue';
import SelectButton from './Components/SelectButton/SelectButton';
import FilterTable from './Components/FilterTable/FilterTable';
import AddForm from './Components/AddForm/AddForm';
import ButtonForm from './Components/ButtonForm/ButtonForm';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';

class App extends Component {
  state = {
    isSelectButton: false,
    isLoading: false,
    isAddClicked: false,
    result: [],
    search: '',
    sort: 'asc',
    sortСolumn: 'id',
    arrow: '⇅',
    row: null,
    currentPage:0,
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  }

  async fetchResult(url) {
    try {
      const response = await fetch(url)
      const result = await response.json()
    
      this.setState({
        isLoading: false,
        result: _.orderBy(result, this.state.sortСolumn, this.state.sort)
      })
    } catch(err) {
      alert('Что-то пошло не так: ' + err.message);
    }
  }

  onSort = sortСolumn => {
    const cloneResult = this.state.result.concat();
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
    let result = _.orderBy(cloneResult, sortСolumn, sort);
    const arrow = this.state.arrow === '⇅' ? '⇵' : '⇅';
    this.setState({
      result, 
      sort,
      arrow, 
      sortСolumn})
  }

  onSelect = url => {
    this.setState({
      isSelectButton: true,
      isLoading: true,
    })
    this.fetchResult(url)
  }

  rowClick = row => (
    this.setState({row})
  )

  handlePageClick = ({selected}) => (
    this.setState({currentPage: selected})
  )

  onFilter = search => (
    this.setState({search, currentPage: 0})
  )

  getFilterResult() {
    let {result, search} = this.state

    if (!search) {
      return result
    }
    let diffResult = result.filter(item => {
      return ( 
        item['firstName'].toLowerCase().includes(search.toLowerCase()) ||
        item['lastName'].toLowerCase().includes(search.toLowerCase()) ||
        item['email'].toLowerCase().includes(search.toLowerCase())
      );
    });
    if(!diffResult.length) {
      diffResult = this.state.result
    }
    return diffResult
  }

  showAdd = () => {
  		this.setState({isAddClicked:true})
  }

  handleChangeResult = (event)=> {
  	let input = event.target;
		let name = input.name;
		this.setState({
			[input.name] : input.value,
		})
  }

  submitAddResult = (event)=> {
  		event.preventDefault();
  		let result =[...this.state.result]
		result.unshift({
			id: this.state.id,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			phone: this.state.phone,
	});
		this.setState({
			result,
			id: '',
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			isAddClicked: false,
		});
  }
   
  render() {
    const pageNumber = 50;
    if(!this.state.isSelectButton) {
      return (
        <div className='container'>
          <SelectButton onSelect={this.onSelect} />
        </div>
      )
    }
    const filterResult = this.getFilterResult()
    const pageCount = Math.ceil(filterResult.length / pageNumber)
    const dinamicsResult = _.chunk(filterResult, pageNumber)[this.state.currentPage]
    return (
      <div className="container">
        {
        this.state.isLoading 
        ? <Indicator />
        : <React.Fragment>
          <FilterTable onFilter={this.onFilter} />
          { 
          this.state.isAddClicked
	    		? <AddForm
	    		addId={this.state.id}
	    		addFirstName={this.state.firstName}
	    		addLastName={this.state.lastName}
	    		addEmail={this.state.email}
	    		addPhone={this.state.phone}
	    		submitAddResult={this.submitAddResult}
	    		handleChangeResult={this.handleChangeResult}
	    		/>
	    		: <ButtonForm onSwitch={this.showAdd}/>
	    		}
          <Table 
          result={dinamicsResult}
          onButton={this.onButton}
          onSort={this.onSort}
          sort={this.state.sort}
          sortColumn={this.state.sortСolumn}
          arrow={this.state.arrow}
          rowClick={this.rowClick}
          />
          </React.Fragment>
        }
        {
        this.state.result.length > pageNumber
        ? <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this.handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        forcePage={this.state.currentPage}
      /> : null
      }
      { 
        this.state.row ? <RowValue person={this.state.row} /> : null
      }       
      </div>
    );
  }
}
export default App;

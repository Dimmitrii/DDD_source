import React from 'react';

import List from "./List";
import SideBarFilter from "./SideBarFilter";

import {items} from "./db";

import styles from "./ShopCatalog.css";

import filterCloth from "./filterCloth";

export default class Page extends React.Component {
    state={
        clothes: items,
        clothType:[],
        accessoriesType:[],
        shoesType:[],
        color:[],
        pattern:[],
        valueFrom:"",
        valueTo:"",
        isLowToHigh:false,
        isHighToLow:false,
        currentPage:1,
        itemsPerPage:15,
        isAsideActive:false,
    }
    componentDidMount(){
        // console.log(this.props.match,"prooooooooooooooooooooooooops")
        const id = this.props.match.params.id;
        console.log(id);
        // if(id === "hats"){
        //     this.setState({accessoriesType:["Головные убор"]});
        // }
        // else if(id === "coats"){
        //     this.setState({clothType:["Пальто"]})
        // }
        // else if(id === "costumes"){
        //     this.setState({clothType:["Костюм"]})
        // }
        // else if(id === "trousers"){
        //     this.setState({clothType:["Брюки"]})
        // }
        // else if(id === "shoes"){
        //     this.setState({shoesType:["Туфли"]})
        // }
        // else if(id === "accessories"){
        //     this.setState({accessoriesType:["Головные убор","Шарф","Галстук"]})
        // }
        // else if(id === "blazers"){
        //     this.setState({clothType:["Пиджак"]})
        // }
        // else if(id === "tShirts"){
        //     this.setState({clothType:["Рубашка"]})
        // }
        // else if(id === "ties"){
        //     this.setState({accessoriesType:["Галстук"]})
        // }
        const mediaQuery = window.matchMedia('(max-width: 1242px)');
        const mediaQuery2 = window.matchMedia('(max-width: 768px)');
        if(mediaQuery.matches){
            this.setState({itemsPerPage:10});
        }
        else if(mediaQuery2.matches){
            this.setState({itemsPerPage:10})
        }
        mediaQuery.addEventListener("change",(e)=>{
            if(e.matches){
                this.setState({itemsPerPage:10})
            }
            else if(!e.matches){
                this.setState({itemsPerPage:15})
            }
        })
        mediaQuery2.addEventListener("change",()=>{
            this.setState({isAsideActive:false})
        })
    }
    onChangeCheckBox = (e,type)=>{
        console.log(e.target.value)
        console.log(type)
        // console.log(this.state);
        let currentArray = this.state[type];
        // console.log(currentArray.push(e.target.value))
        console.log(currentArray)
        if(e.target.checked === true){
            currentArray.push(e.target.value)
            this.setState({[type]: currentArray,currentPage:1})
        }
        else if(e.target.checked === false){
            this.setState({[type]: currentArray.filter(item => item !== e.target.value),currentPage:1})
        }
    }
    onChangeCost = (e)=>{
        if(isNaN(e.target.value)) return;
        const {value,title} = e.target;
        this.setState({[title]:value,currentPage:1});
    }
    lowToHigh = ()=>{
        this.setState({isLowToHigh: !this.state.isLowToHigh,isHighToLow:false,currentPage:1})
    }
    highToLow = ()=>{
        this.setState({isHighToLow: !this.state.isHighToLow,isLowToHigh:false,currentPage:1})
    }
    handleChangePage = (page)=>{
        this.setState({currentPage:page})
    }
    handlePaginationArrow = (direction,lastPage)=>{
        if(direction === "left" && this.state.currentPage !== 1){
            this.setState({currentPage: this.state.currentPage-1})
        }
        else if(direction === "right" && this.state.currentPage !== lastPage){
            this.setState({currentPage: this.state.currentPage+1})
        }
    }
    handleAside = ()=>{
        this.setState({isAsideActive:!this.state.isAsideActive})
    }
    handleAsideOff = ()=>{
        this.setState({isAsideActive:false})
    }
    onIdChange = (filters,type)=>{
        this.setState({accessoriesType:[],clothType:[],shoesType:[]},()=>{this.setState({[type]:filters})});
    }
    render() {
        const {clothes,clothType,accessoriesType,color,pattern,valueFrom,valueTo,isHighToLow,isLowToHigh,currentPage,itemsPerPage,shoesType,isAsideActive} = this.state;
        // console.log(clothes,"fgasfasfsafasfasfasfasfsa")
        const currentCloth = filterCloth(clothes,clothType,accessoriesType,color,pattern,valueFrom,valueTo,isLowToHigh,isHighToLow,shoesType);
        console.log(currentCloth,"фафыафыафыафыааы");
        // console.log(this.state)
        // console.log((currentPage-1)*itemsPerPage);
        // console.log(currentPage*itemsPerPage);
        // console.log(this.handleChangePage,"fasfasfsafasfasfasfaaaaaaaaaaaaaaas")
        return (
            <div className="catalog-wrapper" style={{margin:"0 auto",width:"fit-content"}}>
                <div className="list-container">
                    <SideBarFilter onChange={this.onChangeCheckBox} onChangeCost={this.onChangeCost} valueFrom={this.state.valueFrom} valueTo={this.state.valueTo}
                    match={this.props.match} isAsideActive={isAsideActive} handleAsideOff={this.handleAsideOff} onIdChange={this.onIdChange}/>
                    <List clothes={currentCloth.slice((currentPage-1)*itemsPerPage,currentPage*itemsPerPage)} onChangeLow={this.lowToHigh} onChangeHigh={this.highToLow} 
                    isHighToLow={isHighToLow} isLowToHigh={isLowToHigh} itemsPerPage={itemsPerPage} currentPage={currentPage} onChangePage={this.handleChangePage}
                    clothLength={currentCloth.length} onClickArrow={this.handlePaginationArrow} match={this.props.match} handleAside={this.handleAside}/> 
                    {/* <Footer/>    */}
                </div>
                {/* <Footer/>  */}
            </div>
        )
    }
}


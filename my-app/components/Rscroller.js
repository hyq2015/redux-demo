import React ,{Component} from 'react'
import Loader from './bottomLoader'
import '../src/styles/rscroll.less'
let contentHeight=0;
let loadingStatus=false;
export default class Rscroller extends Component{
    constructor(props){
        super(props)
        this.onScroll=this.onScroll.bind(this)
        this.refreshScroll= this.refreshScroll.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll,false)
        contentHeight=this.refs.Rscroller.offsetHeight;
        console.log(contentHeight)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.onScroll,false)
    }
    componentDidUpdate(){
        this.refreshScroll()
    }
    refreshScroll(){
        if(contentHeight!=this.refs.Rscroller.offsetHeight){
            contentHeight=this.refs.Rscroller.offsetHeight
            console.log(contentHeight)
        }
        if(document.body.scrollTop>contentHeight-window.innerHeight){
            if(!loadingStatus){
                loadingStatus=true;
                this.props.loadMoreData()
            }
            
        }
    }
    onScroll(){
        this.refreshScroll();
        // console.log(document.body.scrollTop)
        // console.log(this.refs.Rscroller.offsetHeight)
    }
    
    render(){
        return(
            <div className="R-inifinite-scroll" ref="Rscroller">
                {this.props.children}
                <Loader
                    loadMore={this.props.loadMore}
                    loading={this.props.loading}
                />
            </div>
        )
    }
}
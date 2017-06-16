import React,{Component} from 'react';
import '../src/styles/preloadimgtag.less'
import PUBLIC from '../src/js/public'

export default class PreloadImgTag extends Component{
    constructor(props){
        super(props);
        this.state={
            imgurl:''
            
        }
        this.setNewImgSrc=this.setNewImgSrc.bind(this);
    }
    componentDidMount(){
        this.setState({
            imgurl:this.props.imgcrop ? PUBLIC.defaultPreLoadImg+this.props.imgcrop : PUBLIC.defaultPreLoadImg
        })
    }
    setNewImgSrc(e){
        this.setState({
            imgurl:e.target.src
           
        })
    }
    render(){
        let defaultStyle={display:'inline-block',fontSize:0};
        let newStyle=Object.assign({},defaultStyle,this.props.imgstyle)
        return(
            <div className={this.props.RclassName ? `preloadimgtag ${this.props.RclassName}` : 'preloadimgtag'} style={newStyle}>
                <img onLoad={this.props.onloadCallBack} src={this.state.imgurl} style={{width:'100%',height:'100%'}}/>
                <img onLoad={this.setNewImgSrc} src={this.props.imgcrop ? this.props.imgurl+this.props.imgcrop : this.props.imgurl} style={{width:'100%',height:'100%',display:'none'}}/>
            </div>
        )
    }
}
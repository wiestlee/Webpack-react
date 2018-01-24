/**
 * Created by Acer on 2017/12/21.
 */
import React,{Component} from "react"

const styles = {
    mask: {
        width:1200,
        height:"350px",
        margin:"0 auto",
        border:"3px solid #e4393c",
        background:'#FFF',
        overflow:'hidden'
    }
};

export default class extends Component{
    constructor(props){
        super();
        this.state = {
               productMessage:[{
                   id:"0021",
                   productName:"美邦轻薄羽绒服",
                   productPrice:"288￥",
                   imgSrc:"//img10.360buyimg.com/jdcms/s249x232_jfs/t6712/280/1664138391/14038/de8e9deb/5955f299Ndd9cc531.jpeg"
               },{
                   id:"0022",
                   productName:"美邦轻薄羽绒服",
                   productPrice:"288￥",
                   imgSrc:"//img10.360buyimg.com/jdcms/s249x232_jfs/t6712/280/1664138391/14038/de8e9deb/5955f299Ndd9cc531.jpeg"
               },{
                   id:"0023",
                   productName:"美邦轻薄羽绒服",
                   productPrice:"288￥",
                   imgSrc:"//img10.360buyimg.com/jdcms/s249x232_jfs/t6712/280/1664138391/14038/de8e9deb/5955f299Ndd9cc531.jpeg"
               },{
                   id:"0024",
                   productName:"美邦轻薄羽绒服",
                   productPrice:"288￥",
                   imgSrc:"//img10.360buyimg.com/jdcms/s249x232_jfs/t6712/280/1664138391/14038/de8e9deb/5955f299Ndd9cc531.jpeg"
               },{
                   id:"0025",
                   productName:"美邦轻薄羽绒服",
                   productPrice:"288￥",
                   imgSrc:"//img10.360buyimg.com/jdcms/s249x232_jfs/t6712/280/1664138391/14038/de8e9deb/5955f299Ndd9cc531.jpeg"
               },{
                   id: "0026",
                   productName: "美邦轻薄羽绒服",
                   productPrice: "288￥",
                   imgSrc: "//img10.360buyimg.com/jdcms/s249x232_jfs/t6712/280/1664138391/14038/de8e9deb/5955f299Ndd9cc531.jpeg"
               }]
        }
    }

    render(){
        let productData = this.state.productMessage;
        productData.map(function (e,i) {
            return (<div>

                </div>)
        })
        return (
            <div style={styles.mask}>
                    <div style={{width:"400px",height:"350px",float:"left",borderRight:"1px solid #ddd"}}>
                         <div style={{textAlign:"left",marginLeft:"15px"}}>
                           <h4>美邦轻薄羽绒服</h4>
                           <p style={{margin:"10px 0",fontSize:15,color:"red"}}>低至29元</p>
                           <a href="" style={{
                               display:"block",
                               width:"80px",
                               height:"20px",
                               lineHeight:"20px",
                               backgroundColor:"#CB2953",
                               borderRadius:"0 25px 25px 0",
                               color:"#fff",
                               fontSize:"12px",
                               textAlign:"center",
                               textDecoration:"none"}}>
                           点击进入 ></a>
                         </div>
                            <div style={{width:"400px",height:"260px",overflow:"hidden",position:"relative"}}>
                             <img style={{width:"300px",height:"320px",position:'absolute',bottom:"-10px",right:"10px"}} src="//img10.360buyimg.com/jdcms/s249x232_jfs/t6712/280/1664138391/14038/de8e9deb/5955f299Ndd9cc531.jpeg" />
                            </div>
                         </div>

                    <div>
                      <ul>
                            <li style={{width:"265px",height:"170px",backgroundColor:"green",float:"left"}}></li>
                            <li style={{width:"265px",height:"170px",backgroundColor:"red",float:"left"}}></li>
                            <li style={{width:"265px",height:"170px",backgroundColor:"gray",float:"left"}}></li>
                            <li style={{width:"265px",height:"170px",backgroundColor:"blue",float:"left"}}></li>
                            <li style={{width:"265px",height:"170px",backgroundColor:"green",float:"left"}}></li>
                            <li style={{width:"265px",height:"170px",backgroundColor:"orange",float:"left"}}></li>

                      </ul>
                    </div>

            </div>

        )
    }
}
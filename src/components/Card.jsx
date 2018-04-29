import React from 'react';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';  
import Divider from 'material-ui/Divider';

export default class ListCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };
  
  render() {
    const product = this.props.product;
    let path  = require("../images/"+product.productImage);
    let subtitle = '';
    if(product.isExclusive)
    {
      subtitle = "Exclusive";
    }
    if(product.isSale)
    {
      subtitle += " Sale";
    }
    return (
      <Card
      expanded={this.state.expanded} 
      onExpandChange={this.handleExpandChange}
      style={{width:'380px'}}
      >
      <CardHeader
          title = {product.productName}
          subtitle = {subtitle}
          actAsExpander={true}
          showExpandableButton={true}
          style={{minHeight:'70px',color:'#1976D2'}}
          titleColor="#e91685"
          titleStyle={{fontSize:'20px'}}
          subtitleColor="#000"
        />
      <Divider/>
      <CardMedia>
      <img src={path} alt="Cloth" style={{padding:'auto',margin:'auto'}}/> 
      </CardMedia>
      <CardText
      style={{display:'flex',flexWrap:'wrap',justifyContent:'flex-end'}}
      >
      </CardText>
      <Divider/>
      <CardText
      expandable={true}
      style={{display:'flex',flexWrap:'wrap',
      justifyContent:'center'}}
      >
      <Paper
      zDepth={2}
      style={{height:'35px',backgroundColor:'#e91685',color:"#fff",
      padding:'10px',marginRight:'10px'}}
      >
      Price : {product.price}   
      </Paper> 
      <Paper
      zDepth={2}
      style={{height:'35px',backgroundColor:'#e91685',color:"#fff",padding:'10px'}}
      >
        Sizes Available : {product.size.join(' , ')}   
      </Paper>

      </CardText>  

      </Card>
    );
  }
}

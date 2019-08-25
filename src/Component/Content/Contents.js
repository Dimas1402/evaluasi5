import React from 'react'
import Content from './Content'

class Contents extends React.Component{
	constructor(props){
		super(props)
		this.state={
			data :[{
				title :'Alamat     : Bekasi'	
			},{
				title :'Umur       : 18 Tahun'
			},{
				title :'TTL        : Bekasi, 14 Februari 2001'
			}]
		}
	}

	render(){
		return(
			this.state.data.map(item=>{
				return(
					<>
					<div>
						<Content tulisan={item.title}/>
					</div>
					</>
				)
			})
		)
	}
}






export default Contents
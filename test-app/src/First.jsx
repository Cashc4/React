import React from 'react';

class First extends React.Component {
     
   
      constructor(props){
        console.log('Сработал конструктор')
        super();
        
        this.state = {
            a: props.test
        }
      }
      btnFun =() =>{
       
        let test = this.state.a;
        test++
        this.setState({a: test})
       
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        console.log(state)
        console.log(props)
        return null
    }
componentDidMount(){
    console.log('Компонент отрисовалася')
}
componentDidUpdate(){
    console.log('Компонент отрисовалася')
}


    render (){
        console.log('рендер')
       return(
        <div>
            {console.log('return')}
            <button onClick={this.btnFun}>Кнопка</button>
            <div>
                {this.state.a}

           
      
          </div>
        </div>



        )
       
      

    }
     
}

export default First
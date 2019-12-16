import React, { Component } from 'react';
import teamList from './teamLIst';
import './styles.css';





class Team extends Component {
  constructor (props) {
    super (props);
    this.state = {
      isTab: '01',
    };
  }

  toggleTab = (id) => {
    this.setState( {
      isTab: id,
    });
  }

  render () {
    return (
      <section className='team'>
        <div className="wrapper">
          <p className="team__title">
            Our Team.
          </p>
          <p className="team__subtext">
            We understand your requirement and provide quality works.
          </p>
          <div class="team__boxes">
            {
              this.props.list && this.props.list.map(item => {
                return (
                  <a onClick={() => this.toggleTab(`${item.id}`)} className={`box ${item.color}`}>
                    <div class="box__img">
                      <img src={item.img} alt="" />
                    </div>
                    <div class="box__footer">
                      <p class="box__name">
                        {item.name}
                      </p>
                      <p class="box__post">
                        {item.post}
                      </p>
                    </div>
                  </a> 
                );                
              })
            }
          </div>
            {console.log(this.state.isTab)}
          <div class="team__tabs">
            <div class="tab">
              <p class="tab__title">
                {this.props.list[this.state.isTab - 1].title}
              </p>
              <div class="tab__container">
                <p class="tab__info">
                  {this.props.list[this.state.isTab - 1].info}
                </p>
                <div class="tab__links">
                links
                </div>
              </div>
            </div>
          </div>
        </div>  
      </section>
    )
  }

}





export default () => {
  return (
    <Team list = {teamList} />
  )
};

import React, { Component } from 'react'
import { Spinner } from '../layouts/Spinner';
import { Link } from 'react-router-dom';

export class User extends Component {

  render() {
    const { name, hireable, avatar_url, location } = this.props.user;
    const { loading } = this.props;

    if (loading) return <Spinner/>

    return (
      <>
        <Link to='/' className='btn btn-light'>Back to Search</Link>
        Hireable: {' '} {hireable ? <i className='fas fa-check text-success'/> : <i className='fas fa-times-circle text-danger'/>}
        <div className='card grid-2'>
          <div className='all-center'>
            <img src={avatar_url} className='round-img' alt='user profile image' style={{ width: '150px'}}/>
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
        </div>
      </>
    )
  }
}

export default User;
import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'bonsai trees', 
                imageUrl: 'https://images.unsplash.com/photo-1549133888-b32c56a5ee64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=743&q=80',
                id: 1
            },{
                title: 'potted flowers',
                imageUrl: 'https://images.unsplash.com/photo-1522790478022-8eb1742bf506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                id: 2
            },{
                title: 'succulents',
                imageUrl: 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                id: 3
            },{
                title: 'cacti',
                imageUrl: 'https://images.unsplash.com/photo-1518397289666-db92164ebba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                size: 'large',
                id: 4
            },{
                title: 'herbs',
                imageUrl: 'https://images.unsplash.com/photo-1533792344354-ed5e8fc12494?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                size: 'large',
                id: 5
            }]
        }
    }

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;
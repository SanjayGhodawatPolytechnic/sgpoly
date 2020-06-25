import React from 'react';

const Card = () => {
    return (
        <div className="card" >
            <img src={"https://images.unsplash.com/photo-1592985791547-d64ed6e40189?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim alias perspiciatis labore quam rerum itaque iusto sint recusandae, eius consequatur.</p>
            </div>
          </div>
    );
}

export default Card;

import React from 'react';
import Main from '../../ReusableComponents/Main';
import './CSS/AddStaffMember.css'

const AddStaffMember = () => {
    return (
        <Main> 
            <form>
                <div class="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
            
                    <label for="email"><b>Username</b></label>
                    <input type="text" name="username" placeholder="Enter Username" required />
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />
                
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
            
                        <label for="email"><b>Phone Number</b></label>
                    <br />
                <select name="phoneCode" required>
                    <option selected hidden value="">Code</option>
                    <option value="66">+98</option>
                    <option value="66">+99</option>
                    <option value="66">+90</option>
                    <option value="66">+66</option>
                </select>
                <input type="phone" name="phone" placeholder="812345678" required />
                            
            
                <div class="clearfix">
            
                    <button type="submit" class="btn">Sign Up</button>
                </div>
                </div>
            </form>
        </Main>
    );
}

export default AddStaffMember;

import React from 'react';
import Button from "../components/button";

const Home = () => {
    return (
<<<<<<< HEAD
        <div>
           <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-gardient via-purple-gardient to-pink-gardient font-Jost font-medium text-6xl">
Page for testing Tailwind
</div>
            
       
        <Button type = "button" buttonStyle="btn--blue" buttonSize="btn--medium">Edit Feedback</Button>
        <Button type = "button" buttonStyle="btn--purple" buttonSize="btn--medium">Post Comment</Button>
        <Button type = "button" buttonStyle="btn--cancel" buttonSize="btn--large">Cancel</Button>
        <Button type = "button" buttonStyle="btn--delete" buttonSize="btn--large">Delete</Button>
        <Button type = "button" buttonStyle="btn--purple" buttonSize="btn--large">Save Changes</Button>
=======
        <div style={{dispay: "flex"}}>
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-pink font-Jost font-medium text-6xl">
                Page for testing Tailwind
            </div>
>>>>>>> 4fc05fea8616ba2fa88a1af29171e514b81a6589
        </div>
       
    );
};

export default Home;
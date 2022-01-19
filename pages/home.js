import React from 'react';
import Button from "../components/button";

const Home = () => {
    return (
        <div>
           <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-gardient via-purple-gardient to-pink-gardient font-Jost font-medium text-6xl">
Page for testing Tailwind
</div>
            
       
        <Button type = "button" buttonStyle="btn--blue" buttonSize="btn--medium">Edit Feedback</Button>
        <Button type = "button" buttonStyle="btn--purple" buttonSize="btn--medium">Post Comment</Button>
        <Button type = "button" buttonStyle="btn--cancel" buttonSize="btn--large">Cancel</Button>
        <Button type = "button" buttonStyle="btn--delete" buttonSize="btn--large">Delete</Button>
        <Button type = "button" buttonStyle="btn--purple" buttonSize="btn--large">Save Changes</Button>
        </div>
       
    );
};

export default Home;